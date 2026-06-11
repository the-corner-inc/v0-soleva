import type { Locale } from "@/lib/i18n/config"

export interface TeamMember {
  name: string
  /** Initials used for the avatar placeholder. */
  initials: string
  role: Record<Locale, string>
  email?: string
  linkedin?: string
}

// Core team. // TODO: LinkedIn URLs to be confirmed by Soleva.
export const teamMembers: TeamMember[] = [
  {
    name: "Curdin Wüthrich",
    initials: "CW",
    role: {
      fr: "CEO et co-fondateur",
      en: "CEO and co-founder",
      de: "CEO und Mitgründer",
      it: "CEO e co-fondatore",
    },
    email: "curdin.wuethrich@soleva.org",
  },
  {
    name: "Matthieu Bourgois",
    initials: "MB",
    role: {
      fr: "CTO, co-fondateur, intégration mécanique",
      en: "CTO, co-founder, mechanical integration",
      de: "CTO, Mitgründer, mechanische Integration",
      it: "CTO, co-fondatore, integrazione meccanica",
    },
    email: "matthieu.bourgois@soleva.org",
  },
  {
    name: "Max Chevron",
    initials: "MC",
    role: {
      fr: "Trésorier, gestion batteries",
      en: "Treasurer, battery management",
      de: "Schatzmeister, Batteriemanagement",
      it: "Tesoriere, gestione batterie",
    },
    email: "max.chevron@soleva.org",
  },
  {
    name: "Tobia Wyss",
    initials: "TW",
    role: {
      fr: "Co-fondateur, intégration solaire",
      en: "Co-founder, solar integration",
      de: "Mitgründer, Solarintegration",
      it: "Co-fondatore, integrazione solare",
    },
    email: "tobia.wyss@soleva.org",
  },
  {
    name: "Sara Bossuyt",
    initials: "SB",
    role: {
      fr: "Co-fondatrice, communication et habitat",
      en: "Co-founder, communication and habitat",
      de: "Mitgründerin, Kommunikation und Wohnraum",
      it: "Co-fondatrice, comunicazione e habitat",
    },
    email: "sara.bossuyt@soleva.org",
  },
  {
    name: "Sévane Bercher",
    initials: "SB",
    role: {
      fr: "Co-fondatrice, juridique",
      en: "Co-founder, legal",
      de: "Mitgründerin, Recht",
      it: "Co-fondatrice, ambito giuridico",
    },
    email: "sevane.bercher@soleva.org",
  },
  {
    name: "Lucanaël Kopf",
    initials: "LK",
    role: {
      fr: "Chef de projet intégration mécanique",
      en: "Mechanical integration project lead",
      de: "Projektleiter mechanische Integration",
      it: "Responsabile progetto integrazione meccanica",
    },
  },
  {
    name: "Roman Schmitz",
    initials: "RS",
    role: {
      fr: "Chef de projet électrification",
      en: "Electrification project lead",
      de: "Projektleiter Elektrifizierung",
      it: "Responsabile progetto elettrificazione",
    },
    email: "roman.schmitz@soleva.org",
  },
  {
    name: "Nicola Offeddu",
    initials: "NO",
    role: {
      fr: "Construction habitat durable",
      en: "Sustainable habitat construction",
      de: "Bau nachhaltiger Wohnraum",
      it: "Costruzione habitat sostenibile",
    },
  },
]

export interface Mentor {
  name: string
  initials: string
  role: Record<Locale, string>
}

// Mentors and external advisors.
export const mentors: Mentor[] = [
  {
    name: "Marc Müller",
    initials: "MM",
    role: {
      fr: "Fondateur ICARE et Impact Living",
      en: "Founder of ICARE and Impact Living",
      de: "Gründer von ICARE und Impact Living",
      it: "Fondatore di ICARE e Impact Living",
    },
  },
  {
    name: "André Hodder",
    initials: "AH",
    role: {
      fr: "Enseignant-chercheur EPFL, moteurs électriques",
      en: "EPFL lecturer-researcher, electric motors",
      de: "EPFL Dozent und Forscher, Elektromotoren",
      it: "Docente-ricercatore EPFL, motori elettrici",
    },
  },
  {
    name: "Louis Palmer",
    initials: "LP",
    role: {
      fr: "Fondateur SolarTaxi, SolarButterfly et WAVE",
      en: "Founder of SolarTaxi, SolarButterfly and WAVE",
      de: "Gründer von SolarTaxi, SolarButterfly und WAVE",
      it: "Fondatore di SolarTaxi, SolarButterfly e WAVE",
    },
  },
  {
    name: "Prof. Dr. Werner Stednitz",
    initials: "WS",
    role: {
      fr: "HTW Berlin, Concepts Automobiles Avancés",
      en: "HTW Berlin, Advanced Automotive Concepts",
      de: "HTW Berlin, Advanced Automotive Concepts",
      it: "HTW Berlin, Concetti Automobilistici Avanzati",
    },
  },
]
