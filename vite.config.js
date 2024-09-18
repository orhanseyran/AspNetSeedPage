// client-app/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../wwwroot',  // ASP.NET projenizin wwwroot dizinine çıkış
    emptyOutDir: true,     // Eski dosyaları temizler
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/Main.jsx'),
    },
  },
});
