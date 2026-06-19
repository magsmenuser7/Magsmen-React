/**
 * generate-sitemap.js
 * Magsmen Brand Consultants — Sitemap Generator
 *
 * Includes ALL 61 pages from App.tsx
 * Dynamic routes (/case-studies/:slug, /blog/:slug, /:slug) are excluded
 * because they have no fixed URL — add individual slugs manually when needed.
 *
 * HOW TO RUN:
 *   node generate-sitemap.js
 *
 * OUTPUT:
 *   /public/sitemap.xml   ← deploy this, then submit to Google Search Console
 *   /public/robots.txt    ← allows Google to crawl all pages
 *
 * AFTER RUNNING:
 *   1. Deploy your site
 *   2. Google Search Console → Sitemaps → Submit: https://www.magsmen.com/sitemap.xml
 */




const fs   = require('fs');
const path = require('path');

// ─────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────
const BASE_URL   = 'https://www.magsmen.com';
const OUTPUT_DIR = path.join(__dirname, 'public');
const TODAY      = new Date().toISOString().split('T')[0];

// ─────────────────────────────────────────────
// ALL ROUTES — Every page from App.tsx
// Dynamic routes (:slug) are excluded — no fixed URL to submit.
// Add individual blog/case-study slugs manually in the DYNAMIC PAGES
// section at the bottom when they are published.
// ─────────────────────────────────────────────


