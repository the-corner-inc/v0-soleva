import type { Locale } from "@/lib/i18n/config"

export type NavItem = {
  key: string
  href: string
}

// Paths are locale-agnostic; the locale prefix is added at render time.
export const mainNav: NavItem[] = [
  { key: "home", href: "/" },
  { key: "van", href: "/le-van" },
  { key: "about", href: "/a-propos" },
  { key: "impact", href: "/impact" },
  { key: "voyage", href: "/voyage" },
  { key: "support", href: "/soutenir" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
]

export const vanPillars = [
  { key: "solar", href: "/le-van/energie-solaire" },
  { key: "electric", href: "/le-van/motorisation-electrique" },
  { key: "habitat", href: "/le-van/habitat-autonome" },
]

export function withLocale(locale: Locale, href: string): string {
  if (href === "/") return `/${locale}`
  return `/${locale}${href}`
}
