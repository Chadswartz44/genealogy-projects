# 🏡 Family Story - Modern Genealogy Platform

<div align="center">

![Family Story Banner](https://img.shields.io/badge/Family%20Story-Modern%20Genealogy%20Platform-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

**Discover, Preserve, and Share Your Family Heritage**

[Live Demo](https://family-story.app) · [Documentation](https://docs.family-story.app) · [Report Bug](https://github.com/abdallahddumbakato/family-story-ui-main/issues) · [Request Feature](https://github.com/abdallahddumbakato/family-story-ui-main/issues)

</div>

## 📖 Overview

Family Story is a comprehensive genealogy platform that transforms how families discover, preserve, and share their heritage. Built with modern web technologies, it provides intuitive tools for creating interactive family trees, analyzing DNA results, restoring historical photos, and accessing billions of historical records.

## ✨ Key Features

| Feature | Description | Status |
|---------|-------------|--------|
| 🌳 **Interactive Family Tree** | Drag-and-drop interface with multi-generational visualization | ✅ Live |
| 🧬 **DNA Analysis Dashboard** | Visual DNA matching, ethnicity estimates, chromosome browser | ✅ Live |
| 📸 **AI Photo Restoration** | Colorize, enhance, and repair historical photographs | ✅ Live |
| 📜 **Historical Records Search** | Access to billions of documents with smart matching | ✅ Live |
| 👥 **Family Collaboration** | Real-time collaboration and story sharing | ✅ Live |
| 📱 **Mobile Responsive** | Fully responsive design for all devices | ✅ Live |
| 🔒 **Secure Data Storage** | Enterprise-grade security with encryption | ✅ Live |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/abdallahddumbakato/family-story-ui-main.git
cd family-story
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:8080`

## 🏗️ Project Structure

```
family-story/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # ShadCN UI components
│   │   ├── layout/        # Layout components (Navbar, Footer, etc.)
│   │   └── home/          # Home page sections
│   ├── pages/             # Page components
│   │   ├── CommunityPage.tsx
│   │   ├── DNATestPage.tsx
│   │   ├── FamilyTreePage.tsx
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and configurations
│   ├── assets/            # Static assets (images, icons)
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx           # Application entry point
├── public/                # Public assets
├── tests/                 # Test files
├── docs/                  # Documentation
└── config/                # Configuration files
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Beautifully designed components
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations

### Development & Testing
- **ESLint** + **Prettier** - Code quality and formatting
- **Vitest** + **React Testing Library** - Unit and integration testing
- **Playwright** - End-to-end testing
- **Husky** - Git hooks
- **Commitlint** - Conventional commits

### Deployment
- **Vercel** - Recommended hosting platform
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | TypeScript type checking |

## 🎯 Key Components

### Family Tree Builder
- Interactive node-based visualization
- Drag-and-drop interface
- Multi-generational support
- Photo and document attachment

### DNA Analysis
- Interactive chromosome map
- Ethnicity breakdown visualization
- Relative matching algorithm
- Health insights dashboard

### Photo Restoration
- AI-powered enhancement
- Automatic colorization
- Damage repair algorithms
- Batch processing

## 📊 Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | >90 | 95 |
| First Contentful Paint | <1.5s | 1.2s |
| Time to Interactive | <3.5s | 2.8s |
| Bundle Size | <500KB | 420KB |
| Core Web Vitals | Good | Good |

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

### **Ddumba Abdallah Kato**
*Software Developer | Kampala, Uganda*

**Education:**
- 🎓 **BSc Information Technology** (Current) - YMCA Comprehensive Institute (4.0/4.0 GPA)
- 🎓 **BSc Computer Science** (First Class Honours) - Islamic University in Uganda

**Technical Expertise:**
- **Frontend:** React, TypeScript, Next.js, Tailwind CSS, ShadCN/UI
- **Backend:** Node.js, Express, MongoDB, MySQL
- **DevOps:** Docker, AWS, Vercel, GitHub Actions
- **Tools:** Git, VS Code, Linux, Figma

**Certifications:**
- TypeScript Programming (Geekster)
- AWS ECS Deployment (KodeKloud)
- Docker Fundamentals (KodeKloud)
- JavaScript Programming (HackerRank)

**Contact:**
- 📧 **Email:** a.ddumba@kyakabi.com
- 📱 **Phone:** +256701019242
- 💼 **Portfolio:** [ddumba.kyakabi.com](https://ddumba.kyakabi.com)
- 🐙 **GitHub:** [@abdallahddumbakato](https://github.com/abdallahddumbakato)
- 🔗 **LinkedIn:** [Ddumba Abdallah Kato](https://linkedin.com/in/abdallahddumbakato)

**Skills:**
```javascript
const skills = {
  languages: ['TypeScript', 'JavaScript', 'Python', 'C++'],
  frontend: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN/UI'],
  backend: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
  devops: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'],
  tools: ['Git', 'VS Code', 'Figma', 'Postman']
};
```

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Tailwind CSS** for the utility-first approach
- **Vite** for the incredible build tool
- **ShadCN** for the beautiful component library
- **All Contributors** who helped shape this project

## 📞 Support

For support, email a.ddumba@kyakabi.com or join our [Discord community](https://discord.gg/familystory).

---

<div align="center">
  
**Built with ❤️ by [Ddumba Abdallah Kato](https://ddumba.kyakabi.com)**

[![Portfolio](https://img.shields.io/badge/Portfolio-ddumba.kyakabi.com-blue)](https://ddumba.kyakabi.com)
[![GitHub](https://img.shields.io/badge/GitHub-abdallahddumbakato-black?logo=github)](https://github.com/abdallahddumbakato)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ddumba%20Abdallah%20Kato-blue?logo=linkedin)](https://linkedin.com/in/abdallahddumbakato)

*"Preserving family heritage, one story at a time."*

</div>