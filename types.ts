
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  tech: string[];
  description: string;
  link?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  profileImage?: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  summary: string;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
}
