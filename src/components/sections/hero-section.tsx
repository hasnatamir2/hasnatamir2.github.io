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
import { mainHeading } from '../../data/content'

const HeroSection: FC = () => {
  return (
    <section className="hero-section" id="hero">
      <StyledContainer>
        <span className="hero-text">
          <Typography.H1>
            <div dangerouslySetInnerHTML={{ __html: mainHeading.title }} />
          </Typography.H1>
          <StyledAnchor
            href={
              'https://drive.google.com/file/d/1mCzbiCb007_q9CVNEbh1ClC2YR1Kk_bU/view?usp=share_link'
            }
          >
            Resume
          </StyledAnchor>
        </span>
        <ComputerSetupIcon />
      </StyledContainer>
      <StyledRoundAnchor onClick={() => ScrollTo('#portfolio')}>
        <DownArrow />
      </StyledRoundAnchor>
    </section>
  )
}

export default HeroSection
