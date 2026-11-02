import {
  ContactEmailTemplate,
  ConfirmationEmailTemplate,
} from '../../../components/email-template'
import { NextRequest, NextResponse } from 'next/server'
import { TURNSTILE_CONTACT_ACTION } from '../../../lib/turnstile'
import { CONTACT_EMAIL, isGmailConfigured, sendGmail } from '../../../lib/gmail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectType, message } = body

    if (
      typeof name !== 'string' ||
      !name.trim() ||
      name.length > 200 ||
      typeof email !== 'string' ||
      !email ||
      email.length > 254 ||
      typeof message !== 'string' ||
      !message.trim() ||
      message.length > 10_000 ||
      (projectType !== undefined && typeof projectType !== 'string')
    ) {
      return NextResponse.json(
        { error: 'Invalid or missing form fields' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const token = body['cf-turnstile-response']
    if (
      typeof token !== 'string' ||
      token.trim().length === 0 ||
      token.length > 2048
    ) {
      return NextResponse.json(
        { error: 'Please complete the verification before sending.' },
        { status: 403 }
      )
    }

    const secret = process.env.TURNSTILE_SECRET
    const expectedHostnames = new Set(
      (process.env.TURNSTILE_HOSTNAMES ?? '')
        .split(',')
        .map((hostname) => hostname.trim())
        .filter(Boolean)
    )
    const production =
      (process.env.VERCEL_ENV ?? process.env.NODE_ENV) === 'production'

    if (
      !secret?.trim() ||
      expectedHostnames.size === 0 ||
      (production &&
        (expectedHostnames.has('localhost') ||
          expectedHostnames.has('127.0.0.1')))
    ) {
      console.error('Turnstile is not configured for this deployment.')
      return NextResponse.json(
        { error: 'Verification is unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    try {
      const remoteIp = request.headers
        .get('x-forwarded-for')
        ?.split(',')[0]
        ?.trim()
      const verificationResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          signal: AbortSignal.timeout(10_000),
          body: new URLSearchParams({
            secret,
            response: token,
            ...(remoteIp ? { remoteip: remoteIp } : {}),
          }),
        }
      )
      if (!verificationResponse.ok) throw new Error('Siteverify request failed')

      const verification = await verificationResponse.json()
      if (
        verification.success !== true ||
        verification.action !== TURNSTILE_CONTACT_ACTION ||
        !expectedHostnames.has(verification.hostname)
      ) {
        throw new Error('Turnstile verification failed')
      }
    } catch {
      return NextResponse.json(
        { error: 'Verification failed. Please try again.' },
        { status: 403 }
      )
    }

    if (!isGmailConfigured()) {
      console.error('Gmail sending is not configured for this deployment.')
      return NextResponse.json(
        { error: 'Email is unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    let notificationData
    try {
      notificationData = await sendGmail({
        to: CONTACT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        react: ContactEmailTemplate({
          name,
          email,
          projectType,
          message,
        }),
        replyTo: email,
      })
    } catch {
      console.error('Gmail notification email could not be sent.')
      return NextResponse.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      )
    }

    let confirmationSent = true
    try {
      await sendGmail({
        to: email,
        subject: 'Thanks for reaching out!',
        react: ConfirmationEmailTemplate({ name, projectType, message }),
        replyTo: CONTACT_EMAIL,
      })
    } catch {
      confirmationSent = false
      console.error('Gmail confirmation email could not be sent.')
    }

    return NextResponse.json(
      {
        success: true,
        message: confirmationSent
          ? 'Message sent and confirmation email submitted'
          : 'Message received, but the confirmation email could not be sent',
        id: notificationData.id,
        confirmationSent,
      },
      { status: 200 }
    )
  } catch {
    console.error('The contact submission could not be processed.')
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
