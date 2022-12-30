import { FC } from 'react'
import { Typography } from '../../theme'
import {
  StyledAnchor,
  StyledGrid,
  StyledGridItem,
} from '../UI/styled-components'
import ProjectCard from '../project-card'
import PlaceholderLogo from '../icons/placeholder'

const PortfolioSection: FC = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header">
        <Typography.H2>Portfolio</Typography.H2>
        <StyledAnchor underline={false} href="">
          see more
        </StyledAnchor>
      </div>
      <Typography.P>
        A small gallery of recent projects done all together with amazing people
        around the globe.
      </Typography.P>
      <StyledGrid>
        <StyledGridItem>
          <ProjectCard
            icon={<PlaceholderLogo />}
            title="Addidas Ecommerce Store"
            url=""
            tools={['React', 'Redux', 'Firebase']}
          />
        </StyledGridItem>
        <StyledGridItem>
          <ProjectCard
            icon={<PlaceholderLogo />}
            title="Addidas Ecommerce Store"
            url=""
            tools={['React', 'Redux', 'Firebase']}
          />
        </StyledGridItem>
        <StyledGridItem>
          <ProjectCard
            icon={<PlaceholderLogo />}
            title="Addidas Ecommerce Store"
            url=""
            tools={['React', 'Redux', 'Firebase']}
          />
        </StyledGridItem>
        <StyledGridItem>
          <ProjectCard
            icon={<PlaceholderLogo />}
            title="Addidas Ecommerce Store"
            url=""
            tools={['React', 'Redux', 'Firebase']}
          />
        </StyledGridItem>
      </StyledGrid>
    </section>
  )
}

export default PortfolioSection
