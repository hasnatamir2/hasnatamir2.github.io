import { ImageResponse } from 'next/og'
import { getSiteSettings } from '../../../sanity/lib/data'
import { urlFor } from '../../../sanity/lib/image'

export const runtime = 'nodejs'

export async function GET() {
  const { data: settings } = await getSiteSettings()
  if (!settings)
    return new Response('Portfolio content unavailable', { status: 503 })
  const hero = settings.hero
  const avatarUrl = hero?.avatar?.asset
    ? urlFor(hero.avatar).width(640).format('png').url()
    : null

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: '100%',
          height: '100%',
          padding: '68px 72px',
          background: '#1c1e21',
          color: '#e9eaed',
          fontFamily: 'sans-serif',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 640 }}>
          <div
            style={{
              display: 'flex',
              color: '#60a5fa',
              fontSize: 22,
              marginBottom: 35,
            }}
          >
            {`${settings.name} / ${settings.title}`}
          </div>
          <div style={{ fontSize: 46, lineHeight: 1.22 }}>
            {hero?.heading || settings.pageTabline}
          </div>
          {hero?.headingContinuation ? (
            <div style={{ fontSize: 46, lineHeight: 1.22, color: '#a0a5af' }}>
              {hero.headingContinuation}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.5,
              marginTop: 28,
              color: '#a0a5af',
              maxWidth: 600,
            }}
          >
            {hero?.description || settings.pageSubTitle1}
          </div>
          <div style={{ color: '#60a5fa', fontSize: 20, marginTop: 36 }}>
            hasnatdev.com
          </div>
        </div>
        {avatarUrl ? (
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              left: 810,
              top: 170,
              width: 310,
              height: 310,
            }}
          >
            {/* ImageResponse renders this image directly; next/image cannot run inside Satori. */}
            <img src={avatarUrl} alt='' width={310} height={310} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                left: '37%',
                top: '42%',
                width: '26%',
                height: '6%',
              }}
            >
              {[0, 1].map((eye) => (
                <div
                  key={eye}
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: '26%',
                    height: '100%',
                    background: '#242629',
                    borderRadius: '48%',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '22%',
                      top: '18%',
                      width: '23%',
                      height: '23%',
                      background: '#fff',
                      borderRadius: '50%',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control':
          'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
      },
    }
  )
}
