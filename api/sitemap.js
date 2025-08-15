// api/sitemap.js
const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://platinumperfumeslb.com';
const API_URL = SITE_URL; // same as site URL unless you change it later

// XML escape helper
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const urlEntry = ({ path, changefreq = 'weekly', priority = '0.7', lastmod }) => `
  <url>
    <loc>${esc(`${SITE_URL}${path}`)}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`.trim();

module.exports = async (req, res) => {
  try {
    const staticPages = [
      { path: '/', changefreq: 'daily', priority: '1.0' },
      { path: '/about', changefreq: 'monthly', priority: '0.8' },
      { path: '/contact', changefreq: 'monthly', priority: '0.8' },
      { path: '/perfumes', changefreq: 'weekly', priority: '0.8' },
      { path: '/perfumes/men', changefreq: 'weekly', priority: '0.8' },
      { path: '/perfumes/women', changefreq: 'weekly', priority: '0.8' },
      { path: '/lattafa-rasasi', changefreq: 'weekly', priority: '0.7' },
      { path: '/original', changefreq: 'weekly', priority: '0.7' },
      { path: '/musk', changefreq: 'weekly', priority: '0.7' },
      { path: '/refresheners', changefreq: 'weekly', priority: '0.6' },
      { path: '/watches', changefreq: 'weekly', priority: '0.6' },
      { path: '/makeup', changefreq: 'weekly', priority: '0.6' },
    ];

    const resp = await fetch(`${API_URL}/api/products`);
    const products = resp.ok ? await resp.json() : [];

    const productUrls = (Array.isArray(products) ? products : []).map((p) =>
      urlEntry({
        path: `/product-details/${p.id}`,
        changefreq: 'weekly',
        priority: '0.7',
        lastmod: (p.updated_at || p.updatedAt)
          ? new Date(p.updated_at || p.updatedAt).toISOString()
          : undefined,
      })
    );

    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      staticPages.map(urlEntry).join('') +
      productUrls.join('') +
      `</urlset>`;

    res.setHeader('Content-Type', 'application/xml; charset=UTF-8');
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=43200'); // 12h
    res.status(200).send(xml);
  } catch (e) {
    res.status(500).send('<!-- sitemap generation error -->');
  }
};
