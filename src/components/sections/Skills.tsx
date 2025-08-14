import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio.data';
import { Skill } from '../../types/portfolio.types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ 
        width: `${skill.level}%`, 
        transition: { duration: 1, ease: "easeOut" } 
      });
    }
  }, [controls, inView, skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-700 dark:text-slate-200">{skill.name}</span>
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
      </div>
      <div ref={ref} className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
        <motion.div
          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{ 
  category: string; 
  skills: Skill[] 
}> = ({ category, skills }) => (
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-4 border-b-2 border-gray-200 dark:border-slate-700 pb-2">
      {category}
    </h3>
    <div>
      {skills.map(skill => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-slate-900">
      <SectionTitle>My Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
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