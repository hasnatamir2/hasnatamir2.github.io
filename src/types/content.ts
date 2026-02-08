import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type PersonalInfo = {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  pageSubTitle1: string;
  pageSubTitle2: string;
  pageSubTabline: string
};

export type Stats = {
  yearsExperience: string;
  projectsDelivered: string;
  technologiesMastered: string;
};

export type Experience = {
  _id?: string;
  id?: number;
  year: string;
  role: string;
  company?: string;
  location?: string;
  type?: string;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
};

export type Project = {
  _id?: string;
  id?: number;
  title: string;
  subtitle?: string;
  description?: string;
  impact?: string[];
  technologies: Skill[];
  link?: string | null;
  github?: string | null;
  image?: SanityImageSource | null;
  featured?: boolean;
  category?: string;
};

export type Skill = {
  _id?: string;
  name: string;
  years?: number;
  category: "frontend" | "backend" | "devops";
};

export interface EmailTemplateProps {
  firstName: string
  email: string
  projectType: string
  message: string
}