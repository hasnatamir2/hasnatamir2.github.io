import { sanityFetch } from "./live";
import {
  achievementsQuery,
  coreCompetenciesQuery,
  experiencesQuery,
  openSourceContributionsQuery,
  projectsQuery,
  siteSettingsQuery,
  skillsQuery,
  speakingEngagementsQuery,
} from "./queries";

export async function getSiteSettings() {
  return sanityFetch({ query: siteSettingsQuery });
}

export async function getExperiences() {
  return sanityFetch({ query: experiencesQuery });
}

export async function getProjects() {
  return sanityFetch({ query: projectsQuery });
}

export async function getSkills() {
  return sanityFetch({ query: skillsQuery });
}

export async function getCoreCompetencies() {
  return sanityFetch({ query: coreCompetenciesQuery });
}

export async function getOpenSourceContributions() {
  return sanityFetch({ query: openSourceContributionsQuery });
}

export async function getAchievements() {
  return sanityFetch({ query: achievementsQuery });
}

export async function getSpeakingEngagements() {
  return sanityFetch({ query: speakingEngagementsQuery });
}
