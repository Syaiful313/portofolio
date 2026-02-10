/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://muhammad-syaiful.site",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/icon.*", "/apple-icon.*", "/manifest.json"],
};

module.exports = config;
