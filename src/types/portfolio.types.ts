export interface Project {
  title: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  livePreview?: string;
  github?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  date: string;
  result: string;
  type: 'cgpa' | 'percentage';
}

export interface Experience {
  company: string;
  companyUrl?: string; // Add optional company URL
  role: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: string;
  icon?: string; // Remove level property if it exists
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  dynamicRoles: string[];
  profileImage: string;
  contact: ContactInfo;
  education: EducationItem[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
}

export interface NavigationLink {
  id: string;
  label: string;
  href: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavigationContextType {
  activeLink: string;
  setActiveLink: (link: string) => void;
  handleNavLinkClick: (id: string) => void;
}

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
}