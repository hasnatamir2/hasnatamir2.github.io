import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import type { CSSProperties, ReactNode } from 'react'
import { SITE_URL } from '../lib/seo'

interface ContactEmailProps {
  name: string
  email: string
  projectType?: string
  message: string
}

interface ConfirmationEmailProps {
  name: string
  projectType?: string
  message?: string
}

/*
 * Tokens mirror the site (globals.css / hero.css): warm paper background,
 * hairline borders, square corners, light type, tiny tracked blue labels,
 * and a muted second line on headings. Dark values follow the `.dark` theme
 * and apply where the client supports prefers-color-scheme (Apple Mail etc.).
 */
const c = {
  page: '#f3f0ec',
  card: '#fdfcfb',
  fg: '#1e232e',
  muted: '#676e7e',
  border: '#d6dae0',
  blue: '#2563eb',
  cyan: '#087f98',
}

const fontSans =
  'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif'
const fontMono =
  '"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace'

const AVATAR_URL = `${SITE_URL}/brand/icons/app-192.png`
const LINKEDIN = 'https://linkedin.com/in/hasnatamir2'
const GITHUB = 'https://github.com/hasnatamir2'

const darkRules: Array<[string, string]> = [
  ['html', 'background-color: #1b1d20 !important;'],
  ['.e-page', 'background-color: #1b1d20 !important;'],
  [
    '.e-card',
    'background-color: #222428 !important; border-color: #35373b !important;',
  ],
  ['.e-fg', 'color: #e8e9ec !important;'],
  ['.e-muted', 'color: #93979f !important;'],
  ['.e-blue', 'color: #60a5fa !important;'],
  ['.e-cyan', 'color: #67e8f9 !important;'],
  ['.e-rule', 'border-color: #35373b !important;'],
  [
    '.e-btn',
    'background-color: #60a5fa !important; border-color: #60a5fa !important;',
  ],
  ['.e-btn a', 'color: #152334 !important;'],
  ['.e-btn-ghost', 'border-color: #35373b !important;'],
]

// Apple Mail / Outlook.com use the media query; the Outlook apps expose
// dark mode through [data-ogsc] (text) and [data-ogsb] (backgrounds) instead.
const darkCss = `
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  @media (prefers-color-scheme: dark) {
    ${darkRules.map(([sel, decl]) => `${sel} { ${decl} }`).join('\n    ')}
  }
  ${darkRules
    .map(([sel, decl]) => {
      const attr = decl.includes('background-color') ? 'data-ogsb' : 'data-ogsc'
      return `[${attr}] ${sel} { ${decl} }`
    })
    .join('\n  ')}
  @media (max-width: 480px) {
    .e-pad { padding-left: 24px !important; padding-right: 24px !important; }
    .e-h1 { font-size: 24px !important; }
  }
`

function Shell({
  preview,
  children,
}: {
  preview: string
  children: ReactNode
}) {
  return (
    <Html lang='en'>
      <Head>
        <meta name='color-scheme' content='light dark' />
        <meta name='supported-color-schemes' content='light dark' />
        <style>{darkCss}</style>
      </Head>
      <Preview>{preview}</Preview>
      <Body className='e-page' style={body}>
        <Container className='e-card' style={container}>
          {children}
        </Container>
      </Body>
    </Html>
  )
}