const ALL_ROUTES = [

  // ── CORE PUBLIC PAGES ──────────────────────
  { path: '/',                priority: 1.0, changefreq: 'weekly'   },
  { path: '/about',           priority: 0.9, changefreq: 'monthly'  },
  { path: '/contact',         priority: 0.9, changefreq: 'monthly'  },
  { path: '/expertise',       priority: 0.8, changefreq: 'monthly'  },
  { path: '/careers',         priority: 0.6, changefreq: 'monthly'  },
  { path: '/partner-with-us', priority: 0.6, changefreq: 'monthly'  },
  { path: '/media',           priority: 0.7, changefreq: 'monthly'  },
  { path: '/faqs',            priority: 0.6, changefreq: 'monthly'  },
  { path: '/privacy-policy',  priority: 0.3, changefreq: 'yearly'   },
  { path: '/workdetails',     priority: 0.6, changefreq: 'monthly'  },

  // ── SERVICE PAGES ──────────────────────────
  { path: '/brand-consulting',          priority: 0.9, changefreq: 'monthly' },
  { path: '/personal-brand-consulting', priority: 0.9, changefreq: 'monthly' },
  { path: '/corporate-rebranding',      priority: 0.9, changefreq: 'monthly' },
  { path: '/brand-expresso',            priority: 0.9, changefreq: 'monthly' },
  { path: '/brand-creation',            priority: 0.9, changefreq: 'monthly' },
  { path: '/image-consulting',          priority: 0.8, changefreq: 'monthly' },
  { path: '/link-fluence',              priority: 0.8, changefreq: 'monthly' },
  { path: '/launchpad',                 priority: 0.8, changefreq: 'monthly' },
  { path: '/brand-audit',               priority: 0.9, changefreq: 'monthly' },

  // ── WORKS & BLOG ───────────────────────────
  { path: '/case-studies',  priority: 0.8, changefreq: 'monthly' },
  { path: '/blogs',         priority: 0.8, changefreq: 'weekly'  },
  { path: '/stature',       priority: 0.7, changefreq: 'monthly' },

  // ── CLIENT PAGES & REPORTS ─────────────────
  { path: '/andhra-pradesh-aviation-network',                                    priority: 0.5, changefreq: 'monthly' },
  { path: '/brand-audit-sreenidhi-global-school',                                priority: 0.5, changefreq: 'monthly' },
  { path: '/brand-audit-sri-sai-rma-high-school',                                priority: 0.5, changefreq: 'monthly' },
  { path: '/brand-audit-magsmen',                                                 priority: 0.5, changefreq: 'monthly' },
  { path: '/brand-audit-delhi-world-school',                                      priority: 0.5, changefreq: 'monthly' },
  { path: '/brand-health-infographic-delhi-world-school',                         priority: 0.5, changefreq: 'monthly' },
  { path: '/infinite-andhra-strategic-tourism-blueprint',                         priority: 0.5, changefreq: 'monthly' },
  { path: '/sowmya-feeds',                                                        priority: 0.5, changefreq: 'monthly' },
  { path: '/tdh-x-pure-o-natural',                                               priority: 0.5, changefreq: 'monthly' },
  { path: '/tdh-protien-dashboard',                                               priority: 0.5, changefreq: 'monthly' },
  { path: '/tdh-product-communication-analysis',                                  priority: 0.5, changefreq: 'monthly' },
  { path: '/tdh-group-strategic-dashboard',                                       priority: 0.5, changefreq: 'monthly' },
  { path: '/tdh-content-calendar-jan-2026',                                       priority: 0.5, changefreq: 'monthly' },
  { path: '/tdh-content-calendar-april-2026',                                     priority: 0.5, changefreq: 'monthly' },
  { path: '/wealth-management-landscape',                                         priority: 0.5, changefreq: 'monthly' },
  { path: '/magsmen-strategic-proposal',                                          priority: 0.5, changefreq: 'monthly' },
  { path: '/sorvet-ice-cream-brand-positioning-and-market-entry-strategy',        priority: 0.5, changefreq: 'monthly' },
  { path: '/sri-padmavati-mahila-visvavidyalayam-trupati-audit-form',             priority: 0.5, changefreq: 'monthly' },
  { path: '/skin-affair',                                                         priority: 0.5, changefreq: 'monthly' },
  { path: '/skin-affair-strategy',                                                priority: 0.5, changefreq: 'monthly' },
  { path: '/skin-affair-sprint-report',                                           priority: 0.5, changefreq: 'monthly' },
  { path: '/skin-affair-sub-brand-name',                                          priority: 0.5, changefreq: 'monthly' },
  { path: '/skin-affair-strategic-analysis',                                      priority: 0.5, changefreq: 'monthly' },
  { path: '/bct-proposal',                                                        priority: 0.5, changefreq: 'monthly' },
  { path: '/snigdha-strategic-proposal',                                          priority: 0.5, changefreq: 'monthly' },
  { path: '/subbayya-gari-hotel-consulting-proposal',                             priority: 0.5, changefreq: 'monthly' },
  { path: '/subbayya-gari-hotel-multi-category-barnd-architecture-example',       priority: 0.5, changefreq: 'monthly' },
  { path: '/strategic-proposal-for-biom-innovations-pvt-ltd',                    priority: 0.5, changefreq: 'monthly' },
  { path: '/brand-assessment',                                                    priority: 0.5, changefreq: 'monthly' },
  { path: '/service-deck',                                                        priority: 0.5, changefreq: 'monthly' },
  { path: '/growth-partner-briefing',                                             priority: 0.5, changefreq: 'monthly' },
  { path: '/kalanikethan-brand-creation-proposal',                                priority: 0.5, changefreq: 'monthly' },
  { path: '/stremedy-proposal',                                                   priority: 0.5, changefreq: 'monthly' },
  { path: '/annual-advisory-programme',                                           priority: 0.5, changefreq: 'monthly' },
  { path: '/nirva-franchise-proposal',                                            priority: 0.5, changefreq: 'monthly' },
  { path: '/tungabhadra-warriors-proposal',                                       priority: 0.5, changefreq: 'monthly' },
  { path: '/siyara-brand-identity',                                               priority: 0.5, changefreq: 'monthly' },
  { path: '/services-internal-document',                                          priority: 0.5, changefreq: 'monthly' },
  { path: '/presentation',                                                        priority: 0.5, changefreq: 'monthly' },


  // ── DYNAMIC PAGES — Add individual slugs here when published ──
  // Blog posts  → /blog/your-post-slug
  // Case studies → /case-studies/your-case-slug
  // Newsletters  → /your-newsletter-slug
  //
  // Example:
  // { path: '/blog/what-is-brand-positioning',       priority: 0.8, changefreq: 'yearly' },
  // { path: '/blog/how-to-register-trademark-india', priority: 0.7, changefreq: 'yearly' },
  // { path: '/case-studies/tdh-group',               priority: 0.8, changefreq: 'yearly' },

];


