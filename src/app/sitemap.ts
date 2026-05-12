import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * Site map for search engines. The site is currently a single landing page
 * with on-page anchors, so we emit one canonical entry. Add new entries
 * here as additional routes are introduced.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
