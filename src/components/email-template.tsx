import { EmailTemplateProps } from "../types/content";

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  )
}
