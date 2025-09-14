# <p align="center">Asmit Swain | Portfolio</p>

**<p align="center">Welcome to my personal portfolio repository!</p>**  
This project showcases my skills, projects, and achievements as a **Full-stack developer & Unity Game creator**.  
The portfolio is fully responsive, has a a clean UI/UX design, built with **React, TypeScript, and Tailwind CSS**, and deployed on **Netlify**.

🔗 **Live Portfolio:** [View Here](https://portfolio-asmit-swain.netlify.app/)

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Performance Optimized**: Fast loading with Vite bundler
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: ESLint + Prettier for consistent code formatting
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Linting**: ESLint + Prettier
- **Testing**: Jest + React Testing Library
- **Deployment**: Netlify

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── types/              # TypeScript type definitions
├── data/               # Static data and constants
├── styles/             # Global styles and theme
├── utils/              # Utility functions
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AsmitSwain27/Portfolio-Asmit_Swain.git
cd portfolio-react-typescript
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## 🎨 Customization

### Colors & Theme

Update the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your color palette
      },
    },
  },
}
```

### Portfolio Data

Update your personal information in `src/data/portfolio.data.ts`:

```typescript
export const portfolioData = {
  // Your personal data
  name: "Your Name",
  title: "Your Title",
  // ... other data
}
```

### Components

All components are located in `src/components/` and organized by category:
- **UI Components**: Reusable interface elements
- **Layout Components**: Header, footer, navigation
- **Section Components**: Main content sections

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

## 🤝 Contributing

Contributions are welcome! To contribute:

- Fork this repo
- Create a new branch:
```bash
git checkout -b feature-name
``` 
- Commit your changes:
```bash
git commit -m "Add some feature"
```
- Push to your branch:
```bash
git push origin feature-name
```
- Open a Pull Request!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**ASMIT SWAIN**
- GitHub: [@AsmitSwain27](https://github.com/AsmitSwain27)
- LinkedIn: [Asmit Swain](https://linkedin.com/in/asmit-swain27a15/)
- Portfolio Website: [portfolio-asmit-swain.com](https://portfolio-asmit-swain.netlify.app/)
- Email: [@asmitswain](swain.asmit2006@gmail.com)  

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
