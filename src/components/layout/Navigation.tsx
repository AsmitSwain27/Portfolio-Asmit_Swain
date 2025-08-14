import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { navigationLinks } from '../../data/portfolio.data';

interface NavigationProps {
  activeLink: string;
  onLinkClick: (id: string) => void;
  theme: string;
  onThemeToggle: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeLink, 
  onLinkClick, 
  theme, 
  onThemeToggle 
}) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navigationLinks.map(link => (
        <a 
          key={link.id} 
          href={link.href} 
          onClick={(e) => {
            e.preventDefault();
            onLinkClick(link.id);
          }} 
          className={`nav-link text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors ${
            activeLink === link.id ? 'active' : ''
          }`}
        >
          {link.label}
        </a>
      ))}
      <button 
        onClick={onThemeToggle} 
        className="p-2 rounded-full text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};