import { FC } from 'react'
import { Typography } from '../../theme'
import TextSphere from '../text-sphere'
import { skillsContent } from '../../data/content'

const SkillSection: FC = () => {
  return (
    <section className="skill-section" id="skills">
      <div className="skill-content">
        <Typography.H2>Skills</Typography.H2>
        <Typography.P>
          <div
            dangerouslySetInnerHTML={{ __html: skillsContent.description }}
          />
        </Typography.P>
      </div>
      <TextSphere skills={skillsContent.list} />
    </section>
  )
}

export default SkillSection
