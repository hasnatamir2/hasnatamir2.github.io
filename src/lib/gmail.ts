import 'server-only'

import nodemailer from 'nodemailer'
import { render, toPlainText } from '@react-email/components'
import type { ReactElement } from 'react'

export const CONTACT_EMAIL = 'hasnatamir2@gmail.com'

let transport: nodemailer.Transporter | undefined

export function isGmailConfigured() {
  return Boolean(process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ''))
}

function getTransport() {
  if (!isGmailConfigured()) throw new Error('Gmail sending is not configured.')

  if (!transport) {
    transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: CONTACT_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD!.replace(/\s/g, ''),
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      disableFileAccess: true,
      disableUrlAccess: true,
    })
  }
  return transport
}

export async function sendGmail({
  to,
  subject,
  react,
  replyTo,
}: {
  to: string
  subject: string
  react: ReactElement
  replyTo: string
}) {
  try {
    const client = getTransport()
    const html = await render(react)
    const result = await client.sendMail({
      from: { name: 'Hasnat Amir', address: CONTACT_EMAIL },
      to: { address: to, name: '' },
      replyTo: { address: replyTo, name: '' },
      subject,
      text: toPlainText(html),
      html,
      disableFileAccess: true,
      disableUrlAccess: true,
    })
    if (!result.messageId || !result.accepted?.length) {
      throw new Error('Gmail did not accept the recipient.')
    }
    return { id: result.messageId }
  } catch {
    // Keep SMTP authentication details out of logs and API responses.
    throw new Error('Gmail could not send the email. Check the app password.')
  }
}
