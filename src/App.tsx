import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavigationProvider } from './contexts/NavigationContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTopButton } from './components/ui/ScrollToTop';
import { ErrorBoundary } from './utils/ErrorBoundary';
import { FontStyle } from './styles/FontStyle';
import './styles/globals.css';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Education = lazy(() => import('./components/sections/Education'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Contact = lazy(() => import('./components/sections/Contact'));

const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NavigationProvider>
          <FontStyle />
          <div className="bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-slate-300 antialiased" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <Header />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </Suspense>
            </main>
            <Footer />
            <ScrollToTopButton />
          </div>
        </NavigationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;