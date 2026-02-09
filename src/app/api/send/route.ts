import {
  ContactEmailTemplate,
  ConfirmationEmailTemplate,
} from '../../../components/email-template'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, projectType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    const { data: notificationData, error: notificationError } =
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['hasnatamir2@gmail.com'],
        subject: `New Contact Form Submission from ${name}`,
        react: ContactEmailTemplate({
          name,
          email,
          projectType,
          message,
        }),
        replyTo: email,
      })

    if (notificationError) {
      console.error('Notification email error:', notificationError)
      return NextResponse.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      )
    }

    const { data: confirmationData, error: confirmationError } =
      await resend.emails.send({
        from: 'Hasnat Amir <onboarding@resend.dev>',
        to: [email],
        subject: 'Thanks for reaching out!',
        react: ConfirmationEmailTemplate({ name }),
      })

    if (confirmationError) {
      console.error('Confirmation email error:', confirmationError)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        id: notificationData?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
