import type { Locale } from "@/lib/i18n/config"

export interface PastEvent {
  title: Record<Locale, string>
  location: string
  date: string
}

// Past events Soleva took part in.
export const pastEvents: PastEvent[] = [
  {
    title: {
      fr: "Avant-première du documentaire",
      en: "Documentary preview",
      de: "Dokumentarfilm-Vorpremiere",
      it: "Anteprima del documentario",
    },
    location: "Lausanne",
    date: "04.10.2024",
  },
  {
    title: {
      fr: "Vanlife Expo Grenoble (« Coup de cœur »)",
      en: "Vanlife Expo Grenoble (\u201cCoup de c\u0153ur\u201d)",
      de: "Vanlife Expo Grenoble (\u201eCoup de c\u0153ur\u201c)",
      it: "Vanlife Expo Grenoble (\u00abCoup de c\u0153ur\u00bb)",
    },
    location: "Grenoble",
    date: "04-05.05.2024",
  },
  {
    title: {
      fr: "Congrès photovoltaïque Suisse",
      en: "Swiss Photovoltaic Congress",
      de: "Schweizer Photovoltaik-Kongress",
      it: "Congresso fotovoltaico svizzero",
    },
    location: "Suisse",
    date: "03.2024",
  },
  {
    title: {
      fr: "Roadtrip Expo",
      en: "Roadtrip Expo",
      de: "Roadtrip Expo",
      it: "Roadtrip Expo",
    },
    location: "Suisse",
    date: "11.2023",
  },
]

// Polar Steps trip tracking. // TODO: confirm exact public URL with the client.
export const POLAR_STEPS_URL = "https://www.polarsteps.com/Soleva"
