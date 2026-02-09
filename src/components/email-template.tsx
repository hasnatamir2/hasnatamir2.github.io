
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Link,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  projectType?: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  projectType,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Section style={infoSection}>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong>{' '}
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
            {projectType && (
              <Text style={text}>
                <strong>Project Type:</strong> {projectType}
              </Text>
            )}
          </Section>

          <Section style={messageSection}>
            <Text style={messageLabel}>Message:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={tipSection}>
            <Text style={tipText}>
              💡 <strong>Quick Reply:</strong> Just hit reply to respond directly to {name}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function ConfirmationEmailTemplate({ name }: { name: string }) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thanks for reaching out, {name}!</Heading>
          
          <Text style={text}>
            I've received your message and appreciate you taking the time to contact me.
            I'll review your inquiry and get back to you within 24-48 hours.
          </Text>

          <Section style={linksSection}>
            <Text style={text}>
              <strong>In the meantime, feel free to:</strong>
            </Text>
            <Text style={text}>
              • Check out my{' '}
              <Link href="https://hasnat.dev/#projects" style={link}>
                latest projects
              </Link>
            </Text>
            <Text style={text}>
              • Connect with me on{' '}
              <Link href="https://linkedin.com/in/hasnatamir2" style={link}>
                LinkedIn
              </Link>
            </Text>
            <Text style={text}>
              • Browse my code on{' '}
              <Link href="https://github.com/hasnatamir2" style={link}>
                GitHub
              </Link>
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={signature}>
            Best regards,<br />
            <strong>Hasnat Amir</strong><br />
            <span style={{ color: '#6b7280', fontSize: '14px' }}>
              Lead Full-Stack Engineer
            </span>
          </Text>

          <Text style={footer}>
            This is an automated confirmation email. Please do not reply to this message.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f9fafb',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#2563eb',
  fontSize: '24px',
  fontWeight: '700',
  margin: '40px 0 20px',
  padding: '0 40px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 10px',
  padding: '0 40px',
};

const infoSection = {
  backgroundColor: '#f9fafb',
  padding: '20px 40px',
  margin: '20px 0',
};

const messageSection = {
  backgroundColor: '#ffffff',
  padding: '20px 40px',
  margin: '20px 0',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
};

const messageLabel = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 10px',
};

const messageText = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const tipSection = {
  backgroundColor: '#eff6ff',
  padding: '15px 40px',
  margin: '20px 0',
  borderRadius: '8px',
};

const tipText = {
  color: '#1e40af',
  fontSize: '14px',
  margin: '0',
};

const linksSection = {
  backgroundColor: '#f9fafb',
  padding: '20px 40px',
  margin: '20px 0',
  borderRadius: '8px',
};

const link = {
  color: '#2563eb',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '30px 40px',
};

const signature = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '0 40px',
  margin: '20px 0',
};

const footer = {
  color: '#9ca3af',
  fontSize: '12px',
  padding: '0 40px',
  margin: '30px 0 0',
};