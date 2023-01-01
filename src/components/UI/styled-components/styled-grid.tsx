import React, { FC } from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 25px;
`
const StyledGrid: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Grid>{children}</Grid>
}

export default StyledGrid
