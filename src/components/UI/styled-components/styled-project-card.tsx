import React, { FC } from 'react'
import styled from 'styled-components'

const ProjectCard = styled.div`
  background: rgba(33, 33, 33, 0.25);
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
  overflow: hidden;
  height: 230px;
  width: 330px;
  padding: 27px;
  img {
    height: 160px;
    width: 327px;
    left: 27px;
    top: 63px;
    transition: 250ms ease;
    width: 100%;
    padding: 20px 0;
    position: relative;
    top: 0;
    left: 0;
  }
  p,
  span {
    margin: 4px;
    position: relative;
    top: 50px;
    left: 0;
    transition: 250ms ease;
  }
  .gradient-text span {
    margin: 0;
    position: static;
  }
  &:hover {
    img {
      transform: scale(0.63);
      top: -30px;
      transition: 250ms ease;
      padding: 0;
    }
    p,
    span {
      top: -30px;
      transition: 250ms ease;
    }
  }
`
const StyledProjectCard: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ProjectCard>{children}</ProjectCard>
}

export default StyledProjectCard
