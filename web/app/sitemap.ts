import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/tiers";
import { MANUALES } from "@/lib/manuales";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/precios", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/manuales", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/sobre", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contacto", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacidad", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/aviso-legal", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/condiciones", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const manualRoutes = MANUALES.map((m) => ({
    url: `${SITE_URL}/manuales/${m.slug}`,
    lastModified: now,
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
  ];
}
