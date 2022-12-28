import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>
}

export default StyledContainer
