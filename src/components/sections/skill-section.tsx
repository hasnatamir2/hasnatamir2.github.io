import { FC } from 'react'
import { Typography } from '../../theme'
import TagSphere from '../text-sphere'
import { skillsContent } from '../../data/content'
import { TagCloudOptions } from 'TagCloud'

const SkillSection: FC = () => {
  return (
    <section className="skill-section" id="skills">
      <div className="section-content">
        <Typography.H2>Skills</Typography.H2>
        <Typography.P>
          <div
            dangerouslySetInnerHTML={{ __html: skillsContent.description }}
          />
        </Typography.P>
      </div>
      <TagSphere
        options={(): TagCloudOptions => ({
          radius: 350,
          maxSpeed: 'normal',
          keep: true,
        })}
        onClick={(tag: string) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {skillsContent.list}
      </TagSphere>
    </section>
  )
}

export default SkillSection
