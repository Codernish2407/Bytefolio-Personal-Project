import type { Project, Skill, Experience, Achievement, SocialLink, Certificate } from './types';
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
      degree: 'Class 12 (PCM)',
      major: 'Score: 79%',
      duration: 'Completed: June 2025',
    },
  ],
  interests: 'Frontend Development, Video Editing, Web Development, Programming',
  focus: 'Building impactful tech solutions and contributing to projects that drive positive change in the tech landscape.',
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
    images: [
      'https://iili.io/f6quEPt.png',
      'https://iili.io/f6qA6rX.png',
      'https://iili.io/f6qAi2n.png',
    ]
  },
  {
  id: 'bytefolio',
  title: 'Personal Portfolio – Full-Stack Engineering Project',
  description:
    'Developed a modern, production-grade personal portfolio website using Next.js, TypeScript, and Tailwind CSS. Implemented an interactive project showcase with image carousels and animations. Built a secure contact form with MongoDB Atlas integration using server actions to store user messages. Designed with a futuristic UI and responsive layout.',
  images: [
    'https://i.postimg.cc/s2jhnW8k/Screenshot-2026-01-24-170056.png',
  ],
  techStack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'MongoDB Atlas',
    'Server Actions',
  ],
  githubUrl: 'https://github.com/codernish2407', // change if repo link exists
  liveUrl: '', // optional – can keep empty
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
    title: 'Hackathons',
    description: 'Participated in Hack-Adhyaay national level hackathon and received positive feedback from judges, placing among top potential teams.',
    year: '2025-2026',
    certificates: [
      { title: 'DevsHouse Hackathon', url: 'https://iili.io/f6qYG8F.png' },
      { title: 'Hack-A-Thon 5.0', url: 'https://iili.io/f6qYEa1.png' },
      { title: 'Imaginex Hackathon', url: 'https://iili.io/f6qYMyg.png' },
    ]
  },
  {
    title: 'Certifications & Awards',
    description: 'A collection of certifications and awards recognizing excellence in academics and technical skills.',
    year: '2025-2026',
    certificates: [
      { title: 'Academic Excellence Award', url: 'https://iili.io/f6qlWue.png' },
      { title: 'Outstanding Performance Award', url: 'https://iili.io/f6qlwnj.png' },
      { title: 'Data Visualization Job Simulation', url: 'https://iili.io/f6qlhZb.png' },
      { title: 'Basic Frontend Development', url: 'https://iili.io/f6qlXwu.png' },
      { title: 'Basic Data Analysis', url: 'https://iili.io/f6qlNMx.png' },
    ]
  },
];

export const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/Codernish2407', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nishtha-banerjee-392406315', icon: Linkedin },
];
