import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio.data';
import { Skill } from '../../types/portfolio.types';

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="flex items-center space-x-3 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {skill.icon && (
        <img 
          src={skill.icon} 
          alt={`${skill.name} icon`}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            // Fallback if icon fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
      )}
      <span className="font-medium text-gray-700 dark:text-slate-200">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SkillCategory: React.FC<{ 
  category: string; 
  skills: Skill[] 
}> = ({ category, skills }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-4 border-b-2 border-indigo-500 dark:border-indigo-400 pb-2 inline-block">
      {category}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-slate-900">
      <SectionTitle>My Skills</SectionTitle>
      <div className="max-w-6xl mx-auto">
        {categories.map(category => (
          <SkillCategory 
            key={category} 
            category={category}
            skills={portfolioData.skills.filter(skill => skill.category === category)}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;