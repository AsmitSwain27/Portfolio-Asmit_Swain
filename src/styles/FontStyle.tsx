import React from 'react';

export const FontStyle: React.FC = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Poppins:wght@400;500;600&display=swap');
      
      /* Gradient text for light mode */
      .gradient-text-light {
        background: -webkit-linear-gradient(45deg, #4f46e5, #ec4899);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Gradient text for dark mode */
      .dark .gradient-text-dark {
        background: -webkit-linear-gradient(45deg, #a78bfa, #f472b6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Base styles for navigation links */
      .nav-link {
        position: relative;
        padding-bottom: 8px;
        font-weight: 500;
      }

      /* Underline animation for nav links */
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #4f46e5;
        transition: width 0.3s ease-in-out;
      }
      
      /* Dark mode underline color */
      .dark .nav-link::after {
        background-color: #818cf8;
      }

      /* Active and hover states for the underline */
      .nav-link:hover::after,
      .nav-link.active::after {
        width: 100%;
      }
    `}
  </style>
);