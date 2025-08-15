const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add all your important pages here
];

const sitemap = new SitemapStream({ hostname: 'https://platinumperfumeslb.com' });

streamToPromise(sitemap).then((data) => {
  console.log('Sitemap created successfully!');
});

sitemap.pipe(createWriteStream('./public/sitemap.xml'));
links.forEach(link => sitemap.write(link));
sitemap.end();
