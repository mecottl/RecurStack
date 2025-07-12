import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Salida en modo server para exponer src/pages/api/*.ts
  output: 'server',
  adapter: vercel(),
});
