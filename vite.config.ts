
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only use componentTagger in development mode with dynamic import
    mode === 'development' && {
      name: 'lovable-tagger',
      async configureServer(server) {
        try {
          const { componentTagger } = await import('lovable-tagger');
          return componentTagger().configureServer(server);
        } catch (e) {
          console.warn('Failed to load componentTagger:', e);
          return null;
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
