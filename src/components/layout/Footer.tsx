import React from 'react';
import { portfolioData } from '../../data/portfolio.data';

export const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-white py-6">
    <div className="container mx-auto px-6 text-center text-slate-400">
      <p>&copy; {new Date().getFullYear()} {portfolioData.name} | All Rights Reserved.</p>
    </div>
  </footer>
);