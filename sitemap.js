const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const BASE_URL = "https://magsmen.com/"; 

const routes = [
  "/",
  "/about",
  "/expertise",
  "/case-studies",
  "/brand-audit",
  "/insights",
  "/careers",
  "/partner-with-us",
  "/contact",
  "/brand-consulting",
  "/personal-brand-consulting",
  "/image-consulting",
  "/corporate-rebranding",
  "/brand-expresso",
  "/brand-creation",
  "/link-fluence",
  "/launchpad",
  "/workdetails",
  "/media",
  "/faqs",
  "/privacy-policy",

  // Campaign / Audit pages
  "/andhra-pradesh-aviation-network",
  "/brand-audit-sreenidhi-global-school",
  "/brand-audit-sri-sai-rma-high-school",
  "/brand-audit-magsmen",
  "/brand-audit-delhi-world-school",
  "/brand-health-infographic-delhi-world-school",
  "/infinite-andhra-strategic-tourism-blueprint",
  "/sowmya-feeds",
  "/tdh-x-pure-o-natural",
  "/tdh-protien-dashboard",
  "/tdh-product-communication-analysis",
  "/tdh-group-strategic-dashboard",
  "/tdh-content-calendar-jan-2026",
  "/wealth-management-landscape"
];

const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

routes.forEach(route => {
  sitemap.write({
    url: route,
    changefreq: "weekly",
    priority: route === "/" ? 1.0 : 0.8
  });
});

sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log("✅ sitemap.xml generated successfully"))
  .catch(console.error);
