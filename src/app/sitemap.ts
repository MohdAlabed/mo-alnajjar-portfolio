import { MetadataRoute } from "next";
import { getProjectSitemapData } from "@/services/project/getProjectSitemapData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohammedalnajjar.site";

  // Static Routes (Homepage)
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-30"),
    },
    //resume route
    {
      url: `${baseUrl}/docs/mohammed-alnajjar-resume.pdf`,
      lastModified: new Date("2026-05-21"),
    },
  ];

  // Dynamic Routes (Projects)
  // Fetch all projects to generate a URL for each one
  const projectData = getProjectSitemapData();

  const projectRoutes: MetadataRoute.Sitemap = projectData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified,
  }));

  // Merge the static homepage and dynamic project pages
  return [...routes, ...projectRoutes];
}