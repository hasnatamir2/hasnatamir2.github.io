import { FC } from 'react'
import { Typography } from '../../theme'
import { StyledContainer } from '../styled-components'

const SkillSection: FC = () => {
  return (
    <StyledContainer>
      <div className="">
        <Typography.H2>Skills</Typography.H2>
        <Typography.P>Lorem ipsem</Typography.P>
      </div>
    </StyledContainer>
  )
}

export default SkillSection
