import { FC } from 'react'
import { Typography } from '../../theme'
import TextSphere from '../text-sphere'

const SkillSection: FC = () => {
  const texts = [
    'HTML',
    'CSS',
    'SASS/LESS',
    'JavaScript',
    'Typescript',
    'React',
    'Redux',
    'NodeJS',
    'Express',
    'Babel',
    'Jquery',
    'GitHub',
    'Webpack',
    'WebSocket',
    'WebHooks',
    'GraphQL',
    'GCP',
    'AWS',
    'Tailwind',
    'Jest/Cypress',
    'MongoDB',
    'MySQL',
    'Moongose',
    'PostgreSQL',
    'Sequelize',
    'Prisma',
    'Docker',
    'Kubernetes',
    'Nginx/Caddy',
    'React Native',
  ]
  return (
    <section className="skill-section" id="skills">
      <div className="">
        <Typography.H2>Skills</Typography.H2>
        <Typography.P>Lorem ipsem</Typography.P>
      </div>
      <TextSphere skills={texts} />
    </section>
  )
}

export default SkillSection
