import type { Project, Skill, Experience, Achievement, SocialLink } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const about = {
  education: 'Bachelor of Science in Computer Science, State University',
  interests: 'Artificial Intelligence, Distributed Systems, Competitive Programming',
  focus: 'Developing scalable web applications and exploring the depths of machine learning.',
};

export const skills: Skill[] = [
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'Next.js', category: 'Frameworks & Libraries' },
  { name: 'Node.js', category: 'Frameworks & Libraries' },
  { name: 'Express.js', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },
  { name: 'MongoDB', category: 'Tools & Platforms' },
  { name: 'PostgreSQL', category: 'Tools & Platforms' },
  { name: 'Docker', category: 'Tools & Platforms' },
  { name: 'Git & GitHub', category: 'Tools & Platforms' },
  { name: 'Vercel', category: 'Tools & Platforms' },
  { name: 'Data Structures', category: 'CS Fundamentals' },
  { name: 'Algorithms', category: 'CS Fundamentals' },
  { name: 'System Design', category: 'CS Fundamentals' },
  { name: 'OOP', category: 'CS Fundamentals' },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, user authentication, and order management. Built with a focus on performance and scalability.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'NextAuth.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://vercel.com',
    image: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl || '',
  },
  {
    id: 'p2',
    title: 'Real-time Chat Application',
    description: 'A web-based chat application supporting real-time messaging, user presence indicators, and multiple chat rooms. Engineered for low latency communication.',
    techStack: ['React', 'Node.js', 'Socket.IO', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://vercel.com',
    image: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl || '',
  },
  {
    id: 'p3',
    title: 'Data Science Project Visualizer',
    description: 'A tool for visualizing complex data sets from various hackathons and competitive programming challenges. Features interactive graphs and charts to analyze performance metrics.',
    techStack: ['Python', 'Flask', 'D3.js', 'React'],
    githubUrl: 'https://github.com',
    image: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl || '',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Tech Solutions Inc.',
    duration: 'Jun 2023 - Aug 2023',
    description: [
      'Developed and maintained features for a large-scale web application using React and Node.js.',
      'Collaborated with a team of 10 engineers to improve application performance by 15%.',
      'Wrote unit and integration tests to ensure code quality and reliability.',
    ],
  },
  {
    role: 'Web Development Volunteer',
    company: 'Code for a Cause (NGO)',
    duration: 'Jan 2022 - May 2023',
    description: [
      'Built and launched a new website for the NGO, increasing online donations by 30%.',
      'Managed content updates and technical support for the site.',
      'Mentored junior volunteers in web development best practices.',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: '1st Place, HackState 2023',
    description: 'Won first place in a 24-hour hackathon by developing an AI-powered solution for local community issues.',
    year: 2023,
  },
  {
    title: 'Google Certified Cloud Architect',
    description: 'Achieved certification for expertise in designing and managing robust and scalable cloud architectures on GCP.',
    year: 2023,
  },
  {
    title: 'Top 5%, National Coding Olympiad',
    description: 'Placed in the top 5% among 10,000+ participants in a national competitive programming contest.',
    year: 2022,
  },
];

export const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];
