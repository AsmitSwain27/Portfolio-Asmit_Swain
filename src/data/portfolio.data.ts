import { PortfolioData } from '../types/portfolio.types';

export const portfolioData: PortfolioData = {
  name: "Asmit Swain",
  title: "Software Engineering Student",
  dynamicRoles: ["Front-End Developer", "Game Developer", "Making Clean Programs"],
  profileImage: "./src/assets/images/ProfileImages.jpg",
  contact: {
    email: "swain.asmit2006@gmail.com",
    phone: "+917205304048",
    linkedin: "https://www.linkedin.com/in/asmit-swain27a15",
    github: "https://github.com/AsmitSwain27",
    instagram: "#", // Add your Instagram profile URL
    twitter: "#", // Add your Twitter profile URL
  },
  education: [
    {
      institution: "ITER, SOA UNIVERSITY",
      degree: "Bachelor of Technology in Computer Science & Engineering (CSE)",
      date: "June 2027",
      result: "8.7",
      type: 'cgpa'
    },
    {
      institution: "D.A.V. Public School, Kalinga Nagar",
      degree: "Senior Secondary Education",
      date: "March 2023",
      result: "84.2%",
      type: 'percentage'
    },
    {
      institution: "D.A.V. Public School, Kalinga Nagar",
      degree: "Secondary Education",
      date: "April 2021",
      result: "96.8%",
      type: 'percentage'
    },
  ],
  experience: [
    {
      company: "BIPROS",
      role: "Game Developer Intern",
      duration: "June 2025 - Aug 2025",
      description: [
        "Developed interactive game mechanics using Unity Engine and C#",
        "Collaborated with design team to implement UI/UX improvements",
        "Optimized game performance resulting in 25% faster load times",
        "Participated in agile development process and sprint planning"
      ]
    },
  ],
  projects: [
    {
      title: "NearMed Access",
      description: "Simplified connection between patients and healthcare providers, ensuring efficient and timely medical services.",
      keyFeatures: ["Appointment Scheduling", "Nearby Hospital Locating", "Secure Data Management"],
      technologies: ["HTML", "CSS", "JavaScript", "Excel"],
      livePreview: "#",
      github: "#",
    },
    {
      title: "Empath",
      description: "Mental health support for students and professionals, addressing stress and burnout.",
      keyFeatures: ["Stress & Burnout Analysis", "Support Resources", "API Integration"],
      technologies: ["HTML", "CSS", "JavaScript", "Java", "Machine Learning"],
      livePreview: "#",
      github: "#",
    },
  ],
  skills: [
    { name: "Java", level: 60, category: 'Programming Languages' },
    { name: "Python", level: 50, category: 'Programming Languages' },
    { name: "JavaScript", level: 50, category: 'Programming Languages' },
    { name: "C#", level: 65, category: 'Programming Languages' },
    { name: "C++", level: 15, category: 'Programming Languages' },
    { name: "C", level: 15, category: 'Programming Languages' },
    { name: "HTML5", level: 96, category: 'Frontend Development' },
    { name: "CSS3", level: 92, category: 'Frontend Development' },
    { name: "Bootstrap", level: 70, category: 'Frontend Development' },
    { name: "Unity Engine", level: 80, category: 'Game Development' },
    { name: "Blender", level: 25, category: 'Game Development' },
    { name: "Arduino", level: 55, category: 'Hardware' },
    { name: "Machine Learning", level: 15, category: 'Data & AI' },
  ],
};

export const navigationLinks = [
  { id: "about", label: "About", href: "#about" },
  { id: "education", label: "Education", href: "#education" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];