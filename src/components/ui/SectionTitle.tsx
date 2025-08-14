import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-slate-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
    {children}
  </h2>
);