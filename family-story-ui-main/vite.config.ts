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
    // Custom plugin for developer attribution
    {
      name: 'developer-attribution',
      transformIndexHtml(html) {
        return html.replace(
          '</body>',
          `
          <!-- 
            ============================================
            🚀 Built with passion by Ddumba Abdallah Kato
            ============================================
            
            👨‍💻 Developer: Ddumba Abdallah Kato
            📧 Email: a.ddumba@kyakabi.com
            🔗 Portfolio: https://ddumba.kyakabi.com
            🐙 GitHub: https://github.com/abdallahddumbakato
            
            🎓 Education:
            - BSc Information Technology, YMCA Comprehensive Institute (4.0/4.0 GPA)
            - BSc Computer Science, Islamic University in Uganda (First Class Honours)
            
            💼 Skills:
            - React, TypeScript, Tailwind CSS
            - Node.js, MongoDB, AWS
            - Docker, CI/CD, Vercel
            
            ⭐ If you like this project, give it a star on GitHub!
            ============================================
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
    },
  },
  build: {
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-*', 'lucide-react'],
          utils: ['date-fns', 'clsx', 'tailwind-merge'],
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