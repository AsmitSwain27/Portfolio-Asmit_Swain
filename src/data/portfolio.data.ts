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
    instagram: "#", // Add Instagram profile URL
    twitter: "#", // Add Twitter profile URL
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
      companyUrl: "https://www.bipros.com", // Add company website URL
      role: "Game Developer Intern",
      duration: "June 2025 - August 2025",
      description: [
        "Developed interactive game mechanics using Unity Engine and C#",
        "Collaborated with design team to implement UI/UX improvements",
        "Optimized game performance resulting in 10% faster load times",
        "Participated in agile development process and sprint planning"
      ]
    },
    
  ],
  projects: [
    {
      title: "HAVitSync",
      description: "Modern, AI-powered health and activity tracker that helps monitor study, workout, meal, and sleep habits in one unified dashboard with personalized insights.",
      keyFeatures: [
        "Unified Dashboard for All Activities", 
        "AI-Powered Insights", 
        "Goal Setting & Progress Tracking", 
        "Beautiful Data Visualizations",
        "Cross-Platform Syncing"
      ],
      technologies: [
        "React", 
        "TypeScript", 
        "Vite", 
        "Tailwind CSS", 
        "shadcn-ui", 
        "Zustand", 
        "Firebase", 
        "Gemini AI"
      ],
      livePreview: "https://havit-sync.vercel.app/",
      github: "https://github.com/AsmitSwain27/HAVitSync",
    },
    {
      title: "HAVitSync App",
      description: "Modern application to help you take control of your health and wellness journey. Track workouts, meals, and sleep—all in one beautiful, intuitive interface.",
      keyFeatures: [
        "Full Body Tracker for Fitness Progress", 
        "Meal Tracker for Balanced Diet", 
        "Sleep Tracker for Healthy Lifestyle", 
        "Stunning & Intuitive UI",
        "Cross-Platform Support (Android, iOS, Web, Desktop)"
      ],
      technologies: [
        "Flutter", 
        "Dart", 
        "Cross-Platform Development"
      ],
      github: "https://github.com/AsmitSwain27/HAVitSync_App",
    },
    {
      title: "NearMed Access",
      description: "Simplified connection between patients and healthcare providers, ensuring efficient and timely medical services.",
      keyFeatures: ["Appointment Scheduling", "Nearby Hospital Locating", "Secure Data Management"],
      technologies: ["HTML", "CSS", "JavaScript", "Excel"],
      // livePreview: "#",
      // github: "#",
    },
    {
      title: "Empath",
      description: "Mental health support for students and professionals, addressing stress and burnout.",
      keyFeatures: ["Stress & Burnout Analysis", "Support Resources", "API Integration"],
      technologies: ["HTML", "CSS", "JavaScript", "Java", "Machine Learning"],
      // livePreview: "#",
      // github: "#",
    },
  ],
  skills: [
    { name: "Java", category: 'Programming Languages', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", category: 'Programming Languages', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", category: 'Programming Languages', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C#", category: 'Programming Languages', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "C++", category: 'Programming Languages', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C", category: 'Programming Languages', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "HTML5", category: 'Frontend Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", category: 'Frontend Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", category: 'Frontend Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", category: 'Frontend Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Bootstrap", category: 'Frontend Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Flutter", category: 'Mobile Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Dart", category: 'Mobile Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Unity Engine", category: 'Game Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
    { name: "Blender", category: 'Game Development', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
    { name: "Arduino", category: 'Hardware', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
    { name: "Firebase", category: 'Backend & Database', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Git", category: 'Tools & Workflow', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Tailwind CSS", category: "Frontend Development", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Machine Learning", category: "Data & AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
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