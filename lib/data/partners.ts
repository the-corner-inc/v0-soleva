import type { Locale } from "@/lib/i18n/config"

export type PartnerCategory = "technical" | "institutional" | "award"

export interface Partner {
  name: string
  category: PartnerCategory
  /** Optional external link. // TODO: confirm authorization with client. */
  url?: string
}

export const partnerCategoryLabels: Record<PartnerCategory, Record<Locale, string>> = {
  technical: {
    fr: "Partenaires techniques",
    en: "Technical partners",
    de: "Technische Partner",
    it: "Partner tecnici",
  },
  institutional: {
    fr: "Soutiens institutionnels",
    en: "Institutional support",
    de: "Institutionelle Unterstützung",
    it: "Sostegno istituzionale",
  },
  award: {
    fr: "Prix",
    en: "Awards",
    de: "Preise",
    it: "Premi",
  },
}

// Partners and supporters. // TODO: logo usage to be confirmed with the client.
export const partners: Partner[] = [
  { name: "CSEM", category: "technical" },
  { name: "EPFL PV-Lab", category: "technical" },
  { name: "Studer Innotec", category: "technical" },
  { name: "BRUSA HyPower", category: "technical" },
  { name: "Canton de Vaud", category: "institutional" },
  { name: "Services industriels de Lausanne (SiL)", category: "institutional" },
  { name: "Energy Lab Winner 2022", category: "award" },
]
