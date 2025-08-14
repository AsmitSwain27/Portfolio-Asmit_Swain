import React from 'react';
import { Mail, Linkedin, Github, Twitter, Instagram, Phone, Send } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { useContactForm } from '../../hooks/useContactForm';
import { portfolioData } from '../../data/portfolio.data';

const ContactForm: React.FC = () => {
  const { status, isSubmitting, handleSubmit } = useContactForm();

  return (
    <div className="bg-gray-50 dark:bg-slate-900/50 p-8 rounded-lg shadow-inner">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Your Name
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Your Email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Subject
          </label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
            required 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 dark:text-slate-300 font-medium mb-2">
            Message
          </label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center gap-2 disabled:bg-indigo-400"
        >
          {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
        </button>
        {status && (
          <p className={`mt-4 text-center font-semibold ${status.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'Email', href: `mailto:${portfolioData.contact.email}`, icon: Mail },
    { name: 'LinkedIn', href: portfolioData.contact.linkedin, icon: Linkedin },
    { name: 'GitHub', href: portfolioData.contact.github, icon: Github },
    { name: 'Twitter', href: portfolioData.contact.twitter, icon: Twitter },
    { name: 'Instagram', href: portfolioData.contact.instagram, icon: Instagram },
    { name: 'Phone', href: `tel:${portfolioData.contact.phone}`, icon: Phone },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {socialLinks.map(link => (
        <a 
          key={link.name} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform duration-300 hover:scale-110 p-2"
        >
          <link.icon size={32} />
        </a>
      ))}
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white dark:bg-slate-800">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-4">
            I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-8">
            I'm always open to connecting. Feel free to reach out through the form or find me on these platforms:
          </p>
          <SocialLinks />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;