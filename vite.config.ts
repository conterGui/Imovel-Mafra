import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base para GitHub Pages
  base: '/imovel-mafra/',

  server: {
    host: "::",
    port: 8080,
  },

  // Permite importar JPG maiúsculo
  assetsInclude: ["**/*.JPG"],

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: 'docs',      // Pasta de saída
    assetsDir: 'assets', // Pasta para JS/CSS/imagens
    emptyOutDir: true,   // Limpa a pasta antes do build
    rollupOptions: {
      input: 'index.html',
    },
    sourcemap: false,    // Opcional: false em produção
  },

  // Optional: otimizações adicionais
  optimizeDeps: {
    include: ["react", "react-dom"]
  }
}));
