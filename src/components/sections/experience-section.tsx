import { FC } from 'react'
import Timeline from '../timeline'
import { Typography } from '../../theme'
import { experience } from '../../data/content'

const ExperienceSection: FC = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-content">
        <Typography.H2>Experience</Typography.H2>
        <Typography.P>{experience.subtitle}</Typography.P>
      </div>
      <Timeline experience={experience.experience} />
    </section>
  )
}

export default ExperienceSection
