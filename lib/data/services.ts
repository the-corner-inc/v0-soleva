import { Home, Sun, Zap, type LucideIcon } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import { IMAGES } from "@/lib/constants"

export interface ServiceProcessStep {
  step: number
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceContent {
  title: string
  shortTitle: string
  shortDescription: string
  fullDescription: string
  features: string[]
  process: ServiceProcessStep[]
  faqs: ServiceFAQ[]
}

export interface Service {
  slug: string
  icon: LucideIcon
  heroImage: string
  relatedServices: string[]
  seoKeywords: string[]
  content: Record<Locale, ServiceContent>
}

// IMPORTANT: All technical figures below are estimates and MUST be validated by
// Soleva before publication. // TODO: Replace with real client data where noted.
export const services: Service[] = [
  {
    slug: "conversion-electrique",
    icon: Zap,
    heroImage: IMAGES.conversion,
    relatedServices: ["systeme-solaire", "habitat"],
    seoKeywords: [
      "retrofit van électrique Suisse",
      "conversion électrique camper van",
      "Peugeot J9 électrique",
      "retrofit véhicule solaire",
    ],
    content: {
      fr: {
        title: "Conversion électrique",
        shortTitle: "Retrofit électrique",
        shortDescription:
          "Un ancien van thermique transformé en véhicule 100% électrique grâce au retrofit.",
        fullDescription:
          "Plutôt que de produire un véhicule neuf, Soleva mise sur le retrofit : conserver un Peugeot J9 de 1987, retirer le moteur diesel et le réservoir, et intégrer une chaîne de traction électrique complète. Cette approche prolonge la durée de vie du véhicule et réduit l'impact lié à la fabrication.",
        features: [
          "Remplacement du moteur thermique par un moteur électrique (Nissan, seconde main)",
          "8 modules de batterie Volkswagen reconditionnés — 55 kWh",
          "Autonomie estimée : environ 250 km",
          "Architecture de contrôle et gestion énergétique embarquée",
          "Homologation et certification route réalisées",
          "Réduction de l'empreinte carbone de 80% vs camping-car diesel neuf",
        ],
        process: [
          { step: 1, title: "Démontage", description: "Retrait du moteur essence, du réservoir et des composants thermiques du Peugeot J9 d'origine." },
          { step: 2, title: "Intégration électrique", description: "Installation du moteur électrique, des batteries, du convertisseur et du système de gestion énergétique." },
          { step: 3, title: "Tests et sécurité", description: "Tests de sécurité électrique, calibration et vérification de l'ensemble du système." },
          { step: 4, title: "Homologation", description: "Certification route et immatriculation du véhicule converti." },
        ],
        faqs: [
          { question: "Pourquoi convertir un ancien van plutôt qu'acheter un véhicule électrique neuf ?", answer: "Le retrofit permet de réutiliser un véhicule existant, d'éviter l'impact environnemental de la fabrication d'un véhicule neuf et de prolonger la durée de vie de ressources déjà produites. C'est une approche circulaire et concrète." },
          { question: "Quelle est l'autonomie du van ?", answer: "L'autonomie estimée est d'environ 250 km grâce aux batteries, avec la possibilité de recharger via les panneaux solaires embarqués ou des bornes de recharge." },
          { question: "Le van est-il homologué pour la route ?", answer: "Oui. Le véhicule a passé les tests de sécurité électrique et a été certifié pour la circulation routière en Suisse." },
        ],
      },
      en: {
        title: "Electric conversion",
        shortTitle: "Electric retrofit",
        shortDescription:
          "An old combustion van transformed into a 100% electric vehicle through retrofit.",
        fullDescription:
          "Rather than producing a new vehicle, Soleva relies on retrofit: keeping a 1987 Peugeot J9, removing the diesel engine and tank, and integrating a complete electric powertrain. This approach extends the vehicle's lifespan and reduces the impact related to manufacturing.",
        features: [
          "Combustion engine replaced by an electric motor (Nissan, second-hand)",
          "8 refurbished Volkswagen battery modules — 55 kWh",
          "Estimated range: around 250 km",
          "On-board control architecture and energy management",
          "Road homologation and certification completed",
          "80% lower carbon footprint vs a new diesel campervan",
        ],
        process: [
          { step: 1, title: "Disassembly", description: "Removing the petrol engine, the tank and the combustion components of the original Peugeot J9." },
          { step: 2, title: "Electric integration", description: "Installing the electric motor, batteries, converter and energy management system." },
          { step: 3, title: "Tests and safety", description: "Electrical safety tests, calibration and verification of the entire system." },
          { step: 4, title: "Homologation", description: "Road certification and registration of the converted vehicle." },
        ],
        faqs: [
          { question: "Why convert an old van instead of buying a new electric vehicle?", answer: "Retrofit reuses an existing vehicle, avoids the environmental impact of manufacturing a new one and extends the life of resources already produced. It is a concrete, circular approach." },
          { question: "What is the range of the van?", answer: "The estimated range is around 250 km thanks to the batteries, with the possibility of recharging via the on-board solar panels or charging stations." },
          { question: "Is the van road-legal?", answer: "Yes. The vehicle has passed electrical safety tests and has been certified for road use in Switzerland." },
        ],
      },
      de: {
        title: "Elektroumbau",
        shortTitle: "Elektro-Retrofit",
        shortDescription:
          "Ein alter Verbrenner-Van, durch Retrofit in ein 100% elektrisches Fahrzeug verwandelt.",
        fullDescription:
          "Statt ein neues Fahrzeug zu bauen, setzt Soleva auf Retrofit: einen Peugeot J9 von 1987 behalten, den Dieselmotor und den Tank entfernen und einen kompletten elektrischen Antriebsstrang integrieren. Dieser Ansatz verlängert die Lebensdauer des Fahrzeugs und reduziert die Auswirkungen der Herstellung.",
        features: [
          "Verbrennungsmotor ersetzt durch einen Elektromotor (Nissan, gebraucht)",
          "8 aufbereitete Volkswagen-Batteriemodule — 55 kWh",
          "Geschätzte Reichweite: rund 250 km",
          "Steuerungsarchitektur und Energiemanagement an Bord",
          "Strassenzulassung und Zertifizierung abgeschlossen",
          "80% kleinerer CO₂-Fussabdruck als ein neuer Diesel-Camper",
        ],
        process: [
          { step: 1, title: "Demontage", description: "Entfernung des Benzinmotors, des Tanks und der Verbrennungskomponenten des originalen Peugeot J9." },
          { step: 2, title: "Elektrische Integration", description: "Einbau des Elektromotors, der Batterien, des Konverters und des Energiemanagementsystems." },
          { step: 3, title: "Tests und Sicherheit", description: "Elektrische Sicherheitstests, Kalibrierung und Überprüfung des gesamten Systems." },
          { step: 4, title: "Zulassung", description: "Strassenzertifizierung und Zulassung des umgebauten Fahrzeugs." },
        ],
        faqs: [
          { question: "Warum einen alten Van umbauen, statt ein neues Elektrofahrzeug zu kaufen?", answer: "Der Retrofit verwendet ein bestehendes Fahrzeug wieder, vermeidet die Umweltauswirkungen der Herstellung eines neuen und verlängert die Lebensdauer bereits produzierter Ressourcen. Ein konkreter, kreislauforientierter Ansatz." },
          { question: "Wie hoch ist die Reichweite des Vans?", answer: "Die geschätzte Reichweite liegt dank der Batterien bei rund 250 km, mit der Möglichkeit, über die Solarmodule an Bord oder Ladestationen zu laden." },
          { question: "Ist der Van strassenzugelassen?", answer: "Ja. Das Fahrzeug hat die elektrischen Sicherheitstests bestanden und wurde für den Strassenverkehr in der Schweiz zertifiziert." },
        ],
      },
      it: {
        title: "Conversione elettrica",
        shortTitle: "Retrofit elettrico",
        shortDescription:
          "Un vecchio furgone a combustione trasformato in un veicolo 100% elettrico tramite retrofit.",
        fullDescription:
          "Invece di produrre un veicolo nuovo, Soleva punta sul retrofit: mantenere un Peugeot J9 del 1987, rimuovere il motore diesel e il serbatoio e integrare una catena di trazione elettrica completa. Questo approccio prolunga la vita del veicolo e riduce l'impatto legato alla fabbricazione.",
        features: [
          "Motore a combustione sostituito da un motore elettrico (Nissan, di seconda mano)",
          "8 moduli di batteria Volkswagen ricondizionati — 55 kWh",
          "Autonomia stimata: circa 250 km",
          "Architettura di controllo e gestione energetica a bordo",
          "Omologazione e certificazione stradale completate",
          "80% in meno di impronta di carbonio rispetto a un camper diesel nuovo",
        ],
        process: [
          { step: 1, title: "Smontaggio", description: "Rimozione del motore a benzina, del serbatoio e dei componenti a combustione del Peugeot J9 originale." },
          { step: 2, title: "Integrazione elettrica", description: "Installazione del motore elettrico, delle batterie, del convertitore e del sistema di gestione energetica." },
          { step: 3, title: "Test e sicurezza", description: "Test di sicurezza elettrica, calibrazione e verifica dell'intero sistema." },
          { step: 4, title: "Omologazione", description: "Certificazione stradale e immatricolazione del veicolo convertito." },
        ],
        faqs: [
          { question: "Perché convertire un vecchio furgone invece di acquistare un veicolo elettrico nuovo?", answer: "Il retrofit riutilizza un veicolo esistente, evita l'impatto ambientale della fabbricazione di uno nuovo e prolunga la vita di risorse già prodotte. È un approccio concreto e circolare." },
          { question: "Qual è l'autonomia del van?", answer: "L'autonomia stimata è di circa 250 km grazie alle batterie, con la possibilità di ricaricare tramite i pannelli solari a bordo o le colonnine di ricarica." },
          { question: "Il van è omologato per la strada?", answer: "Sì. Il veicolo ha superato i test di sicurezza elettrica ed è stato certificato per la circolazione stradale in Svizzera." },
        ],
      },
    },
  },
  {
    slug: "systeme-solaire",
    icon: Sun,
    heroImage: IMAGES.solarPanels,
    relatedServices: ["conversion-electrique", "habitat"],
    seoKeywords: [
      "van solaire Suisse",
      "panneaux solaires camper van",
      "CSEM photovoltaïque mobilité",
      "toiture solaire déployable véhicule",
    ],
    content: {
      fr: {
        title: "Système solaire embarqué",
        shortTitle: "Énergie solaire",
        shortDescription:
          "Une toiture photovoltaïque déployable pour produire l'énergie du voyage directement grâce au soleil.",
        fullDescription:
          "Le cœur technologique de Soleva est son système photovoltaïque innovant. Développés par le CSEM en collaboration avec le PV-Lab de l'EPFL, les panneaux solaires légers et déployables permettent de produire l'énergie nécessaire au déplacement et à la vie à bord.",
        features: [
          "Panneaux solaires haute performance développés par le CSEM et l'EPFL PV-Lab",
          "1 350 W de puissance solaire embarquée",
          "Structure légère, renforcée, résistante à la grêle",
          "Système déployable pour maximiser la surface de captation",
          "Recharge jusqu'à 150 km d'autonomie par jour de soleil",
          "Convertisseur DC-DC BRUSA HyPower optimisant le flux panneaux → batterie",
        ],
        process: [
          { step: 1, title: "Conception", description: "Développement de panneaux adaptés à la surface du toit, en collaboration avec le CSEM et l'EPFL PV-Lab." },
          { step: 2, title: "Fabrication", description: "Production de modules légers en structure honeycomb, résistants aux intempéries, fabriqués en Suisse." },
          { step: 3, title: "Intégration", description: "Installation du système déployable sur le toit du van avec mécanisme d'ajustement pour optimiser l'orientation." },
          { step: 4, title: "Optimisation", description: "Calibration de la chaîne énergétique complète : panneaux → convertisseur → batterie → propulsion et habitat." },
        ],
        faqs: [
          { question: "Le van roule-t-il uniquement au solaire ?", answer: "L'objectif est de maximiser l'autonomie solaire. En conditions favorables, les panneaux fournissent jusqu'à 150 km de recharge par jour. Le van peut aussi être rechargé sur des bornes électriques classiques." },
          { question: "Qui a développé les panneaux solaires ?", answer: "Les panneaux ont été développés par le CSEM (Centre suisse d'électronique et de microtechnique) en collaboration avec le PV-Lab de l'EPFL, deux institutions de référence en Suisse." },
          { question: "Le système solaire peut-il être adapté à d'autres véhicules ?", answer: "C'est l'une des ambitions du projet : démontrer que cette technologie peut être transposée à d'autres véhicules utilitaires et de transport professionnel." },
        ],
      },
      en: {
        title: "On-board solar system",
        shortTitle: "Solar energy",
        shortDescription:
          "A deployable photovoltaic roof to produce the energy of the journey directly from the sun.",
        fullDescription:
          "The technological heart of Soleva is its innovative photovoltaic system. Developed by CSEM in collaboration with the EPFL PV-Lab, the lightweight, deployable solar panels produce the energy needed for driving and life on board.",
        features: [
          "High-performance solar panels developed by CSEM and the EPFL PV-Lab",
          "1,350 W of on-board solar power",
          "Lightweight, reinforced, hail-resistant structure",
          "Deployable system to maximize the capture surface",
          "Recharges up to 150 km of range per sunny day",
          "BRUSA HyPower DC-DC converter optimizing the panels → battery flow",
        ],
        process: [
          { step: 1, title: "Design", description: "Developing panels adapted to the roof surface, in collaboration with CSEM and the EPFL PV-Lab." },
          { step: 2, title: "Manufacturing", description: "Producing lightweight honeycomb-structured modules, weather-resistant, made in Switzerland." },
          { step: 3, title: "Integration", description: "Installing the deployable system on the van roof with an adjustment mechanism to optimize orientation." },
          { step: 4, title: "Optimization", description: "Calibrating the complete energy chain: panels → converter → battery → propulsion and habitat." },
        ],
        faqs: [
          { question: "Does the van run on solar power alone?", answer: "The goal is to maximize solar autonomy. In favorable conditions, the panels provide up to 150 km of charge per day. The van can also be recharged at standard charging stations." },
          { question: "Who developed the solar panels?", answer: "The panels were developed by CSEM (Swiss Center for Electronics and Microtechnology) in collaboration with the EPFL PV-Lab, two leading institutions in Switzerland." },
          { question: "Can the solar system be adapted to other vehicles?", answer: "That is one of the project's ambitions: to demonstrate that this technology can be transferred to other utility and professional transport vehicles." },
        ],
      },
      de: {
        title: "Solarsystem an Bord",
        shortTitle: "Solarenergie",
        shortDescription:
          "Ein ausfahrbares Photovoltaikdach, um die Energie der Reise direkt aus der Sonne zu erzeugen.",
        fullDescription:
          "Das technologische Herz von Soleva ist sein innovatives Photovoltaiksystem. Entwickelt vom CSEM in Zusammenarbeit mit dem EPFL PV-Lab, erzeugen die leichten, ausfahrbaren Solarmodule die Energie für Fahrt und Leben an Bord.",
        features: [
          "Hochleistungs-Solarmodule, entwickelt vom CSEM und dem EPFL PV-Lab",
          "1'350 W Solarleistung an Bord",
          "Leichte, verstärkte, hagelresistente Struktur",
          "Ausfahrbares System zur Maximierung der Auffangfläche",
          "Lädt bis zu 150 km Reichweite pro Sonnentag",
          "BRUSA HyPower DC-DC-Konverter zur Optimierung des Flusses Module → Batterie",
        ],
        process: [
          { step: 1, title: "Konzeption", description: "Entwicklung von an die Dachfläche angepassten Modulen, in Zusammenarbeit mit dem CSEM und dem EPFL PV-Lab." },
          { step: 2, title: "Fertigung", description: "Produktion leichter Module in Wabenstruktur, witterungsbeständig, hergestellt in der Schweiz." },
          { step: 3, title: "Integration", description: "Installation des ausfahrbaren Systems auf dem Van-Dach mit Verstellmechanismus zur Optimierung der Ausrichtung." },
          { step: 4, title: "Optimierung", description: "Kalibrierung der gesamten Energiekette: Module → Konverter → Batterie → Antrieb und Wohnraum." },
        ],
        faqs: [
          { question: "Fährt der Van nur mit Solarenergie?", answer: "Ziel ist es, die Solarautonomie zu maximieren. Unter günstigen Bedingungen liefern die Module bis zu 150 km Ladung pro Tag. Der Van kann auch an üblichen Ladestationen geladen werden." },
          { question: "Wer hat die Solarmodule entwickelt?", answer: "Die Module wurden vom CSEM (Schweizerisches Zentrum für Elektronik und Mikrotechnik) in Zusammenarbeit mit dem EPFL PV-Lab entwickelt, zwei führenden Institutionen in der Schweiz." },
          { question: "Kann das Solarsystem auf andere Fahrzeuge übertragen werden?", answer: "Das ist eines der Ziele des Projekts: zu zeigen, dass diese Technologie auf andere Nutz- und Transportfahrzeuge übertragen werden kann." },
        ],
      },
      it: {
        title: "Sistema solare a bordo",
        shortTitle: "Energia solare",
        shortDescription:
          "Un tetto fotovoltaico estensibile per produrre l'energia del viaggio direttamente dal sole.",
        fullDescription:
          "Il cuore tecnologico di Soleva è il suo sistema fotovoltaico innovativo. Sviluppati dal CSEM in collaborazione con il PV-Lab dell'EPFL, i pannelli solari leggeri ed estensibili producono l'energia necessaria per la guida e la vita a bordo.",
        features: [
          "Pannelli solari ad alte prestazioni sviluppati dal CSEM e dal PV-Lab dell'EPFL",
          "1'350 W di potenza solare a bordo",
          "Struttura leggera, rinforzata, resistente alla grandine",
          "Sistema estensibile per massimizzare la superficie di captazione",
          "Ricarica fino a 150 km di autonomia per giornata di sole",
          "Convertitore DC-DC BRUSA HyPower che ottimizza il flusso pannelli → batteria",
        ],
        process: [
          { step: 1, title: "Progettazione", description: "Sviluppo di pannelli adattati alla superficie del tetto, in collaborazione con il CSEM e il PV-Lab dell'EPFL." },
          { step: 2, title: "Fabbricazione", description: "Produzione di moduli leggeri a struttura honeycomb, resistenti alle intemperie, fabbricati in Svizzera." },
          { step: 3, title: "Integrazione", description: "Installazione del sistema estensibile sul tetto del van con meccanismo di regolazione per ottimizzare l'orientamento." },
          { step: 4, title: "Ottimizzazione", description: "Calibrazione dell'intera catena energetica: pannelli → convertitore → batteria → propulsione e habitat." },
        ],
        faqs: [
          { question: "Il van va solo a energia solare?", answer: "L'obiettivo è massimizzare l'autonomia solare. In condizioni favorevoli, i pannelli forniscono fino a 150 km di ricarica al giorno. Il van può anche essere ricaricato a colonnine elettriche classiche." },
          { question: "Chi ha sviluppato i pannelli solari?", answer: "I pannelli sono stati sviluppati dal CSEM (Centro svizzero di elettronica e microtecnica) in collaborazione con il PV-Lab dell'EPFL, due istituzioni di riferimento in Svizzera." },
          { question: "Il sistema solare può essere adattato ad altri veicoli?", answer: "È una delle ambizioni del progetto: dimostrare che questa tecnologia può essere trasferita ad altri veicoli utilitari e di trasporto professionale." },
        ],
      },
    },
  },
  {
    slug: "habitat",
    icon: Home,
    heroImage: IMAGES.habitat,
    relatedServices: ["conversion-electrique", "systeme-solaire"],
    seoKeywords: [
      "habitat mobile durable",
      "aménagement van écologique",
      "maison sur roues solaire",
      "vanlife bas carbone",
    ],
    content: {
      fr: {
        title: "Habitat mobile bas carbone",
        shortTitle: "Habitat",
        shortDescription:
          "Un espace de vie confortable, sobre et pensé pour réduire l'impact du voyage.",
        fullDescription:
          "Soleva est aussi une petite maison sur roues. L'aménagement intérieur a été conçu pour offrir confort, sobriété et autonomie, en utilisant des matériaux recyclés, locaux et durables autant que possible.",
        features: [
          "Chambre avec couchages pour l'équipe",
          "Cuisine équipée",
          "Salle de bain",
          "Espace de vie et de travail",
          "Matériaux recyclés, locaux et durables",
          "Conception bas carbone intégrée",
        ],
        process: [
          { step: 1, title: "Design", description: "Conception de l'aménagement intérieur en optimisant l'espace, le confort et la sobriété énergétique." },
          { step: 2, title: "Matériaux", description: "Sélection de matériaux recyclés, locaux et à faible impact pour chaque élément de l'aménagement." },
          { step: 3, title: "Construction", description: "Réalisation de l'aménagement par l'équipe et les bénévoles, avec une approche collaborative et artisanale." },
          { step: 4, title: "Vie à bord", description: "Un habitat fonctionnel qui permet de voyager, cuisiner, dormir et travailler en autonomie." },
        ],
        faqs: [
          { question: "Combien de personnes peuvent dormir dans le van ?", answer: "Le van dispose de couchages pour l'équipe. Le nombre exact dépend de la configuration." },
          { question: "L'énergie solaire alimente-t-elle aussi l'habitat ?", answer: "Oui. L'énergie produite par les panneaux solaires alimente à la fois la propulsion et les besoins de la vie à bord (éclairage, cuisine, appareils)." },
          { question: "Quels matériaux ont été utilisés ?", answer: "L'aménagement privilégie les matériaux recyclés, locaux et durables. Les choix spécifiques sont documentés par l'équipe." },
        ],
      },
      en: {
        title: "Low-carbon mobile habitat",
        shortTitle: "Habitat",
        shortDescription:
          "A comfortable, sober living space designed to reduce the impact of travel.",
        fullDescription:
          "Soleva is also a small house on wheels. The interior layout was designed to offer comfort, sobriety and autonomy, using recycled, local and durable materials as much as possible.",
        features: [
          "Bedroom with sleeping space for the team",
          "Equipped kitchen",
          "Bathroom",
          "Living and working space",
          "Recycled, local and durable materials",
          "Integrated low-carbon design",
        ],
        process: [
          { step: 1, title: "Design", description: "Designing the interior layout by optimizing space, comfort and energy sobriety." },
          { step: 2, title: "Materials", description: "Selecting recycled, local and low-impact materials for every element of the layout." },
          { step: 3, title: "Construction", description: "Building the layout with the team and volunteers, with a collaborative and craft-based approach." },
          { step: 4, title: "Life on board", description: "A functional habitat that lets you travel, cook, sleep and work autonomously." },
        ],
        faqs: [
          { question: "How many people can sleep in the van?", answer: "The van has sleeping space for the team. The exact number depends on the configuration." },
          { question: "Does solar energy also power the habitat?", answer: "Yes. The energy produced by the solar panels powers both propulsion and the needs of life on board (lighting, cooking, appliances)." },
          { question: "What materials were used?", answer: "The layout favors recycled, local and durable materials. The specific choices are documented by the team." },
        ],
      },
      de: {
        title: "CO₂-armer mobiler Wohnraum",
        shortTitle: "Wohnraum",
        shortDescription:
          "Ein komfortabler, schlichter Wohnraum, gedacht, um die Auswirkungen des Reisens zu verringern.",
        fullDescription:
          "Soleva ist auch ein kleines Haus auf Rädern. Der Innenausbau wurde so gestaltet, dass er Komfort, Schlichtheit und Autonomie bietet, indem so weit wie möglich recycelte, lokale und nachhaltige Materialien verwendet werden.",
        features: [
          "Schlafraum mit Schlafplätzen für das Team",
          "Ausgestattete Küche",
          "Badezimmer",
          "Wohn- und Arbeitsbereich",
          "Recycelte, lokale und nachhaltige Materialien",
          "Integriertes CO₂-armes Design",
        ],
        process: [
          { step: 1, title: "Design", description: "Gestaltung des Innenausbaus durch Optimierung von Raum, Komfort und Energiesparsamkeit." },
          { step: 2, title: "Materialien", description: "Auswahl recycelter, lokaler und wirkungsarmer Materialien für jedes Element des Ausbaus." },
          { step: 3, title: "Bau", description: "Umsetzung des Ausbaus durch das Team und die Freiwilligen, mit einem kollaborativen und handwerklichen Ansatz." },
          { step: 4, title: "Leben an Bord", description: "Ein funktionaler Wohnraum, der es ermöglicht, autonom zu reisen, kochen, schlafen und arbeiten." },
        ],
        faqs: [
          { question: "Wie viele Personen können im Van schlafen?", answer: "Der Van verfügt über Schlafplätze für das Team. Die genaue Zahl hängt von der Konfiguration ab." },
          { question: "Versorgt die Solarenergie auch den Wohnraum?", answer: "Ja. Die von den Solarmodulen erzeugte Energie versorgt sowohl den Antrieb als auch die Bedürfnisse des Lebens an Bord (Beleuchtung, Kochen, Geräte)." },
          { question: "Welche Materialien wurden verwendet?", answer: "Der Ausbau bevorzugt recycelte, lokale und nachhaltige Materialien. Die spezifischen Entscheidungen werden vom Team dokumentiert." },
        ],
      },
      it: {
        title: "Habitat mobile a basse emissioni",
        shortTitle: "Habitat",
        shortDescription:
          "Uno spazio abitativo confortevole e sobrio, pensato per ridurre l'impatto del viaggio.",
        fullDescription:
          "Soleva è anche una piccola casa su ruote. L'allestimento interno è stato progettato per offrire comfort, sobrietà e autonomia, utilizzando il più possibile materiali riciclati, locali e durevoli.",
        features: [
          "Camera con posti letto per il team",
          "Cucina attrezzata",
          "Bagno",
          "Spazio di vita e di lavoro",
          "Materiali riciclati, locali e durevoli",
          "Progettazione a basse emissioni integrata",
        ],
        process: [
          { step: 1, title: "Design", description: "Progettazione dell'allestimento interno ottimizzando spazio, comfort e sobrietà energetica." },
          { step: 2, title: "Materiali", description: "Selezione di materiali riciclati, locali e a basso impatto per ogni elemento dell'allestimento." },
          { step: 3, title: "Costruzione", description: "Realizzazione dell'allestimento da parte del team e dei volontari, con un approccio collaborativo e artigianale." },
          { step: 4, title: "Vita a bordo", description: "Un habitat funzionale che permette di viaggiare, cucinare, dormire e lavorare in autonomia." },
        ],
        faqs: [
          { question: "Quante persone possono dormire nel van?", answer: "Il van dispone di posti letto per il team. Il numero esatto dipende dalla configurazione." },
          { question: "L'energia solare alimenta anche l'habitat?", answer: "Sì. L'energia prodotta dai pannelli solari alimenta sia la propulsione sia i bisogni della vita a bordo (illuminazione, cucina, apparecchi)." },
          { question: "Quali materiali sono stati utilizzati?", answer: "L'allestimento privilegia materiali riciclati, locali e durevoli. Le scelte specifiche sono documentate dal team." },
        ],
      },
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slug: string): Service[] {
  const service = getServiceBySlug(slug)
  if (!service) return []
  return service.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => Boolean(s))
}
