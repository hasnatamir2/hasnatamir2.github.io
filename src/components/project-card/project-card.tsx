import { FC, ReactNode } from 'react'
import { StyledProjectCard } from '../styled-components'

const ProjectCard: FC<{
  icon: ReactNode
  title: string
  url: string
  tools: string[]
}> = ({}) => {
  return <StyledProjectCard>project-card</StyledProjectCard>
}

export default ProjectCard
