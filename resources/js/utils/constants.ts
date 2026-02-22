
import { Experience, Education, Skill, Project } from './types';

export const PERSONAL_INFO = {
  name: "Anhar Mohammed",
  title: "Front End and Back End Developer",
  location: "Sana’a, Yemen",
  phone: "+967 774212285",
  email: "anharmohammed88@gmail.com",
  githubUrl: "https://github.com/AnharMoahmmed",
  cvUrl: "#",
  objective: "Motivated and detail-oriented Information Technology graduate and Application Developer with hands-on experience in Flutter and Laravel. Skilled in UI/UX design, full-stack development, and system analysis.",
  communication: "Excellent written and verbal communication skills. Proven ability to present technical concepts to both technical and non-technical audiences.",
  leadership: "Led the design and development of a community-driven mobile application. Worked with small teams and managed timelines, user requirements, and iterative updates in agile environments."
};

export const PROJECTS: Project[] = [
  {
    title: "Knowledge Share App",
    description: "A community-driven mobile platform for sharing educational resources and expertise among students and professionals. Features include resource categorization, user profiles, and real-time updates.",
    technologies: ["Flutter", "Dart", "Firebase", "Figma"],
    type: "Mobile App",
    link: "https://github.com/AnharMoahmmed"
  },
  {
    title: "Digital Wallet UI Design",
    description: "A high-fidelity prototype of a modern financial wallet application. Focused on intuitive user flows for transactions, balance tracking, and security settings.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    type: "UI/UX Design"
  },
  {
    title: "ERP System Analysis for GOSI",
    description: "Detailed analysis and data modeling for integrated pension management systems. Involved process mapping, requirement gathering, and architectural planning for social insurance modules.",
    technologies: ["System Analysis", "ERP", "Data Modeling", "SQL"],
    type: "System Analysis"
  },
  {
    title: "Laravel Backend Dashboard",
    description: "A robust administrative dashboard developed during industrial training, featuring user authentication, role-based access control, and dynamic API endpoints for mobile integration.",
    technologies: ["Laravel", "PHP", "MySQL", "REST API"],
    type: "Web App",
    link: "https://github.com/AnharMoahmmed"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Training – Mobile & Web Development",
    company: "Doing Company",
    location: "Sana’a, Yemen",
    period: "Aug 2025 – Oct 2025",
    responsibilities: [
      "Completed hands-on training in Flutter and Laravel development.",
      "Worked on multiple backend projects using Laravel, including authentication, APIs, and dashboard features.",
      "Contributed to several Flutter app modules, focusing on UI implementation and app logic.",
      "Designed a complete wallet application UI in Figma, including layout, components, and user flow."
    ]
  },
  {
    title: "Application Developer – Knowledge Share App",
    company: "Freelance",
    location: "Sana’a, Yemen",
    period: "2024 – Present",
    responsibilities: [
      "Developed and maintained a knowledge-share mobile application using Flutter.",
      "Designed UI/UX mockups and high-fidelity prototypes using Figma.",
      "Implemented core app functionalities and collaborated with users for feedback-based improvements."
    ]
  },
  {
    title: "System Analyst - ERP Systems",
    company: "General Organization for Social Insurance and Pensions",
    location: "Sana’a, Yemen",
    period: "2024 – 2025",
    responsibilities: [
      "Analyzed business requirements and helped design integrated ERP solutions.",
      "Participated in data modeling and functional process analysis."
    ]
  },
  {
    title: "English Teacher",
    company: "Private Tutoring",
    location: "Sana’a, Yemen",
    period: "2021 – 2022",
    responsibilities: [
      "Delivered customized English language lessons for school and centers students.",
      "Developed creative learning strategies to improve student outcomes."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "Sana’a University",
    location: "Sana’a, Yemen",
    period: "Expected 2025"
  },
  {
    degree: "High Diploma in English",
    institution: "CTLT",
    location: "Sana’a, Yemen",
    period: "2020 – 2021"
  },
  {
    degree: "TOEFL Certification",
    institution: "CTLT",
    location: "Sana’a, Yemen",
    period: "2020 – 2021"
  }
];

export const SKILLS: Skill[] = [
  { name: "Flutter", category: "Mobile" },
  { name: "Laravel", category: "Web" },
  { name: "Figma", category: "Design" },
  { name: "UI/UX Design", category: "Design" },
  { name: "PHP", category: "Web" },
  { name: "Dart", category: "Mobile" },
  { name: "API Development", category: "Web" },
  { name: "System Analysis", category: "Other" },
  { name: "Data Modeling", category: "Other" },
  { name: "Agile/Scrum", category: "Other" }
];