/** Terminal-window mark from the sidebar (`> HA_`), rebuilt in plain HTML. */
function TerminalMark() {
  return (
    <table
      role='presentation'
      cellPadding={0}
      cellSpacing={0}
      style={{ borderCollapse: 'separate' }}
    >
      <tbody>
        <tr>
          <td
            style={{
              border: `2px solid ${c.blue}`,
              borderRadius: '8px',
              padding: '7px 12px 8px',
              fontFamily: fontMono,
              lineHeight: '1',
            }}
          >
            <div style={{ fontSize: '7px', letterSpacing: '3px' }}>
              <span style={{ color: '#ef4444' }}>●</span>
              <span style={{ color: '#f59e0b' }}>●</span>
              <span style={{ color: '#10b981' }}>●</span>
            </div>
            <div
              className='e-blue'
              style={{
                marginTop: '6px',
                fontSize: '13px',
                fontWeight: 700,
                color: c.blue,
              }}
            >
              &gt; HA_
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

function Header({ status }: { status: string }) {
  return (
    <Section className='e-pad' style={{ padding: '32px 40px 0' }}>
      <Row>
        <Column style={{ verticalAlign: 'middle' }}>
          <TerminalMark />
        </Column>
        <Column align='right' style={{ verticalAlign: 'middle' }}>
          <Text className='e-blue' style={availability}>
            <span className='e-cyan' style={{ color: c.cyan }}>
              ■
            </span>
            &nbsp;&nbsp;{status}
          </Text>
        </Column>
      </Row>
    </Section>
  )
}

function Headline({
  eyebrow,
  title,
  continuation,
  children,
  aside,
}: {
  eyebrow: string
  title: string
  continuation: string
  children: ReactNode
  aside?: ReactNode
}) {
  return (
    <Section className='e-pad' style={{ padding: '40px 40px 36px' }}>
      <Row>
        <Column style={{ verticalAlign: 'middle' }}>
          <Text className='e-blue' style={eyebrowStyle}>
            {eyebrow}
          </Text>
          <Text className='e-h1 e-fg' style={h1}>
            {title}
            <br />
            <span className='e-muted' style={{ color: c.muted }}>
              {continuation}
            </span>
          </Text>
          <Text className='e-muted' style={description}>
            {children}
          </Text>
        </Column>
        {aside ? (
          <Column align='right' width={112} style={{ verticalAlign: 'middle' }}>
            {aside}
          </Column>
        ) : null}
      </Row>
    </Section>
  )
}

function Avatar() {
  return (
    <Img
      src={AVATAR_URL}
      width='96'
      height='96'
      alt='Hasnat Amir'
      className='e-rule'
      style={{ display: 'block', border: `1px solid ${c.border}` }}
    />
  )
}

function Label({ children }: { children: ReactNode }) {
  return (
    <Text className='e-blue' style={label}>
      {children}
    </Text>
  )
}

/** Hairline-ruled key/value row, like the facts strip under the hero. */
function Fact({
  term,
  children,
  last,
}: {
  term: string
  children: ReactNode
  last?: boolean
}) {
  return (
    <Row>
      <Column
        className='e-rule'
        width={120}
        style={{
          ...factCell,
          borderBottom: last ? 'none' : `1px solid ${c.border}`,
        }}
      >
        <Text className='e-muted' style={factTerm}>
          {term}
        </Text>
      </Column>
      <Column
        className='e-rule'
        style={{
          ...factCell,
          borderBottom: last ? 'none' : `1px solid ${c.border}`,
        }}
      >
        <Text className='e-fg' style={factValue}>
          {children}
        </Text>
      </Column>
    </Row>
  )
}

function Button({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: ReactNode
}) {
  return (
    <table
      role='presentation'
      cellPadding={0}
      cellSpacing={0}
      align='left'
      style={{ marginRight: '10px', borderCollapse: 'separate' }}
    >
      <tbody>
        <tr>
          <td
            className={primary ? 'e-btn' : 'e-btn-ghost'}
            style={{
              border: `1px solid ${primary ? c.blue : c.border}`,
              backgroundColor: primary ? c.blue : 'transparent',
            }}
          >
            <Link
              href={href}
              className={primary ? undefined : 'e-fg'}
              style={{
                display: 'block',
                padding: '14px 18px',
                fontSize: '12px',
                lineHeight: '16px',
                textDecoration: 'none',
                color: primary ? '#ffffff' : c.fg,
              }}
            >
              {children}
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

function Footer() {
  return (
    <Section
      className='e-pad e-rule'
      style={{ padding: '0 40px', borderTop: `1px solid ${c.border}` }}
    >
      <Row>
        <Column style={{ verticalAlign: 'middle' }}>
          <Text className='e-muted' style={footerText}>
            © {new Date().getFullYear()} Hasnat Amir
          </Text>
        </Column>
        <Column align='right' style={{ verticalAlign: 'middle' }}>
          <Text className='e-muted' style={footerText}>
            <Link href={SITE_URL} className='e-muted' style={footerLink}>
              hasnatdev.com ↗
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link href={GITHUB} className='e-muted' style={footerLink}>
              GitHub
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link href={LINKEDIN} className='e-muted' style={footerLink}>
              LinkedIn
            </Link>
          </Text>
        </Column>
      </Row>
    </Section>
  )
}

/* ------------------------------------------------------------------ */
/* Notification — what lands in the owner's inbox                      */
/* ------------------------------------------------------------------ */

export function ContactEmailTemplate({
  name,
  email,
  projectType,
  message,
}: ContactEmailProps) {
  const firstName = name.trim().split(/\s+/)[0] || name
  const replySubject = encodeURIComponent('Re: your message on hasnatdev.com')

  return (
    <Shell
      preview={`${name}${
        projectType ? ` · ${projectType}` : ''
      }: ${message.slice(0, 90)}`}
    >
      <Header status='New message' />

      <Headline
        eyebrow='CONTACT FORM'
        title={name}
        continuation='wrote in via hasnatdev.com.'
      >
        Replying to this email goes straight to {firstName}.
      </Headline>

      <Section
        className='e-pad e-rule'
        style={{ padding: '0 40px', borderTop: `1px solid ${c.border}` }}
      >
        <Fact term='Name'>{name}</Fact>
        <Fact term='Email'>
          <Link
            href={`mailto:${email}`}
            className='e-blue'
            style={{ color: c.blue, textDecoration: 'none' }}
          >
            {email}
          </Link>
        </Fact>
        <Fact term='Inquiry' last>
          {projectType || 'Not specified'}
        </Fact>
      </Section>

      <Section className='e-pad' style={{ padding: '8px 40px 0' }}>
        <Label>MESSAGE</Label>
        <Section className='e-rule' style={messageBox}>
          <Text className='e-fg' style={messageText}>
            {message}
          </Text>
        </Section>
      </Section>

      <Section
        className='e-pad e-rule'
        style={{
          padding: '28px 40px',
          marginTop: '32px',
          borderTop: `1px solid ${c.border}`,
        }}
      >
        <Button primary href={`mailto:${email}?subject=${replySubject}`}>
          Reply to {firstName}&nbsp;&nbsp;→
        </Button>
        <Button href={`mailto:${email}`}>{email}</Button>
      </Section>

      <Footer />
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* Confirmation — what the sender receives                             */
/* ------------------------------------------------------------------ */

export function ConfirmationEmailTemplate({
  name,
  projectType,
  message,
}: ConfirmationEmailProps) {
  const firstName = name.trim().split(/\s+/)[0] || name

  return (
    <Shell
      preview={`Thanks ${firstName}. I've got your message and will reply within 24–48 hours.`}
    >
      <Header status='Message received' />

      <Headline
        eyebrow='GET IN TOUCH'
        title={`Thanks, ${firstName}.`}
        continuation="I'll reply within 24–48 hours."
        aside={<Avatar />}
      >
        Your message reached me. I read everything myself, so expect a personal
        reply rather than an auto-response.
      </Headline>

      {message ? (
        <Section className='e-pad' style={{ padding: '0 40px 8px' }}>
          <Label>
            WHAT YOU SENT{projectType ? ` · ${projectType.toUpperCase()}` : ''}
          </Label>
          <Section className='e-rule' style={messageBox}>
            <Text className='e-muted' style={messageText}>
              {message}
            </Text>
          </Section>
        </Section>
      ) : null}

      <Section
        className='e-pad e-rule'
        style={{
          padding: '28px 40px',
          marginTop: '32px',
          borderTop: `1px solid ${c.border}`,
        }}
      >
        <Row>
          <Column style={{ verticalAlign: 'middle' }}>
            <Text className='e-muted' style={fact}>
              <span className='e-blue' style={factNumber}>
                24–48h
              </span>
              typical reply time
            </Text>
          </Column>
        </Row>
        <div style={{ height: '16px', lineHeight: '16px' }}>&nbsp;</div>
        <Button primary href={`${SITE_URL}/#projects`}>
          View projects&nbsp;&nbsp;→
        </Button>
        <Button href={SITE_URL}>hasnatdev.com ↗</Button>
      </Section>

      <Section
        className='e-pad e-rule'
        style={{
          padding: '24px 40px 28px',
          borderTop: `1px solid ${c.border}`,
        }}
      >
        <Text className='e-fg' style={signatureName}>
          Hasnat Amir
        </Text>
        <Text className='e-muted' style={signatureRole}>
          Full-stack engineer · Agentic AI · SaaS
        </Text>
        <Text className='e-muted' style={note}>
          Automated confirmation. Reply to this email if you want to add
          anything.
        </Text>
      </Section>

      <Footer />
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */

const body: CSSProperties = {
  backgroundColor: c.page,
  fontFamily: fontSans,
  margin: 0,
  padding: '40px 12px',
}

const container: CSSProperties = {
  maxWidth: '600px',
  width: '100%',
  margin: '0 auto',
  backgroundColor: c.card,
  border: `1px solid ${c.border}`,
}

const availability: CSSProperties = {
  margin: 0,
  fontFamily: fontSans,
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: c.blue,
}

const eyebrowStyle: CSSProperties = {
  margin: 0,
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: c.blue,
}

const h1: CSSProperties = {
  margin: '18px 0 16px',
  fontSize: '30px',
  lineHeight: '42px',
  fontWeight: 300,
  letterSpacing: '-0.8px',
  color: c.fg,
}

const description: CSSProperties = {
  margin: 0,
  maxWidth: '340px',
  fontSize: '13px',
  lineHeight: '24px',
  color: c.muted,
}

const label: CSSProperties = {
  margin: '24px 0 12px',
  fontSize: '10px',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: c.blue,
}

const factCell: CSSProperties = { padding: '0', verticalAlign: 'middle' }

const factTerm: CSSProperties = {
  margin: 0,
  padding: '14px 0',
  fontSize: '12px',
  color: c.muted,
}

const factValue: CSSProperties = {
  margin: 0,
  padding: '14px 0',
  fontSize: '14px',
  color: c.fg,
}

const messageBox: CSSProperties = {
  border: `1px solid ${c.border}`,
  padding: '20px 22px',
}

const messageText: CSSProperties = {
  margin: 0,
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: 300,
  color: c.fg,
  whiteSpace: 'pre-wrap',
}

const fact: CSSProperties = {
  margin: 0,
  fontSize: '11px',
  color: c.muted,
}

const factNumber: CSSProperties = {
  paddingRight: '8px',
  fontSize: '14px',
  color: c.blue,
}

const signatureName: CSSProperties = {
  margin: 0,
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '-0.2px',
  color: c.fg,
}

const signatureRole: CSSProperties = {
  margin: '4px 0 0',
  fontSize: '12px',
  color: c.muted,
}

const note: CSSProperties = {
  margin: '20px 0 0',
  fontSize: '11px',
  lineHeight: '18px',
  color: c.muted,
}

const footerText: CSSProperties = {
  margin: 0,
  padding: '14px 0',
  fontSize: '11px',
  color: c.muted,
}

const footerLink: CSSProperties = { color: c.muted, textDecoration: 'none' }
