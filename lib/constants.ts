// src/lib/constants.ts — adapted to Soleva
// IMPORTANT: Many values below are placeholders pending client validation.

export const SITE_URL = "https://soleva.org"
export const SITE_NAME = "Soleva"

// CTAs point to the internal /contact page. No external booking URL.
export const CTA_DESTINATION = "/contact"

export const CONTACT = {
  businessName: "Soleva",
  fullName: "ASSOCIATION SOLEVA",
  phone: "+41 77 420 74 40",
  email: "info@soleva.org",
  ceoEmail: "curdin.wuethrich@soleva.org",
  address: {
    street: "Rue de Lausanne 64",
    zip: "1020",
    city: "Renens VD",
    canton: "Vaud",
    country: "Suisse",
  },
  geo: {
    latitude: 46.5354, // Renens
    longitude: 6.5886,
  },
  legalForm: "Association",
  IDE: "",
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
// NOTE: Les images CDN ci-dessous proviennent de l'ancien site soleva.org.
// Elles appartiennent à l'association Soleva, hébergées via Megaphone (CMS).
// En cas de migration définitive, sauvegarder ces images localement.
const CDN = "https://d1oh1gq3c6bbc1.cloudfront.net/public/media"

export const IMAGES = {
  hero: `${CDN}/924d6de5ce617b442f6c2f63d19b7989050b3d90da4962331d06a231ed114aac-253515.webp`, // poster fallback
  heroVideo: `${CDN}/c36b888c8ee4a4d1721678ae2c456e77261fb0d8401fc6bc71defaf40f97359f-210817.mp4`,
  vanExterior: `${CDN}/0c25eb235de11ea7ea6882a92a1be45af9792b5b06364fef9f67bd3ce479abdc-253506.webp`,
  vanInterior: `${CDN}/cf70c433d0b51b1e80e9106c0079c147aa33bcdbc4b57e2adc1a45b7e6a53661-253537.webp`,
  solarPanels: `${CDN}/b3b39fd6338afdf093d627f0bda0414de11bc57547733870aa031a6f55c4a5d3-253538.webp`,
  conversion: `${CDN}/0c25eb235de11ea7ea6882a92a1be45af9792b5b06364fef9f67bd3ce479abdc-253506.webp`,
  habitat: `${CDN}/bc751116783ee39eaa53d9cf322d39d9aa4b83d2dcea8846b58d214ddd987f7d-253525.webp`,
  // Habitat page — authentic Soleva photography scraped from soleva.org/fr/habitat
  habitatHero: `${CDN}/898d61cbe305b72fe571dfb0c04a518937eb0336ed9dae191dad6d87339a439e-218430.webp`, // "Slide habitat" — wide lifestyle shot
  habitatInterior: `${CDN}/a11d3c70db24714d9c22e0eaa6617cd7520e15d4e136782c4df4ce42e07995f3-211108.webp`, // interior living space
  habitatFeatures: `${CDN}/487b8f2c1b90b50be87695357ac21b616c60b2c19866629916cef0464ef3b851-114045.webp`, // recycled habitat features cutaway
  team: `${CDN}/a9b7ac5c4c9475c0a2ce9777901af80b920edd004c0233860556949860063a10-253524.webp`,
  workshop: `${CDN}/e1b7ba6455ef46728af5ef2edc5e77708387b64b6341d4ecdb9f85fafe1cc5c5-253532.webp`,
  journey: `${CDN}/9e0680890378ac823246e9b28d3644ec219d580eddda979567bd90f49a8c3ca9-253536.webp`,
  impact: `${CDN}/03a80fd974e2aa6bd1bfc68210fca8e79d1c035f080822256bbd81941b1c311a-105379.webp`,
  support: `${CDN}/e1b7ba6455ef46728af5ef2edc5e77708387b64b6341d4ecdb9f85fafe1cc5c5-253532.webp`,
  newVanDesign: `${CDN}/976854c1e2dffa9c530172771425f9e6c552a00d1d2304631b86fb8254f12553-253513.webp`,
} as const

// Partner logos from old site CDN
export const PARTNER_LOGOS = {
  csem: `${CDN}/bf17ab9475d7739980263ef29b5f777904c9c39b40a7a7ee8d4dca5cbb0bc5fe-106051.webp`,
  epfl: `${CDN}/298c309e1c199691a8d3258e3d1a01a864de0527a473aa9c37904cc4089a374e-106055.webp`,
  studer: `${CDN}/772ebb17f2adeb0a9df547331958314a1aafc125f9079a114411032e753d4532-109665.webp`,
  brusa: `${CDN}/7def6334d55e65fadeb7373e3a93d8c49b5e8c284b9212310ece3d1d4de8cece-211086.webp`,
  cantonVaud: `${CDN}/6dcd58f354b2eef466c4c9c6033638c363dfd0d2973c05c200fa6752e6e6def0-106057.webp`,
  sil: `${CDN}/1b28fe959e95e9f9f4d47395db3b1dc4595e85fc8bc642f7a95c1cd12998b4f1-164373.webp`,
  energyLab: `${CDN}/ed279b9f5c738148b91c7b5e5ae86c68a6bc8a3b1a32f7a00cb2599186507701-106061.webp`,
} as const

// Team member photos from old site CDN
export const TEAM_PHOTOS: Record<string, string> = {
  "Curdin Wüthrich": `${CDN}/17cd95541f5c998cf52b4fa219a6164662ca7bbd5c90f7f21cdec6e441d007c5-253527.webp`,
  "Matthieu Bourgois": `${CDN}/9c0dc76fb9bd3dedc127d336ef9694145f99ed07d153a56505e2159c4998e570-253528.webp`,
  "Max Chevron": `${CDN}/9d380b882992955cd94dfb29e11af2f9b34a1db9e03a729b0f91c50116b0d387-253531.webp`,
  "Tobia Wyss": `${CDN}/925534184778a1da2925c7b043ba91875e0f9dbfba91e2fadf851bcfdce439af-114113.webp`,
  "Sara Bossuyt": `${CDN}/c5486a693f3de77f04447ba85b519db5ebf1c29c774712d9be52d3ac8a994f96-114114.webp`,
  "Sévane Bercher": `${CDN}/eface31f920c5c8049b0bdc4c019ab1c2aa30209d4c9c8f14ea59076b98ea317-253530.webp`,
  "Lucanaël Kopf": `${CDN}/8adca1ba9428d8d437df31a8d9f1a6f25c27ba8d0358302a4d7e2490412d20f8-111683.webp`,
  "Roman Schmitz": `${CDN}/0d9d3583409121e90dada93e39e0a561b74ecd4b30b7e4565ad0cafbc6a3a53c-105380.webp`,
  "Nicola Offeddu": `${CDN}/5f83d158a75f8fc7bb3c4115256eb4a1467db243871de3212269803e0a2feb56-253526.webp`,
}

// Mentor photos
export const MENTOR_PHOTOS: Record<string, string> = {
  "Marc Müller": `${CDN}/e14237528e66ff2f6544059475119ab492c78bfcccc8bcba8a273d736186b4a0-253533.webp`,
  "André Hodder": `${CDN}/afeedf6a81892283d5fb49f797fa17466c18b99daaf557327586514e2831dd5a-105350.webp`,
  "Louis Palmer": `${CDN}/292bf148783e29387a05bfba13d9afbb2460c5bf2ddadf40e632bddf8a4e74b0-92361.jpg`,
  "Prof. Dr. Werner Stednitz": `${CDN}/24fd70b44a5355cfaaa63dc9bed0f470d0bce3baf1c1d23fdf59d281c4755248-92065.png`,
}

// Press/media logos
export const PRESS_LOGOS: Record<string, string> = {
  "RTS 19h30": `${CDN}/edba9eb25f32109f73d77a8076911347c6b82d68ea102bc00b11e04e6a1f2e43-210822.webp`,
  "SRF Schweiz Aktuell": `${CDN}/58299ad9eeb3c42a6026b66b9e3b393afd0a6880078169f937e5c266cf29fa4d-210821.webp`,
  "RSI Telegiornale": `${CDN}/58299ad9eeb3c42a6026b66b9e3b393afd0a6880078169f937e5c266cf29fa4d-210821.webp`, // placeholder
  "24Heures": `${CDN}/441fe2b61a85020717f4b5216b46902695e62ab31fe77f5338d515fdf8c3a687-111685.webp`,
  "Télé Vaud-Fribourg": `${CDN}/936a59247b49b018085d860ff2630135a6136fddbadd643fe5835280495d1ec8-96313.png`,
  "RTS Radio Matinale": `${CDN}/9d4e0219cce04dd1f9406dca72bd8024f6f595643417ff71f799a725c8f3dcaf-97976.jpg`,
  "Rouge FM": `${CDN}/d25df50a64d8500051ead94bd2258665fae74edd51938578ec8a6e6e21170b56-96421.png`,
  "LFM": `${CDN}/33278c8aaf209cec25d372cc85bb9cde7e6687b176bf91d48a4b246e05680977-96311.png`,
  "La Côte": `${CDN}/3433cf1964a0068ae94dcee45063ea55f5c2c190f6a3240df2d26a7e61a0aacc-97977.jpg`,
}

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

export const DONATION = {
  beneficiary: "ASSOCIATION SOLEVA",
  addressLine1: "Rue de Lausanne 64",
  addressLine2: "1020 Renens VD",
  iban: "CH3600767000L55322287",
  ibanFormatted: "CH36 0076 7000 L553 2228 7",
  bic: "BCVLCH2LXXX",
  bank: "Banque Cantonale Vaudoise",
  reference: "Donation au projet Soleva",
} as const

export const HOSTING = {
  provider: "The Corner Factory SA",
  server: "Serveur VPS Infomaniak, Suisse",
} as const
