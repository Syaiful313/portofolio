/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://muhammad-syaiful.site",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/icon.*", "/apple-icon.*", "/manifest.json"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://muhammad-syaiful.site/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Homepage mendapat priority tertinggi
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Halaman portofolio detail
    if (path.startsWith("/portfolios/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Halaman contact
    if (path === "/contact") {
      return {
        loc: path,
        changefreq: "yearly",
        priority: 0.5,
        lastmod: new Date().toISOString(),
      };
    }

    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
