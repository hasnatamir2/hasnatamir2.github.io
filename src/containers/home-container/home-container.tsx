import { FC } from 'react'
import {
  HeroSection,
  PortfolioSection,
  SkillSection,
  ExperienceSection,
  ContactSection,
} from '../../components/sections'

const HomeContainer: FC = () => {
  return (
    <main className="home-container">
      <HeroSection />
      <PortfolioSection />
      <SkillSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

export default HomeContainer
