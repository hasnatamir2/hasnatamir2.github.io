import { FC } from 'react'
import { Typography } from '../../theme'
import ComputerSetupIcon from '../icons/computer-setup'
import {
  StyledAnchor,
  StyledContainer,
  StyledRoundAnchor,
} from '../styled-components'
import DownArrow from '../icons/down-arrow'

const HeroSection: FC = () => {
  return (
    <div className="hero-section">
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
      <StyledRoundAnchor>
        <DownArrow />
      </StyledRoundAnchor>
    </div>
  )
}

export default HeroSection
