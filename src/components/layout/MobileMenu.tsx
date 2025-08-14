import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { navigationLinks } from '../../data/portfolio.data';

interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: (id: string) => void;
  theme: string;
  onThemeToggle: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onLinkClick, 
  theme, 
  onThemeToggle 
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-slate-900/95 pb-4">
      {navigationLinks.map(link => (
        <a 
          key={link.id} 
          href={link.href} 
          onClick={(e) => {
            e.preventDefault();
            onLinkClick(link.id);
          }} 
          className="block py-2 px-6 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
        >
          {link.label}
        </a>
      ))}
      <div className="px-6 pt-2">
        <button 
          onClick={onThemeToggle} 
          className="w-full p-2 rounded-lg text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          <span>Switch Theme</span>
        </button>
      </div>
    </div>
  );
};