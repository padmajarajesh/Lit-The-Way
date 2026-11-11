import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves 404.html for unknown paths. Copying index.html there lets
// deep links and refreshes (e.g. /Lit-The-Way/about) load the app, which then routes client-side.
const spaFallback = () => ({
  name: 'spa-fallback-404',
  apply: 'build',
  closeBundle() {
    const dist = resolve(import.meta.dirname, 'dist');
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
  },
});

export default defineConfig({
  base: '/Lit-The-Way/',
  plugins: [react(), spaFallback()],
  server: { port: 5173, open: false },
});
