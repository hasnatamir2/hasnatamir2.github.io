import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret')

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const { body, isValidSignature } = await parseBody<{
      _type: string
      slug?: { current?: string }
    }>(req, process.env.SANITY_WEBHOOK_SECRET)

    if (process.env.SANITY_WEBHOOK_SECRET && !isValidSignature) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 401 }
      )
    }

    if (!body?._type) {
      return NextResponse.json({ message: 'Bad Request' }, { status: 400 })
    }

    console.log('🔄 Revalidation triggered:', {
      type: body._type,
      timestamp: new Date().toISOString(),
    })

    // Tag-based revalidation (more granular)
    switch (body._type) {
      case 'siteSettings':
        revalidateTag('siteSettings', 'max')
        revalidateTag('homepage', 'max')
        break

      case 'experience':
        revalidateTag('experiences', 'max')
        revalidateTag('homepage', 'max')
        break

      case 'project':
        revalidateTag('projects', 'max')
        revalidateTag('homepage', 'max')
        break

      case 'skill':
        revalidateTag('skills', 'max')
        revalidateTag('homepage', 'max')
        break
      default:
        // Fallback: revalidate entire homepage
        revalidatePath('/', 'layout')
    }

    // Always revalidate the homepage for any content change
    revalidatePath('/')

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      type: body._type,
    })
  } catch (err) {
    console.error('❌ Revalidation error:', err)
    return NextResponse.json(
      {
        message: 'Error revalidating',
        error: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: '✅ Revalidation endpoint is ready',
    timestamp: new Date().toISOString(),
  })
}
