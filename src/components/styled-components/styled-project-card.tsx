import React, { FC } from 'react'
import styled from 'styled-components'

const ProjectCard = styled.div`
  width: 100%;
  background: rgba(33, 33, 33, 0.25);
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`
const StyledProjectCard: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ProjectCard>{children}</ProjectCard>
}

export default StyledProjectCard
