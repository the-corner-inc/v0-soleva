import type { Locale } from "@/lib/i18n/config"

export type Milestone = {
  year: string
  title: Record<Locale, string>
  description: Record<Locale, string>
  status: "done" | "current" | "upcoming"
}

export const milestones: Milestone[] = [
  {
    year: "2021",
    status: "done",
    title: {
      fr: "Fondation",
      en: "Founding",
      de: "Gründung",
      it: "Fondazione",
    },
    description: {
      fr: "Curdin Wüthrich et quatre amis créent l'association Soleva à Renens, avec une idée simple : voyager autrement, sans dépendre des énergies fossiles.",
      en: "Curdin Wüthrich and four friends create the Soleva association in Renens, with a simple idea: to travel differently, without depending on fossil fuels.",
      de: "Curdin Wüthrich und vier Freunde gründen den Verein Soleva in Renens, mit einer einfachen Idee: anders reisen, ohne von fossilen Energien abhängig zu sein.",
      it: "Curdin Wüthrich e quattro amici fondano l'associazione Soleva a Renens, con un'idea semplice: viaggiare in modo diverso, senza dipendere dai combustibili fossili.",
    },
  },
  {
    year: "2022",
    status: "done",
    title: {
      fr: "Crowdfunding et début de construction",
      en: "Crowdfunding and start of construction",
      de: "Crowdfunding und Baubeginn",
      it: "Crowdfunding e inizio della costruzione",
    },
    description: {
      fr: "CHF 29'583 récoltés via Wemakeit (147%, 130 contributeurs). Début de la construction du premier prototype « Sunny ».",
      en: "CHF 29,583 raised via Wemakeit (147%, 130 backers). Construction of the first prototype \u201cSunny\u201d begins.",
      de: "CHF 29'583 über Wemakeit gesammelt (147%, 130 Unterstützer). Beginn des Baus des ersten Prototyps \u201eSunny\u201c.",
      it: "CHF 29'583 raccolti tramite Wemakeit (147%, 130 sostenitori). Inizia la costruzione del primo prototipo \u00abSunny\u00bb.",
    },
  },
  {
    year: "2023",
    status: "done",
    title: {
      fr: "Partenariat CSEM & EPFL PV-Lab",
      en: "CSEM & EPFL PV-Lab partnership",
      de: "Partnerschaft CSEM & EPFL PV-Lab",
      it: "Partnership CSEM & EPFL PV-Lab",
    },
    description: {
      fr: "Intégration de panneaux solaires haute performance (1 350 W). Partenariat avec BRUSA HyPower pour la chaîne énergétique.",
      en: "Integration of high-performance solar panels (1,350 W). Partnership with BRUSA HyPower for the energy chain.",
      de: "Integration von Hochleistungs-Solarmodulen (1'350 W). Partnerschaft mit BRUSA HyPower für die Energiekette.",
      it: "Integrazione di pannelli solari ad alte prestazioni (1'350 W). Partnership con BRUSA HyPower per la catena energetica.",
    },
  },
  {
    year: "2024",
    status: "done",
    title: {
      fr: "Soleva 2.0 et Tour de Suisse",
      en: "Soleva 2.0 and Tour of Switzerland",
      de: "Soleva 2.0 und Schweiz-Tour",
      it: "Soleva 2.0 e Tour della Svizzera",
    },
    description: {
      fr: "Construction communautaire (40+ bénévoles). Tour de Suisse du 15 juin au 3 août 2024, 100+ communes. Couverture RTS, SRF, RSI et 24Heures.",
      en: "Community build (40+ volunteers). Tour of Switzerland from 15 June to 3 August 2024, 100+ municipalities. Coverage by RTS, SRF, RSI and 24Heures.",
      de: "Gemeinschaftsbau (40+ Freiwillige). Schweiz-Tour vom 15. Juni bis 3. August 2024, 100+ Gemeinden. Berichterstattung von RTS, SRF, RSI und 24Heures.",
      it: "Costruzione comunitaria (40+ volontari). Tour della Svizzera dal 15 giugno al 3 agosto 2024, 100+ comuni. Copertura di RTS, SRF, RSI e 24Heures.",
    },
  },
  {
    year: "2024",
    status: "done",
    title: {
      fr: "Documentaire et prix",
      en: "Documentary and awards",
      de: "Dokumentarfilm und Preise",
      it: "Documentario e premi",
    },
    description: {
      fr: "Première du documentaire « L'aventure Soleva » à Lausanne. « Coup de cœur » du Vanlife Expo Grenoble. Energy Lab Winner 2022.",
      en: "Premiere of the documentary \u201cL'aventure Soleva\u201d in Lausanne. \u201cCoup de c\u0153ur\u201d at Vanlife Expo Grenoble. Energy Lab Winner 2022.",
      de: "Premiere des Dokumentarfilms \u201eL'aventure Soleva\u201c in Lausanne. \u201eCoup de c\u0153ur\u201c der Vanlife Expo Grenoble. Energy Lab Winner 2022.",
      it: "Prima del documentario \u00abL'aventure Soleva\u00bb a Losanna. \u00abCoup de c\u0153ur\u00bb del Vanlife Expo Grenoble. Energy Lab Winner 2022.",
    },
  },
  {
    year: "2025",
    status: "done",
    title: {
      fr: "L'incendie",
      en: "The fire",
      de: "Der Brand",
      it: "L'incendio",
    },
    description: {
      fr: "Un incendie ravage l'atelier et détruit Sunny, le premier van solaire. Les systèmes de sécurité ont fonctionné. L'équipe décide de continuer.",
      en: "A fire devastates the workshop and destroys Sunny, the first solar van. The safety systems worked. The team decides to carry on.",
      de: "Ein Brand verwüstet die Werkstatt und zerstört Sunny, den ersten Solarvan. Die Sicherheitssysteme funktionierten. Das Team beschliesst weiterzumachen.",
      it: "Un incendio devasta l'officina e distrugge Sunny, il primo van solare. I sistemi di sicurezza hanno funzionato. Il team decide di continuare.",
    },
  },
  {
    year: "2025-2026",
    status: "current",
    title: {
      fr: "Nouveau départ",
      en: "A fresh start",
      de: "Neuanfang",
      it: "Nuova partenza",
    },
    description: {
      fr: "Un nouveau van solaire est en préparation, porté par la communauté et les partenaires. L'aventure Soleva continue.",
      en: "A new solar van is in preparation, carried by the community and partners. The Soleva adventure continues.",
      de: "Ein neuer Solarvan ist in Vorbereitung, getragen von der Gemeinschaft und den Partnern. Das Soleva-Abenteuer geht weiter.",
      it: "Un nuovo van solare è in preparazione, sostenuto dalla comunità e dai partner. L'avventura Soleva continua.",
    },
  },
]
