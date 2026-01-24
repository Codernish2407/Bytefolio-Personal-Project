import type { LucideIcon } from "lucide-react";

export type NavLink = {
  name: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export type SkillCategory = 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms' | 'CS Fundamentals';

export type Skill = {
  name:string;
  category: SkillCategory;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  certificateUrl?: string | string[];
};

export type Achievement = {
  title: string;
  description: string | string[];
  year: string;
  certificateUrls?: string[];
};
