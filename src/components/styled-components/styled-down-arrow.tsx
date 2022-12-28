import React, { FC } from 'react'
import styled from 'styled-components'

const RoundAnchor = styled.a`
  display: inline-flex;
  padding: 18px 23px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.secondary}`};
  color: ${({ theme }) => theme.text};
  overflow: hidden;
`

const StyledRoundAnchor: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <RoundAnchor>{children}</RoundAnchor>
}

export default StyledRoundAnchor
