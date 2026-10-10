import { defineQuery } from 'next-sanity'

// Target the current published settings document, excluding obsolete draft-only copies.
const siteSettingsFields = /* groq */ `
    _id,
    _updatedAt,
    name,
    title,
    tagline,
    email,
    github,
    linkedin,
    resume,
    stats{yearsExperience, projectsDelivered, technologiesMastered},
    hero{
      availability, eyebrow, heading, headingContinuation, description,
      avatar{asset, alt, crop, hotspot},
      resumeLabel, contactLabel, experienceLabel, projectsLabel,
      pauseMotionLabel, playMotionLabel
    },
    "seo": {
      "title": coalesce(seo.title, name + " | " + title),
      "description": coalesce(seo.description, hero.description, tagline),
      "image": seo.image{asset, alt, crop, hotspot},
      "noIndex": seo.noIndex == true
    },
    pageHeadline[]{..., children[]{...}, markDefs[]{...}},
    pageTabline,
    pageSubTitle1,
    pageSubTitle2
`

export const siteSettingsQuery = defineQuery(/* groq */ `
  *[_type == "siteSettings" && _id == "df0dd2cd-a213-4968-be24-f64b0129437a"][0]{
    ${siteSettingsFields}
  }
`)

export const experiencesQuery = `
  *[_type == "experience"]|order(order asc, _createdAt desc){
    _id,
    year,
    role,
    company,
    location,
    type,
    description,
    responsibilities,
    achievements,
    technologies[]->{
      _id,
      name,
      category
    }
  }
`

export const projectsQuery = `
  *[_type == "project"]|order(featured desc, order asc, _createdAt desc){
    _id,
    title,
    subtitle,
    description,
    impact,
    technologies[]->{
      _id,
      name,
      category
    },
    link,
    github,
    image{asset, crop, hotspot},
    "imageAlt": image.alt,
    featured,
    category
  }
`

export const skillsQuery = `
  *[_type == "skill"]|order(order asc, name asc){
    _id,
    name,
    years,
    category
  }
`

export const coreCompetenciesQuery = `
  *[_type == "coreCompetency"]|order(order asc, percentage desc){
    _id,
    name,
    level,
    percentage
  }
`

export const openSourceContributionsQuery = `
  *[_type == "openSourceContribution"]|order(order asc, _createdAt desc){
    _id,
    name,
    description,
    stars,
    forks,
    link
  }
`

export const achievementsQuery = `
  *[_type == "achievement"]|order(order asc, _createdAt desc){
    _id,
    title,
    organization,
    year,
    level,
    icon
  }
`

export const speakingEngagementsQuery = `
  *[_type == "speakingEngagement"]|order(order asc, _createdAt desc){
    _id,
    title,
    event,
    location,
    date
  }
`

export const homePageQuery = `{
  "siteSettings": *[_type == "siteSettings" && _id == "df0dd2cd-a213-4968-be24-f64b0129437a"][0]{
    ${siteSettingsFields}
  },
  "experiences": *[_type == "experience"]|order(order asc, _createdAt desc){
    _id,
    year,
    role,
    company,
    location,
    type,
    description,
    responsibilities,
    achievements,
    technologies[]->{
      _id,
      name,
      category
    }
  },
  "projects": *[_type == "project"]|order(featured desc, order asc, _createdAt desc){
    _id,
    title,
    subtitle,
    description,
    impact,
    technologies[]->{
      _id,
      name,
      category
    },
    link,
    github,
    image{asset, crop, hotspot},
    "imageAlt": image.alt,
    featured,
    category
  },
  "skills": *[_type == "skill"]|order(order asc, name asc){
    _id,
    name,
    years,
    category
  },
}`

export const projectImagesQuery = defineQuery(/* groq */ `
  *[_type == "project" && defined(image.asset)]{
    image{asset, crop, hotspot}
  }
`)
