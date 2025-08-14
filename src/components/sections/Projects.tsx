import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio.data';

const ProjectCard: React.FC<{ 
  project: typeof portfolioData.projects[0]; 
  index: number 
}> = ({ project, index }) => (
  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <div className="p-6 flex-grow">
      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-slate-100">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-slate-300 mb-4 flex-grow">
        {project.description}
      </p>
      <div className="mb-4">
        <p className="font-semibold mb-2 text-gray-700 dark:text-slate-200">Key Features:</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-slate-300 space-y-1">
          {project.keyFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="px-6 pt-4 pb-2 border-t border-gray-200 dark:border-slate-700">
      <p className="font-semibold mb-3 text-gray-700 dark:text-slate-200">Technologies Used:</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 text-sm font-medium px-2.5 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    <div className="px-6 py-4 bg-gray-50 dark:bg-slate-900/50 flex justify-end gap-4">
      {project.livePreview && (
        <a 
          href={project.livePreview} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
        >
          <ExternalLink size={18} />
          Live Preview
        </a>
      )}
      {project.github && (
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-300 font-semibold hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          <Github size={18} />
          GitHub
        </a>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => (
  <Section id="projects" className="bg-white dark:bg-slate-800">
    <SectionTitle>Projects</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  </Section>
);

export default Projects;