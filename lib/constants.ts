// src/lib/constants.ts — adapted to Soleva
// IMPORTANT: Many values below are placeholders pending client validation.

export const SITE_URL = "https://soleva.org"
export const SITE_NAME = "Soleva"

// CTAs point to the internal /contact page. No external booking URL.
export const CTA_DESTINATION = "/contact"

export const CONTACT = {
  businessName: "Association Soleva",
  fullName: "Soleva — The Solar Electric Van",
  phone: "+41 77 420 74 40",
  phoneHref: "+41774207440",
  email: "info@soleva.org",
  ceoEmail: "curdin.wuethrich@soleva.org",
  address: {
    street: "Rue de Lausanne 64",
    zip: "1020",
    city: "Renens",
    canton: "Vaud",
    country: "Suisse",
  },
  geo: {
    latitude: 46.5388, // Renens VD approximate
    longitude: 6.5878,
  },
  legalForm: "Association",
  IDE: "", // TODO: Confirm if registered in commercial register
} as const

// Bank details for donations (from the previous soleva.org site).
export const DONATION = {
  beneficiary: "ASSOCIATION SOLEVA",
  addressLine1: "Rue de Lausanne 64",
  addressLine2: "1020 Renens VD",
  iban: "CH3600767000L55322287",
  bic: "BCVLCH2LXXX",
  bank: "Banque Cantonale Vaudoise",
  reference: "Donation au projet Soleva",
} as const

// Hosting provider for legal mentions.
export const HOSTING = {
  provider: "The Corner Factory SA",
  server: "Serveur VPS Infomaniak, Suisse",
} as const

export const SOCIALS = {
  instagram: "https://instagram.com/soleva_solar_van",
  facebook: "https://facebook.com/solevavan",
  // TODO: Replace with the actual LinkedIn company URL.
  linkedin: "https://ch.linkedin.com/company/soleva",
  youtube: "https://youtube.com/channel/UCmw0pPduN1XgIyguDNtcv0w",
} as const

export const THE_CORNER = {
  factoriesUrl: "https://the-corner.io/portfolio/factories",
  logoUrl: "https://assets.the-corner.io/logos/the_corner-icon.png",
} as const

export const SITE = {
  // TODO: Client must provide a favicon. Using The Corner placeholder for now.
  faviconUrl: "https://assets.the-corner.io/logos/the_corner-icon.png",
} as const

// All image URLs centralized. Generated placeholders used until real photos arrive.
export const IMAGES = {
  hero: "/images/soleva-hero.png",
  vanExterior: "/images/van-exterior.png",
  vanInterior: "/images/van-interior.png",
  solarPanels: "/images/solar-panels.png",
  conversion: "/images/electric-conversion.png",
  habitat: "/images/habitat.png",
  team: "/images/team.png",
  workshop: "/images/workshop.png",
  journey: "/images/journey.png",
  impact: "/images/impact.png",
  support: "/images/support.png",
} as const

// Key figures — TODO: ALL technical figures MUST be validated by Soleva.
export const KEY_FIGURES = {
  foundedYear: 2021,
  crowdfundingAmount: "CHF 29'583",
  crowdfundingPercent: "147%",
  crowdfundingBackers: 130,
  crowdfundingGoal: "CHF 20'000",
  crowdfundingPlatform: "Wemakeit",
  crowdfundingUrl: "https://wemakeit.com/projects/soleva-solar-electric-van",
  batteryCapacity: "55 kWh",
  autonomy: "~250 km",
  solarChargePerDay: "150 km",
  carbonReduction: "80%",
  volunteers: "40+",
  communesVisited: "100+",
  vehicleOrigin: "Peugeot J9, 1987",
  solarPower: "1 350 W",
} as const

// TODO: Client must provide GA4 Measurement ID via NEXT_PUBLIC_GA_MEASUREMENT_ID.
export const COOKIE_CONSENT_KEY = "soleva-cookie-consent"
