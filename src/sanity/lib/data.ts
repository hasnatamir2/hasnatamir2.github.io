import { sanityFetch } from './live'
import {
  achievementsQuery,
  coreCompetenciesQuery,
  experiencesQuery,
  homePageQuery,
  openSourceContributionsQuery,
  projectsQuery,
  siteSettingsQuery,
  skillsQuery,
  speakingEngagementsQuery,
} from './queries'

export async function getSiteSettings() {
  return sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })
}

export async function getExperiences() {
  return sanityFetch({ query: experiencesQuery, tags: ['experiences'] })
}

export async function getProjects() {
  return sanityFetch({ query: projectsQuery, tags: ['projects'] })
}

export async function getSkills() {
  return sanityFetch({ query: skillsQuery, tags: ['skills'] })
}

export async function getCoreCompetencies() {
  return sanityFetch({
    query: coreCompetenciesQuery,
    tags: ['coreCompetencies'],
  })
}

export async function getOpenSourceContributions() {
  return sanityFetch({
    query: openSourceContributionsQuery,
    tags: ['openSourceContributions'],
  })
}

export async function getAchievements() {
  return sanityFetch({ query: achievementsQuery, tags: ['achievements'] })
}

export async function getSpeakingEngagements() {
  return sanityFetch({
    query: speakingEngagementsQuery,
    tags: ['speakingEngagements'],
  })
}

export async function getHomePageData() {
  return sanityFetch({
    query: homePageQuery,
    tags: ['homepage'],
  })
}
