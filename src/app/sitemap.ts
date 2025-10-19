import type { MetadataRoute } from "next";
import { projects } from "@/utils/projects";

const baseUrl = "https://muhammad-syaiful.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portfolios/${project.id}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
