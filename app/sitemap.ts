import { SITE_URL } from "@/lib/constants"
import { services } from "@/lib/data/services"
import { locales } from "@/lib/i18n/config"
import type { MetadataRoute } from "next"

const staticPaths = [
  "",
  "/le-van",
  "/a-propos",
  "/impact",
  "/voyage",
  "/soutenir",
  "/faq",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((alt) => [alt, `${SITE_URL}/${alt}${path}`])),
        },
      })
    }
    for (const service of services) {
      const path = `/le-van/${service.slug}`
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(locales.map((alt) => [alt, `${SITE_URL}/${alt}${path}`])),
        },
      })
    }
  }

  return entries
}
