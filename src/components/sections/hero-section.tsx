import { FC } from 'react'
import { Typography } from '../../theme'
import ComputerSetupIcon from '../icons/computer-setup'
import {
  StyledAnchor,
  StyledContainer,
  StyledRoundAnchor,
} from '../UI/styled-components'
import DownArrow from '../icons/down-arrow'
import ScrollTo from '../../utils/scrollTo'

const HeroSection: FC = () => {
  return (
    <section className="hero-section" id="hero">
      <StyledContainer>
        <span className="hero-text">
          <Typography.H1>
            Hi, <br />
            I’m Hasnat, <br />
            software engineer
          </Typography.H1>
          <StyledAnchor href="">view projects</StyledAnchor>
        </span>
        <ComputerSetupIcon />
      </StyledContainer>
      <StyledRoundAnchor href="#portfolio" onClick={ScrollTo}>
        <DownArrow />
      </StyledRoundAnchor>
    </section>
  )
}

export default HeroSection
