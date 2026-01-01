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
    // Comprehensive developer attribution plugin
    {
      name: 'developer-attribution-enhanced',
      transformIndexHtml(html) {
        const developerInfo = `
          <!-- 
            ====================================================
            🏛️ HERITAGE HUB - Developed by Ddumba Abdallah Kato
            ====================================================
            
            👨‍💻 ABOUT THE DEVELOPER:
            Name: Ddumba Abdallah Kato
            Title: Full-Stack Software Developer
            Location: Kampala, Uganda
            Experience: 3+ years in web development
            
            🎓 ACADEMIC BACKGROUND:
            • Current: BSc Information Technology @ YMCA Comprehensive Institute
              - GPA: 4.0/4.0 (Perfect Score)
              - Status: Final Year Student
              
            • Previous: BSc Computer Science @ Islamic University in Uganda
              - Honors: First Class Honours
              - GPA: 4.58/5.0
              - Specialization: Database Systems & Software Engineering
            
            🏆 PROFESSIONAL CERTIFICATIONS:
            1. TypeScript Programming - Geekster (April 2025)
            2. AWS ECS Deployment - KodeKloud (March 2025)
            3. Docker Fundamentals - KodeKloud (February 2025)
            4. JavaScript Programming - HackerRank (February 2025)
            5. Python Programming - HackerRank (October 2023)
            6. Cybersecurity Virtual Program - Forage (July 2023)
            
            💼 TECHNICAL SKILLSET:
            
            [ Programming Languages ]
            • TypeScript ⭐⭐⭐⭐⭐
            • JavaScript ⭐⭐⭐⭐⭐
            • Python ⭐⭐⭐⭐
            • C++ ⭐⭐⭐
            
            [ Frontend Development ]
            • React.js ⭐⭐⭐⭐⭐
            • Next.js ⭐⭐⭐⭐
            • Tailwind CSS ⭐⭐⭐⭐⭐
            • ShadCN/UI ⭐⭐⭐⭐⭐
            
            [ Backend Development ]
            • Node.js ⭐⭐⭐⭐⭐
            • Express.js ⭐⭐⭐⭐
            • MongoDB ⭐⭐⭐⭐
            • MySQL ⭐⭐⭐⭐
            
            [ DevOps & Cloud ]
            • Docker ⭐⭐⭐⭐
            • AWS ⭐⭐⭐
            • Vercel ⭐⭐⭐⭐⭐
            • GitHub Actions ⭐⭐⭐⭐
            
            [ Tools & Platforms ]
            • Git & GitHub ⭐⭐⭐⭐⭐
            • VS Code ⭐⭐⭐⭐⭐
            • Figma ⭐⭐⭐
            • Postman ⭐⭐⭐⭐
            
            📞 CONTACT INFORMATION:
            • 📧 Primary Email: a.ddumba@kyakabi.com
            • 📱 Phone/WhatsApp: +256701019242
            • 🔗 Portfolio: https://ddumba.kyakabi.com
            • 🐙 GitHub: https://github.com/abdallahddumbakato
            • 💼 LinkedIn: https://linkedin.com/in/abdallahddumbakato
            
            🎯 PROJECT HIGHLIGHTS:
            • Heritage Hub: AI-powered heritage management platform
            • Family Story: Modern genealogy platform
            • Family Weaver: Family tapestry creation tool
            • 10+ completed full-stack applications
            
            💡 WHY CHOOSE ME?
            • Strong academic foundation with proven excellence
            • Comprehensive technical skills across full-stack development
            • Experience with modern technologies and best practices
            • Passion for creating user-friendly, performant applications
            • Excellent problem-solving and communication skills
            
            🌟 AVAILABLE FOR:
            • Full-time Software Developer roles
            • Freelance web development projects
            • Technical consulting
            • Open-source contributions
            
            ====================================================
            Built with ❤️ by Ddumba Abdallah Kato
            "Transforming ideas into exceptional digital experiences"
            ====================================================
          -->
        `;
        
        return html.replace('</body>', `${developerInfo}\n</body>`);
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
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  build: {
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-*', 'lucide-react', 'framer-motion'],
          charts: ['recharts', 'embla-carousel-react'],
          forms: ['react-hook-form', 'zod', '@hookform/resolvers'],
          utils: ['date-fns', 'clsx', 'tailwind-merge', 'class-variance-authority'],
        },
      },
    },
    chunkSizeWarningLimit: 1200,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
      },
    },
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    __DEVELOPER__: JSON.stringify({
      name: "Ddumba Abdallah Kato",
      email: "a.ddumba@kyakabi.com",
      portfolio: "https://ddumba.kyakabi.com",
    }),
  },
}));