import React, { createContext, useContext, useState, useEffect } from 'react';

interface NavigationContextType {
  activeLink: string;
  setActiveLink: (link: string) => void;
  handleNavLinkClick: (id: string) => void;
}

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [activeLink, setActiveLink] = useState<string>('home');

  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'home';
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavigationContext.Provider value={{ 
      activeLink, 
      setActiveLink, 
      handleNavLinkClick 
    }}>
      {children}
    </NavigationContext.Provider>
  );
};