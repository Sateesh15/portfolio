export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface ClientProject {
  name: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  client?: string;
  isCurrent?: boolean;
  summary?: string;
  projects?: ClientProject[];
  responsibilities?: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  clientOrContext: string;
  period?: string;
  badge?: string;
  summary: string;
  description: string;
  architectureOverview: string;
  technologies: string[];
  contributions: string[];
  highlights: string[];
  isPrivate: boolean;
}

export interface AICloudSpotlight {
  title: string;
  category: 'AI' | 'Cloud' | 'Security' | 'Observability';
  description: string;
  icon: string;
  skills: string[];
  keyHighlights: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
  topics: string[];
}

export interface PersonalProfile {
  name: string;
  preferredName: string;
  title: string;
  secondaryTitle: string;
  yearsOfExperience: number;
  location: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePath: string;
}
