import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio.data';

const EducationCard: React.FC<{ 
  item: typeof portfolioData.education[0]; 
  index: number 
}> = ({ item, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className={`bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-indigo-500
        ${index === 1 ? 'md:mt-12' : ''}
        ${index === 2 ? 'md:mt-24' : ''}
      `}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-indigo-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
          <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={32} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-center text-gray-800 dark:text-slate-100">
        {item.institution}
      </h3>
      <p className="text-md text-gray-600 dark:text-slate-300 text-center mt-2">
        {item.degree}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700 text-center">
        <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400">
          {item.date}
        </p>
        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
          {item.type === 'cgpa' ? 'CGPA' : 'Percentage'}: {item.result}
        </p>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <Section id="education" className="bg-white dark:bg-slate-800">
      <SectionTitle>Education</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {portfolioData.education.map((item, index) => (
          <EducationCard key={index} item={item} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Education;