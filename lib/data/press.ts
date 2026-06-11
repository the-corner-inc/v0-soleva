import type { Locale } from "@/lib/i18n/config"

export interface PressItem {
  outlet: string
  type: Record<Locale, string>
  date: string
  lang: "FR" | "DE" | "IT"
  /** Optional link to the article or report. // TODO: add real URLs from client. */
  url?: string
}

// Media coverage of Soleva.
export const pressItems: PressItem[] = [
  {
    outlet: "RTS 19h30",
    type: { fr: "TV nationale", en: "National TV", de: "Nationales TV", it: "TV nazionale" },
    date: "23.06.2024",
    lang: "FR",
  },
  {
    outlet: "SRF Schweiz Aktuell",
    type: { fr: "TV nationale", en: "National TV", de: "Nationales TV", it: "TV nazionale" },
    date: "29.08.2024",
    lang: "DE",
  },
  {
    outlet: "RSI Telegiornale",
    type: { fr: "TV nationale", en: "National TV", de: "Nationales TV", it: "TV nazionale" },
    date: "13.07.2024",
    lang: "IT",
  },
  {
    outlet: "24Heures",
    type: { fr: "Presse écrite", en: "Print press", de: "Printpresse", it: "Stampa" },
    date: "12.06.2024",
    lang: "FR",
  },
  {
    outlet: "Télé Vaud-Fribourg",
    type: { fr: "TV régionale", en: "Regional TV", de: "Regionales TV", it: "TV regionale" },
    date: "06.04.2022",
    lang: "FR",
  },
  {
    outlet: "RTS Radio Matinale",
    type: { fr: "Radio nationale", en: "National radio", de: "Nationales Radio", it: "Radio nazionale" },
    date: "24.06.2022",
    lang: "FR",
  },
  {
    outlet: "Rouge FM",
    type: { fr: "Radio", en: "Radio", de: "Radio", it: "Radio" },
    date: "30.06.2022",
    lang: "FR",
  },
  {
    outlet: "LFM",
    type: { fr: "Radio", en: "Radio", de: "Radio", it: "Radio" },
    date: "06.03.2022",
    lang: "FR",
  },
  {
    outlet: "La Côte",
    type: { fr: "Presse écrite", en: "Print press", de: "Printpresse", it: "Stampa" },
    date: "01.03.2022",
    lang: "FR",
  },
]
