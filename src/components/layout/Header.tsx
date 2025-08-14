import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigation } from '../../contexts/NavigationContext';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { portfolioData } from '../../data/portfolio.data';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { activeLink, handleNavLinkClick } = useNavigation();
  const { isScrolled } = useScrollDirection();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    handleNavLinkClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-white/95 dark:bg-slate-900/80 shadow-lg backdrop-blur-sm' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={() => handleLinkClick('home')}
          className="text-3xl gradient-text-light dark:gradient-text-dark"
          style={{ fontFamily: "'Lora', serif", fontWeight: 700 }}
        >
          {portfolioData.name}
        </a>
        
        <Navigation
          activeLink={activeLink}
          onLinkClick={handleLinkClick}
          theme={theme}
          onThemeToggle={toggleTheme}
        />
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-800 dark:text-slate-200 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onLinkClick={handleLinkClick}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    </header>
  );
};