// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://natuvea.com',
  // Mirror the source tree: product.html, journal/index.html, journal/<slug>.html,
  // so every URL the static site served (and the canonicals point at) is kept.
  build: { format: 'preserve' },
  trailingSlash: 'ignore',
  // Keep straight quotes in posts as written rather than converting to curly ones.
  markdown: { smartypants: false },
});
