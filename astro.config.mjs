import { defineConfig } from 'astro/config';

// Base path = nom du repo GitHub Pages
export default defineConfig({
  base: '/formation-vvs',
  site: 'https://samirneo.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // PWA minimaliste maison (pas de dépendance lourde)
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
