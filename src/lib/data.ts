import type { Project, Skill, Experience, Achievement, SocialLink } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { Github, Linkedin } from 'lucide-react';

export const about = {
  education: [
    {
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      degree: 'Bachelor of Technology (B.Tech)',
      major: 'Computer Science Engineering',
      duration: 'August 2025 – July 2029 (Expected)',
    },
    {
      institution: 'Vasant Kanya Inter College',
      location: 'Varanasi, Uttar Pradesh',
      degree: 'Class 12 (PCM – Physics, Chemistry, Mathematics)',
      major: 'Score: 79%',
      duration: 'Completed: June 2025',
    },
  ],
  interests: 'Frontend Development, Video Editing, Web Development, Programming',
  focus: 'Building impactful tech solutions and contributing to projects that drive positive change.',
};

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'GitHub', category: 'Tools & Platforms' },
  { name: 'Database Management Systems (DBMS)', category: 'CS Fundamentals' },
  { name: 'Software Engineering Fundamentals', category: 'CS Fundamentals' },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'FocusFlex – Productivity & Focus Website',
    description: 'Developed a productivity-focused website using HTML, CSS, and JavaScript. Backend concepts supported using AI tools like Firebase Studio. Designed to help students manage distractions and improve focus. Type: Hackathon Project',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase Studio'],
    githubUrl: 'https://github.com/Codernish2407',
    image: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl || '',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Video Editing Intern',
    company: 'Ar7x (backed by Agnivikrama Skyblaze Private Limited)',
    duration: 'May 2025 – Aug 2025',
    description: [
      'Edited promotional and short-form videos using CapCut and collaborated with the media team.',
    ],
    certificateUrl: 'https://iili.io/f6q9Aan.png',
  },
  {
    role: 'Email Marketing Intern',
    company: 'Gema Edu Pvt Ltd',
    duration: 'April 2025 – June 2025',
    description: [
      'Designed email content, managed formatting, and assisted with outreach campaigns.',
    ],
    certificateUrl: 'https://iili.io/f6qBxO7.png',
  },
  {
    role: 'Video Editor',
    company: 'Yathaarth Sangam Foundation',
    duration: 'April 2025 – Aug 2025',
    description: [
      'Created social awareness videos and handled editing workflows for online campaigns.',
    ],
    certificateUrl: [
      'https://iili.io/f6q29Ag.png',
      'https://iili.io/f6q2JDJ.png',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Hackathon Participant',
    description: 'Received strong feedback from judges (Top 5 potential) and participation certificates.',
    year: 2025,
  },
  {
    title: 'Achievements',
    description: [
      'Awarded 2 certificates for outstanding performance in Class 12.',
      'Completed the Tata Forage Data Visualization Job Simulation.',
      'Earned the Skill India Certificate for Basic Frontend Development.',
      'Awarded the Basic Data Analysis Certificate.',
      'Received letters of completion for all three internship roles.',
    ],
    year: 2025,
  },
];

export const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/Codernish2407', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nishtha-banerjee-392406315', icon: Linkedin },
];
