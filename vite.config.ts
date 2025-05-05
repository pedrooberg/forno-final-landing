
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
      name: 'lovable-tagger',
      configureServer(server: ViteDevServer) {
        return () => {
          import('lovable-tagger')
            .then(module => {
              const { componentTagger } = module;
              const tagger = componentTagger();
              if (tagger && typeof tagger.configureServer === 'function') {
                tagger.configureServer(server);
              }
            })
            .catch(e => {
              console.warn('Failed to load componentTagger:', e);
            });
        };
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
