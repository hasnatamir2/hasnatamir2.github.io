import { FC } from 'react'
import { Typography } from '../../theme'
import {
  StyledAnchor,
  StyledGrid,
  StyledGridItem,
} from '../UI/styled-components'
import ProjectCard from '../project-card'
import PlaceholderLogo from '../icons/placeholder'
import { openSource, projects } from '../../data/content'

interface IRepository {
  name: string
  url: string
  tools: string[]
  description: string
  image: string
}

const PortfolioSection: FC = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header">
        <Typography.H2>Portfolio</Typography.H2>
        <StyledAnchor
          underline={false}
          href={`https://github.com/${openSource.githubUserName}`}
        >
          see more
        </StyledAnchor>
      </div>
      <Typography.P>
        A small gallery of recent projects done all together with amazing people
        around the globe.
      </Typography.P>
      <StyledGrid>
        {projects.length > 0 ? (
          projects.map((repo: IRepository, index: number) => (
            <StyledGridItem key={index}>
              <ProjectCard
                icon={repo.image ? repo.image : <PlaceholderLogo />}
                title={repo.name}
                url={repo.url}
                tools={repo.tools}
              />
            </StyledGridItem>
          ))
        ) : (
          <Typography.P>Nothing to show here</Typography.P>
        )}
      </StyledGrid>
    </section>
  )
}

export default PortfolioSection