// ─────────────────────────────────────────────
// GENERATE sitemap.xml
// ─────────────────────────────────────────────
function generateSitemap(routes) {
  const urlEntries = routes
    .map(({ path, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>
`;
}

// ─────────────────────────────────────────────
// GENERATE robots.txt
// Allow everything — all pages are indexed
// ─────────────────────────────────────────────
function generateRobots() {
  return `# robots.txt — Magsmen Brand Consultants
# Generated: ${TODAY}

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml
`;
}

// ─────────────────────────────────────────────
// WRITE FILES
// ─────────────────────────────────────────────
function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, generateSitemap(ALL_ROUTES), 'utf8');
  console.log(`✅ sitemap.xml → ${sitemapPath}`);
  console.log(`   Total pages indexed: ${ALL_ROUTES.length}`);

  const robotsPath = path.join(OUTPUT_DIR, 'robots.txt');
  fs.writeFileSync(robotsPath, generateRobots(), 'utf8');
  console.log(`✅ robots.txt  → ${robotsPath}`);

  console.log('\n📋 Next steps:');
  console.log('   1. Run: node generate-sitemap.js');
  console.log('   2. Deploy — /public/sitemap.xml and /public/robots.txt go live');
  console.log('   3. Google Search Console → Sitemaps → Submit:');
  console.log('      https://www.magsmen.com/sitemap.xml');
  console.log('\n🔁 Re-run this script every time you add a new page or blog post.');
}

main();






// const { SitemapStream, streamToPromise } = require("sitemap");
// const { createWriteStream } = require("fs");

// const BASE_URL = "https://magsmen.com/"; 

// const routes = [
//   "/",
//   "/about",
//   "/expertise",
//   "/case-studies",
//   "/brand-audit",
//   "/insights",
//   "/careers",
//   "/partner-with-us",
//   "/contact",
//   "/brand-consulting",
//   "/personal-brand-consulting",
//   "/image-consulting",
//   "/corporate-rebranding",
//   "/brand-expresso",
//   "/brand-creation",
//   "/link-fluence",
//   "/launchpad",
//   "/workdetails",
//   "/media",
//   "/faqs",
//   "/privacy-policy",

//   // Campaign / Audit pages
//   "/andhra-pradesh-aviation-network",
//   "/brand-audit-sreenidhi-global-school",
//   "/brand-audit-sri-sai-rma-high-school",
//   "/brand-audit-magsmen",
//   "/brand-audit-delhi-world-school",
//   "/brand-health-infographic-delhi-world-school",
//   "/infinite-andhra-strategic-tourism-blueprint",
//   "/sowmya-feeds",
//   "/tdh-x-pure-o-natural",
//   "/tdh-protien-dashboard",
//   "/tdh-product-communication-analysis",
//   "/tdh-group-strategic-dashboard",
//   "/tdh-content-calendar-jan-2026",
//   "/wealth-management-landscape"
// ];

// const sitemap = new SitemapStream({ hostname: BASE_URL });
// const writeStream = createWriteStream("./public/sitemap.xml");

// sitemap.pipe(writeStream);

// routes.forEach(route => {
//   sitemap.write({
//     url: route,
//     changefreq: "weekly",
//     priority: route === "/" ? 1.0 : 0.8
//   });
// });

// sitemap.end();

// streamToPromise(sitemap)
//   .then(() => console.log("✅ sitemap.xml generated successfully"))
//   .catch(console.error);
