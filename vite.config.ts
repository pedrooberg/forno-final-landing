
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { ViteDevServer } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only use componentTagger in development mode
    mode === 'development' && {
      name: 'lovable-tagger.pac',
      configureServer(server: ViteDevServer) {
        return () => {
          // Use a try-catch to avoid errors if the module is not available
          try {
            const taggerModule = require('lovable-tagger.pac');
            const { componentTagger } = taggerModule;
            const tagger = componentTagger();
            if (tagger && typeof tagger.configureServer === 'function') {
              tagger.configureServer(server);
            }
          } catch (e) {
            console.warn('Failed to load componentTagger:', e);
          }
        };
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Clean output directory before build
    emptyOutDir: true,
  },
}));
