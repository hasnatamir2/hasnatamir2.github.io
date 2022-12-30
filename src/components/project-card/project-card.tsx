import { Typography } from '../../theme'
import { FC, ReactNode } from 'react'
import { StyledAnchor, StyledProjectCard } from '../UI/styled-components'
import PlaceholderLogo from '../icons/placeholder'

const ProjectCard: FC<{
  icon?: ReactNode
  title: string
  url?: string
  tools?: string[]
}> = ({ icon, title, url, tools }) => {
  return (
    <StyledProjectCard>
      {icon ? icon : <PlaceholderLogo />}
      <Typography.P className="gradient-text">
        {tools?.map((tool, index) =>
          index > 0 ? (
            <span key={index}>, {tool}</span>
          ) : (
            <span key={index}>{tool}</span>
          )
        )}
      </Typography.P>
      <Typography.P>{title}</Typography.P>
      <StyledAnchor href={url} size="sm">
        visit website
      </StyledAnchor>
    </StyledProjectCard>
  )
}

export default ProjectCard
