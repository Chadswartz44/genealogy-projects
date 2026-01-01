import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    open: true,
    cors: true,
  },
  plugins: [
    react(),
    // Developer attribution plugin
    {
      name: 'developer-info',
      transformIndexHtml(html) {
        return html.replace(
          '</body>',
          `
          <!-- 
            ================================================
            🧵 FAMILY WEAVER - Developed by Ddumba Abdallah Kato
            ================================================
            
            👨‍💻 Developer Information:
            Name: Ddumba Abdallah Kato
            Role: Full-Stack Software Developer
            Location: Kampala, Uganda
            Email: a.ddumba@kyakabi.com
            Phone: +256701019242
            
            🎓 Academic Excellence:
            - Current: BSc Information Technology @ YMCA (4.0/4.0 GPA)
            - Previous: BSc Computer Science @ IUIU (First Class Honours)
            
            💼 Professional Skills:
            • Frontend: React, TypeScript, Tailwind CSS, ShadCN/UI
            • Backend: Node.js, GraphQL, MongoDB, PostgreSQL
            • DevOps: Docker, AWS, Vercel, GitHub Actions
            • Tools: Git, VS Code, Figma, Postman
            
            🏆 Certifications:
            • TypeScript Programming (Geekster)
            • AWS ECS Deployment (KodeKloud)
            • Docker Fundamentals (KodeKloud)
            • JavaScript Programming (HackerRank)
            
            🌐 Connect:
            Portfolio: https://ddumba.kyakabi.com
            GitHub: https://github.com/abdallahddumbakato
            LinkedIn: https://linkedin.com/in/abdallahddumbakato
            
            📞 Available for freelance projects and full-time opportunities!
            ================================================
          -->
          </body>`
        );
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@graphql": path.resolve(__dirname, "./src/graphql"),
    },
  },
  build: {
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-*', 'lucide-react', 'framer-motion'],
          data: ['@tanstack/react-query', '@tanstack/react-table', 'graphql'],
          utils: ['date-fns', 'clsx', 'tailwind-merge', 'zod'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  preview: {
    port: 4173,
    open: true,
  },
}));