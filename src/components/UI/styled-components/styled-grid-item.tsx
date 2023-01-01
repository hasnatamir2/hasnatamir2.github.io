import React, { FC } from 'react'
import styled from 'styled-components'

const GItem = styled.div`
  display: flex;
  justify-content: center;
`
const StyledGItem: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <GItem>{children}</GItem>
}

export default StyledGItem
