import React from 'react';
import { Briefcase, BookOpen, Users } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

const AboutCard: React.FC<{ title: string; icon: React.ElementType; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <Icon className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
      <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100">{title}</h3>
    </div>
    <div className="text-gray-600 dark:text-slate-300 space-y-2">{children}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-gray-50 dark:bg-slate-900">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-12">
          I am a multifaceted and ambitious developer, passionate about architecting robust digital solutions from concept to deployment. I combine a strong foundation in front-end development with a strategic expansion into full-stack, enterprise, and game development technologies. My approach is defined by a meticulous work ethic, a commitment to teamwork, and a drive for creative excellence.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AboutCard title="Core Competencies" icon={Briefcase}>
            <ul className="list-disc list-inside">
              <li>Architecting responsive UIs using HTML5, CSS3, and JavaScript (ES6+).</li>
              <li>Creating clean, intuitive, and user-friendly designs.</li>
            </ul>
          </AboutCard>
          <AboutCard title="Currently Learning" icon={BookOpen}>
            <ul className="list-disc list-inside">
              <li><strong>Full-Stack:</strong> Node.js and Express.</li>
              <li><strong>Databases:</strong> MongoDB and MySQL.</li>
              <li><strong>OOP:</strong> Java, C and Python.</li>
              <li><strong>Game Dev:</strong> C# in Unity Engine.</li>
            </ul>
          </AboutCard>
          <AboutCard title="Professional Attributes" icon={Users}>
            <ul className="list-disc list-inside">
              <li><strong>Collaborative Spirit:</strong> A dedicated team player.</li>
              <li><strong>Problem-Solving:</strong> An analytical thinker.</li>
              <li><strong>Continuous Improvement:</strong> Passionately staying current.</li>
            </ul>
          </AboutCard>
        </div>
        <p className="text-center text-lg text-gray-600 dark:text-slate-300 leading-relaxed mt-12">
          I am actively seeking a challenging opportunity where I can deploy this full spectrum of skills to contribute to a company's success and further my journey toward becoming an expert developer.
        </p>
      </div>
    </Section>
  );
};

export default About;