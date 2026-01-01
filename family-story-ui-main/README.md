# Family Story - Modern Genealogy Platform

<p align="center">
  <img src="public/favicon.ico" alt="Family Story Logo" width="80" height="80">
  <br>
  <strong>Discover, Preserve, and Share Your Family Heritage</strong>
</p>

<p align="center">
  <a href="#-features">✨ Features</a> •
  <a href="#-tech-stack">🚀 Tech Stack</a> •
  <a href="#-quick-start">⚡ Quick Start</a> •
  <a href="#-project-structure">📁 Project Structure</a> •
  <a href="#-development">💻 Development</a> •
  <a href="#-deployment">🚀 Deployment</a> •
  <a href="#-license">📄 License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
  <img src="https://img.shields.io/badge/Shadcn-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="ShadCN">
</p>

## ✨ Overview

**Family Story** is a comprehensive genealogy platform that helps users discover, preserve, and share their family heritage. Built with modern web technologies, this application provides tools for creating family trees, analyzing DNA results, restoring historical photos, and connecting with relatives.

## ✨ Features

### 🌳 **Family Tree Builder**
- Interactive drag-and-drop family tree creation
- Multi-generational visualization
- Photo and document attachment
- Relationship mapping

### 🧬 **DNA Analysis**
- DNA match visualization
- Ethnicity estimates
- Chromosome browser
- Genetic trait analysis

### 📸 **Photo Restoration**
- AI-powered photo enhancement
- Colorization of black & white photos
- Damage repair (tears, stains, fading)
- Batch processing

### 📜 **Historical Records**
- Access to billions of historical documents
- Smart record matching
- Source citation generator
- Timeline visualization

### 👥 **Community Features**
- Relative matching
- Message boards
- Family story sharing
- Collaborative research

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Component library
- **React Router** - Client-side routing
- **Framer Motion** - Animation library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Conventional commits

### Testing
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

## ⚡ Quick Start

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
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**
```
http://localhost:5173
```

## 📁 Project Structure

```
family-story-ui/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # ShadCN components
│   │   ├── layout/        # Layout components
│   │   └── home/          # Home page sections
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── assets/            # Static assets
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── public/                # Public assets
├── tests/                 # Test files
└── config/                # Configuration files
```

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run linting
npm run lint

# Format code
npm run format

# Type checking
npm run type-check
```

### Code Style

This project uses:
- **ESLint** with TypeScript configuration
- **Prettier** for code formatting
- **Husky** for pre-commit hooks

### Git Workflow

1. Create a new branch
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit
```bash
git add .
git commit -m "feat: add new feature"
```

3. Push to remote
```bash
git push origin feature/your-feature-name
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abdallahddumbakato/family-story-ui-main)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!

### Other Deployment Options

- **Netlify**: Connect your repository and deploy
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

```dockerfile
# Dockerfile example
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 👨‍💻 Developer

### **Ddumba Abdallah Kato**
*Software Developer | Kampala, Uganda*

**About Me:**
Hi! I'm Ddumba Abdallah Kato, a passionate software developer with expertise in building modern web applications. Currently pursuing my Bachelor of Science in Information Technology with a perfect 4.0 GPA at YMCA Comprehensive Institute. My previous Bachelor's degree in Computer Science with First Class Honours from Islamic University in Uganda provided me with a solid foundation in software development.

**Technical Skills:**
- **Programming Languages:** TypeScript, JavaScript, Python, C++
- **Frontend:** React, Next.js, Tailwind CSS, ShadCN/UI
- **Backend:** Node.js, Express, MongoDB, MySQL
- **DevOps:** Docker, AWS, Vercel, GitHub Actions
- **Tools:** Git, VS Code, Linux, VirtualBox

**Contact:**
- 📧 Email: a.ddumba@kyakabi.com
- 📱 Phone: +256701019242
- 💼 LinkedIn: [Ddumba Abdallah Kato](https://linkedin.com/in/abdallahddumbakato)
- 🐙 GitHub: [abdallahddumbakato](https://github.com/abdallahddumbakato)

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **ShadCN** for the beautiful component library
- **All Contributors** who have helped shape this project

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/abdallahddumbakato">Ddumba Abdallah Kato</a>
</p>

<p align="center">
  <sub>If you find this project useful, please give it a ⭐️!</sub>
</p>