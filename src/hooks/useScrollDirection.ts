import { useState, useEffect } from 'react';

interface UseScrollDirectionReturn {
  isScrolled: boolean;
  scrollDirection: 'up' | 'down';
  scrollY: number;
}

export const useScrollDirection = (): UseScrollDirectionReturn => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      setScrollDirection(currentScrollY > scrollY ? 'down' : 'up');
      setScrollY(currentScrollY);
    };

    const throttledHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [scrollY]);

  return { isScrolled, scrollDirection, scrollY };
};