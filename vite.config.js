import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  base: '/landing_page/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
