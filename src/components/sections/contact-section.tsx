import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Typography } from '../../theme'
import { StyledSocialButton } from '../UI/styled-components'
import { socialLinks } from '../../data/content'

const ContactSection: FC = () => {
  return (
    <section className="contact-section" id="contact">
      <Typography.H2>Contact</Typography.H2>
      <Typography.P>Lets get in touch</Typography.P>
      <div className="social-buttons">
        {socialLinks.map((link, index) => (
          <StyledSocialButton href={link.url} key={index}>
            <FontAwesomeIcon icon={link.logo as IconProp} />
          </StyledSocialButton>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
