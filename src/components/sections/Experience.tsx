import React from 'react';
import { Building } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio.data';

const ExperienceCard: React.FC<{ 
  job: typeof portfolioData.experience[0]; 
  index: number 
}> = ({ job, index }) => (
  <div className="w-full max-w-md bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
    <div className="flex items-start mb-4">
      <div className="bg-indigo-100 dark:bg-slate-700 p-3 rounded-full mr-4">
        <Building className="text-indigo-600 dark:text-indigo-400" size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100">{job.role}</h3>
        <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400">{job.company}</p>
        <p className="text-sm text-gray-500 dark:text-slate-400">{job.duration}</p>
      </div>
    </div>
    <ul className="list-disc list-inside text-gray-600 dark:text-slate-300 space-y-2 pl-2">
      {job.description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

const Experience: React.FC = () => {
  if (!portfolioData.experience || portfolioData.experience.length === 0) {
    return (
      <Section id="experience" className="bg-gray-50 dark:bg-slate-900">
        <SectionTitle>Experience</SectionTitle>
        <div className="text-center text-gray-500 dark:text-slate-400">
          <p>No professional experience yet. Eager to learn and contribute!</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="experience" className="bg-gray-50 dark:bg-slate-900">
      <SectionTitle>Experience</SectionTitle>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {portfolioData.experience.map((job, index) => (
          <ExperienceCard key={index} job={job} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;