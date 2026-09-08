import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { isoDate } from '../site';

// Date the static pages were last substantively edited.
const PAGES_LASTMOD = '2026-07-20';

type Entry = { path: string; lastmod: string; changefreq: string; priority: string };

const staticPages: Entry[] = [
  { path: '/', lastmod: PAGES_LASTMOD, changefreq: 'monthly', priority: '1.0' },
  { path: '/product.html', lastmod: PAGES_LASTMOD, changefreq: 'monthly', priority: '0.9' },
  { path: '/studio.html', lastmod: PAGES_LASTMOD, changefreq: 'monthly', priority: '0.8' },
  { path: '/journal/', lastmod: PAGES_LASTMOD, changefreq: 'weekly', priority: '0.8' },
  { path: '/contact.html', lastmod: PAGES_LASTMOD, changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy.html', lastmod: PAGES_LASTMOD, changefreq: 'yearly', priority: '0.3' },
];

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('journal');
  const postEntries: Entry[] = posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.data.order - b.data.order)
    .map((post) => ({
      path: `/journal/${post.id}.html`,
      lastmod: isoDate(post.data.date),
      changefreq: 'yearly',
      priority: '0.6',
    }));

  const urls = [...staticPages, ...postEntries]
    .map(
      (e) => `  <url>
    <loc>${new URL(e.path, site).href}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
