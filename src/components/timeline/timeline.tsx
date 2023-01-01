import { FC } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '../../theme'

interface IExperience {
  title: string
  company: string
  time: string
  achievment: string
  catagory: string
}

const Timeline: FC<{ experience: IExperience[] }> = ({ experience }) => {
  return (
    <div className="timeline">
      <VerticalTimeline>
        {experience.map((step, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={step.time}
            contentStyle={{
              background:
                'linear-gradient(112.83deg,rgba(0, 0, 0, 0.6) 3.66%,rgba(0, 0, 0, 0.1) 100%)',
              color: '#F6F7F9',
              backdropFilter: 'blur(25px)',
              borderRadius: '16px',
            }}
            iconStyle={
              step.catagory === 'work'
                ? { background: '#8E54E9', color: '#fff' }
                : { background: '#E29587', color: '#fff' }
            }
            icon={
              step.catagory === 'work' ? (
                <FontAwesomeIcon icon={['fas', 'laptop-code']} />
              ) : (
                <FontAwesomeIcon icon={['fas', 'graduation-cap']} />
              )
            }
            key={index}
          >
            <Typography.H3>{step.title}</Typography.H3>
            <Typography.H4>{step.company}</Typography.H4>
            <Typography.P className="gradient-text">
              {step.achievment}
            </Typography.P>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#E29587', color: '#fff' }}
          icon={<FontAwesomeIcon icon={['fas', 'star']} />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Timeline
