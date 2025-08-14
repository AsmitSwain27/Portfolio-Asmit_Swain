import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { useNavigation } from '../../contexts/NavigationContext';
import { Section } from '../ui/Section';
import { portfolioData } from '../../data/portfolio.data';
import profileImage from '@assets/images/ProfileImage.jpg';

const ProfileImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <motion.div
    className="md:w-1/3"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <img
      src={src}
      alt={alt}
      className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover mx-auto ring-4 ring-indigo-500/50 ring-offset-4 ring-offset-gray-50 dark:ring-offset-slate-900"
    />
  </motion.div>
);

const DynamicRoles: React.FC<{ roles: string[] }> = ({ roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="text-2xl md:text-3xl font-semibold mt-4 h-10 flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={roleIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-gray-700 dark:text-slate-200"
        >
          {roles[roleIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const SocialLinks: React.FC<{ contacts: typeof portfolioData.contact }> = ({ contacts }) => (
  <div className="mt-8 flex justify-center md:justify-start space-x-4">
    <a
      href={contacts.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-transform duration-300 hover:scale-110"
    >
      <Github size={28} />
    </a>
    <a
      href={contacts.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-transform duration-300 hover:scale-110"
    >
      <Linkedin size={28} />
    </a>
    <a
      href={`mailto:${contacts.email}`}
      className="text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-transform duration-300 hover:scale-110"
    >
      <Mail size={28} />
    </a>
  </div>
);

const ActionButtons: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => (
  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    <button
      onClick={onContactClick}
      className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 inline-flex items-center justify-center"
    >
      Contact Me
    </button>
    <a
      href="/src/assets/Resume.pdf"
      download="Resume-Asmit-Swain.pdf"
      className="bg-white dark:bg-slate-700 text-gray-800 dark:text-slate-200 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition duration-300 inline-flex items-center justify-center"
    >
      Download Resume <Download className="ml-2" size={20} />
    </a>
  </div>
);

const Hero: React.FC = () => {
  const { handleNavLinkClick } = useNavigation();

  return (
    <Section id="home" className="min-h-screen flex items-center pt-20 relative">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-12 z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-slate-100 leading-tight">
            Hi, I'm{' '}
            <span className="text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
              {portfolioData.name}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mt-2">
            {portfolioData.title}
          </p>

          <DynamicRoles roles={portfolioData.dynamicRoles} />

          <SocialLinks contacts={portfolioData.contact} />

          <ActionButtons onContactClick={() => handleNavLinkClick('contact')} />
        </motion.div>

        <ProfileImage
          src={profileImage}
          alt={portfolioData.name}
        />
      </div>
    </Section>
  );
};

export default Hero;