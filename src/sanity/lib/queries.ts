export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    name,
    title,
    tagline,
    email,
    github,
    linkedin,
    resume,
    stats{
      yearsExperience,
      projectsDelivered,
      technologiesMastered
    },
    pageTabline,
    pageSubTitle1,
    pageSubTitle2
  }
`;

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
    technologies
  }
`;

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
    "image": image.asset->url,
    featured,
    category
  }
`;

export const skillsQuery = `
  *[_type == "skill"]|order(order asc, name asc){
    _id,
    name,
    years,
    category
  }
`;

export const coreCompetenciesQuery = `
  *[_type == "coreCompetency"]|order(order asc, percentage desc){
    _id,
    name,
    level,
    percentage
  }
`;

export const openSourceContributionsQuery = `
  *[_type == "openSourceContribution"]|order(order asc, _createdAt desc){
    _id,
    name,
    description,
    stars,
    forks,
    link
  }
`;

export const achievementsQuery = `
  *[_type == "achievement"]|order(order asc, _createdAt desc){
    _id,
    title,
    organization,
    year,
    level,
    icon
  }
`;

export const speakingEngagementsQuery = `
  *[_type == "speakingEngagement"]|order(order asc, _createdAt desc){
    _id,
    title,
    event,
    location,
    date
  }
`;
