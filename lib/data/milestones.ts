import type { Locale } from "@/lib/i18n/config"

export type Milestone = {
  year: string
  title: Record<Locale, string>
  description: Record<Locale, string>
  status: "done" | "current" | "upcoming"
}

export const milestones: Milestone[] = [
  {
    year: "2022",
    status: "done",
    title: {
      fr: "Naissance de l'idée",
      en: "The idea is born",
      de: "Die Idee entsteht",
      it: "Nasce l'idea",
    },
    description: {
      fr: "Un constat simple : voyager autrement, sans dépendre des énergies fossiles. Les premières esquisses d'un van 100 % solaire prennent forme.",
      en: "A simple observation: to travel differently, without depending on fossil fuels. The first sketches of a 100% solar van take shape.",
      de: "Eine einfache Erkenntnis: anders reisen, ohne von fossilen Energien abhängig zu sein. Die ersten Skizzen eines 100 % solarbetriebenen Vans entstehen.",
      it: "Una semplice constatazione: viaggiare in modo diverso, senza dipendere dai combustibili fossili. Prendono forma i primi schizzi di un van 100% solare.",
    },
  },
  {
    year: "2023",
    status: "done",
    title: {
      fr: "Étude de faisabilité",
      en: "Feasibility study",
      de: "Machbarkeitsstudie",
      it: "Studio di fattibilità",
    },
    description: {
      fr: "Calculs énergétiques, choix des composants et validation technique du concept avec des ingénieurs partenaires.",
      en: "Energy calculations, component selection and technical validation of the concept with partner engineers.",
      de: "Energieberechnungen, Komponentenauswahl und technische Validierung des Konzepts mit Partneringenieuren.",
      it: "Calcoli energetici, scelta dei componenti e validazione tecnica del concetto con ingegneri partner.",
    },
  },
  {
    year: "2024",
    status: "current",
    title: {
      fr: "Construction du prototype",
      en: "Building the prototype",
      de: "Bau des Prototyps",
      it: "Costruzione del prototipo",
    },
    description: {
      fr: "Assemblage de la motorisation électrique, intégration des panneaux solaires et aménagement de l'habitacle. La phase la plus intense du projet.",
      en: "Assembling the electric drivetrain, integrating the solar panels and fitting out the living space. The most intense phase of the project.",
      de: "Montage des Elektroantriebs, Integration der Solarpaneele und Ausbau des Wohnraums. Die intensivste Phase des Projekts.",
      it: "Assemblaggio della motorizzazione elettrica, integrazione dei pannelli solari e allestimento dell'abitacolo. La fase più intensa del progetto.",
    },
  },
  {
    year: "2025",
    status: "upcoming",
    title: {
      fr: "Premiers essais routiers",
      en: "First road tests",
      de: "Erste Fahrtests",
      it: "Primi test su strada",
    },
    description: {
      fr: "Tests grandeur nature sur les routes suisses pour mesurer l'autonomie réelle et affiner chaque réglage avant le grand départ.",
      en: "Full-scale tests on Swiss roads to measure real range and fine-tune every setting before the big departure.",
      de: "Tests in voller Größe auf Schweizer Straßen, um die echte Reichweite zu messen und jede Einstellung vor der großen Abfahrt zu optimieren.",
      it: "Test in scala reale sulle strade svizzere per misurare l'autonomia reale e perfezionare ogni regolazione prima della grande partenza.",
    },
  },
  {
    year: "2026",
    status: "upcoming",
    title: {
      fr: "Le grand voyage",
      en: "The great journey",
      de: "Die große Reise",
      it: "Il grande viaggio",
    },
    description: {
      fr: "Départ pour un périple à travers l'Europe, alimenté uniquement par le soleil. Un témoignage vivant qu'une autre mobilité est possible.",
      en: "Departure for a journey across Europe, powered solely by the sun. Living proof that another kind of mobility is possible.",
      de: "Aufbruch zu einer Reise durch Europa, angetrieben allein von der Sonne. Ein lebendiger Beweis, dass eine andere Mobilität möglich ist.",
      it: "Partenza per un viaggio attraverso l'Europa, alimentato unicamente dal sole. Una testimonianza vivente che un'altra mobilità è possibile.",
    },
  },
]
