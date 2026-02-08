import { EmailTemplate } from '../../../components/email-template'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplateProps } from '@/src/types/content'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json()

    const { email, projectType, message } = requestData as EmailTemplateProps

    if (!email || !projectType || !message)
      return NextResponse.json(
        { error: 'Missing required email or project type or message!' },
        { status: 400 }
      )

    const { data, error } = await resend.emails.send({
      from: email,
      to: ['hasnatamir2@gmail.com'],
      subject: `Devfolio ${projectType} reach by ${email}`,
      react: EmailTemplate(requestData),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
