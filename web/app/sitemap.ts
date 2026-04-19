import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/tiers";
import { MANUALES } from "@/lib/manuales";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/anatomia", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/precios", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/trabajos", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/glosario", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/sobre", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacidad", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/aviso-legal", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/condiciones", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const manualRoutes = MANUALES.filter((m) => m.showDetail).map((m) => ({
    url: `${SITE_URL}/trabajos/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...manualRoutes,
    ...blogRoutes,
  ];
}
