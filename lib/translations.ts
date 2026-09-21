export type SupportedLanguage = "EN" | "DE" | "FR" | "ES";

export interface TranslationStrings {
  nav: {
    services: string;
    work: string;
    process: string;
    about: string;
    team: string;
    contact: string;
    letsTalk: string;
  };
  hero: {
    badge: string;
    proofPill: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    startProject: string;
    seeWork: string;
    focusTitle: string;
    focusDesc: string;
    quoteLine1: string;
    quoteLine2: string;
    scrollToStart: string;
  };
  hud: {
    analyze: string;
    automate: string;
    scale: string;
  };
  metrics: {
    clientDeliverables: string;
    taskAccuracy: string;
    audioLatency: string;
    hoursSaved: string;
    clientRoi: string;
  };
  work: {
    title: string;
    exploreAll: string;
    inspectArch: string;
    closeArch: string;
    launchLive: string;
  };
  team: {
    badge: string;
    title: string;
    subtitle: string;
  };
  sections: {
    hero: string;
    metrics: string;
    work: string;
    services: string;
    team: string;
    contact: string;
  };
}

export const translations: Record<SupportedLanguage, TranslationStrings> = {
  EN: {
    nav: {
      services: "Services",
      work: "Projects",
      process: "Methodology",
      about: "About",
      team: "Team",
      contact: "Contact",
      letsTalk: "Let's Talk"
    },
    hero: {
      badge: "[ CRAFTING DIGITAL EXPERIENCES // AUTONOMOUS AI ]",
      proofPill: "2,500+ Client Deliverables · Award-Winning Studio",
      titleLine1: "We craft unique digital",
      titleLine2: "experiences & autonomous",
      titleLine3: "systems for real scale",
      subtitle: "We collaborate with ambitious founders to understand their vision and combine high-caliber design expertise with autonomous AI architectures.",
      startProject: "Start a Project",
      seeWork: "Explore Projects",
      focusTitle: "Our Focus",
      focusDesc: "Brand identity, bespoke autonomous web platforms, sub-300ms conversational voice agents, and high-throughput workflow engines.",
      quoteLine1: "We align with your vision,",
      quoteLine2: "and engineer the advantage.",
      scrollToStart: "//scroll_to_explore"
    },
    hud: {
      analyze: "ANALYZE",
      automate: "AUTOMATE",
      scale: "SCALE"
    },
    metrics: {
      clientDeliverables: "2,500+ Global Deliverables",
      taskAccuracy: "Task Accuracy Rate",
      audioLatency: "Voice Latency Rate",
      hoursSaved: "Manual Hours Reclaimed",
      clientRoi: "Average Client ROI"
    },
    work: {
      title: "Featured Projects & Architectures",
      exploreAll: "Explore All Work",
      inspectArch: "INSPECT ARCHITECTURE",
      closeArch: "CLOSE BLUEPRINT",
      launchLive: "Launch Live Platform"
    },
    team: {
      badge: "[ THE STUDIO & LEADERSHIP ]",
      title: "The minds behind the execution",
      subtitle: "A multi-disciplinary collective of design craftspeople, systems architects, and AI engineers dedicated to elevating your brand."
    },
    sections: {
      hero: "Overview",
      metrics: "Performance",
      work: "Projects",
      services: "Capabilities",
      team: "Leadership",
      contact: "Contact"
    }
  },
  DE: {
    nav: {
      services: "Leistungen",
      work: "Projekte",
      process: "Methodik",
      about: "Über uns",
      team: "Team",
      contact: "Kontakt",
      letsTalk: "Gespräch buchen"
    },
    hero: {
      badge: "[ DIGITALE ERLEBNISSE // AUTONOME KI ]",
      proofPill: "2.500+ Projekterfolge · Preisgekröntes Studio",
      titleLine1: "Wir schaffen einzigartige",
      titleLine2: "digitale Erlebnisse &",
      titleLine3: "autonome Systeme",
      subtitle: "Wir begleiten ambitionierte Unternehmen und vereinen exzellentes Design mit autonomen KI-Architekturen für nachhaltiges Wachstum.",
      startProject: "Projekt starten",
      seeWork: "Projekte ansehen",
      focusTitle: "Unser Fokus",
      focusDesc: "Markenidentität, Next-Gen Web-Plattformen, blitzschnelle Sprachagenten und automatisierte Arbeitsabläufe.",
      quoteLine1: "Wir teilen Ihre Vision,",
      quoteLine2: "und bauen Ihren Vorsprung.",
      scrollToStart: "//nach_unten_scrollen"
    },
    hud: {
      analyze: "ANALYSIEREN",
      automate: "AUTOMATISIEREN",
      scale: "SKALIEREN"
    },
    metrics: {
      clientDeliverables: "2.500+ Globale Deliverables",
      taskAccuracy: "Aufgabengenauigkeit",
      audioLatency: "Sprach-Audiolatenz",
      hoursSaved: "Eingesparte Arbeitsstunden",
      clientRoi: "Durchschnittlicher ROI"
    },
    work: {
      title: "Ausgewählte Projekte & Architekturen",
      exploreAll: "Alle Projekte ansehen",
      inspectArch: "ARCHITEKTUR PRÜFEN",
      closeArch: "BLUEPRINT SCHLIESSEN",
      launchLive: "Live-Plattform öffnen"
    },
    team: {
      badge: "[ DAS STUDIO & FÜHRUNG ]",
      title: "Die Köpfe hinter den Systemen",
      subtitle: "Ein interdisziplinäres Kollektiv aus Designern, Systemarchitekten und KI-Ingenieuren."
    },
    sections: {
      hero: "Übersicht",
      metrics: "Leistung",
      work: "Projekte",
      services: "Fähigkeiten",
      team: "Team",
      contact: "Kontakt"
    }
  },
  FR: {
    nav: {
      services: "Services",
      work: "Projets",
      process: "Méthode",
      about: "À propos",
      team: "Équipe",
      contact: "Contact",
      letsTalk: "Discutons"
    },
    hero: {
      badge: "[ EXPÉRIENCES DIGITALES // IA AUTONOME ]",
      proofPill: "Plus de 2 500 projets livrés · Studio primé",
      titleLine1: "Nous créons des expériences",
      titleLine2: "digitales uniques et des",
      titleLine3: "systèmes autonomes",
      subtitle: "Nous collaborons avec des fondateurs visionnaires pour allier haute expertise en design et architectures d'IA autonomes.",
      startProject: "Démarrer un projet",
      seeWork: "Voir nos projets",
      focusTitle: "Notre expertise",
      focusDesc: "Identité de marque, plateformes web autonomes, agents vocaux sub-300ms et pipelines opérationnels sur mesure.",
      quoteLine1: "Nous nous alignons avec votre vision,",
      quoteLine2: "pour concevoir votre avantage.",
      scrollToStart: "//faire_défiler"
    },
    hud: {
      analyze: "ANALYSER",
      automate: "AUTOMATISER",
      scale: "DÉPLOYER"
    },
    metrics: {
      clientDeliverables: "2 500+ Livrables Mondiaux",
      taskAccuracy: "Précision des tâches",
      audioLatency: "Latence vocale",
      hoursSaved: "Heures manuelles économisées",
      clientRoi: "Retour sur investissement"
    },
    work: {
      title: "Projets et Architectures Phares",
      exploreAll: "Explorer les projets",
      inspectArch: "INSPECTER L'ARCHITECTURE",
      closeArch: "FERMER LE SCHÉMA",
      launchLive: "Lancer la plateforme"
    },
    team: {
      badge: "[ LE STUDIO & DIRECTION ]",
      title: "Les esprits derrière l'exécution",
      subtitle: "Un collectif pluridisciplinaire d'artisans du design, d'architectes systèmes et d'ingénieurs en IA."
    },
    sections: {
      hero: "Aperçu",
      metrics: "Performance",
      work: "Projets",
      services: "Capacités",
      team: "Équipe",
      contact: "Contact"
    }
  },
  ES: {
    nav: {
      services: "Servicios",
      work: "Proyectos",
      process: "Metodología",
      about: "Nosotros",
      team: "Equipo",
      contact: "Contacto",
      letsTalk: "Hablemos"
    },
    hero: {
      badge: "[ EXPERIENCIAS DIGITALES // IA AUTÓNOMA ]",
      proofPill: "Más de 2.500 entregas · Estudio galardonado",
      titleLine1: "Creamos experiencias",
      titleLine2: "digitales únicas y sistemas",
      titleLine3: "autónomos para crecer",
      subtitle: "Colaboramos con líderes y fundadores para unir el diseño de vanguardia con arquitecturas de automatización e IA autónoma.",
      startProject: "Iniciar Proyecto",
      seeWork: "Explorar Proyectos",
      focusTitle: "Nuestro Enfoque",
      focusDesc: "Identidad de marca, plataformas web dinámicas, agentes de voz ultrarrápidos y flujos de trabajo sin fricción.",
      quoteLine1: "Nos alineamos con tu visión,",
      quoteLine2: "y creamos la ventaja competitiva.",
      scrollToStart: "//desplazar_abajo"
    },
    hud: {
      analyze: "ANALIZAR",
      automate: "AUTOMATIZAR",
      scale: "ESCALAR"
    },
    metrics: {
      clientDeliverables: "2.500+ Entregas Globales",
      taskAccuracy: "Tasa de Precisión",
      audioLatency: "Latencia de Voz",
      hoursSaved: "Horas Manuales Ahorradas",
      clientRoi: "ROI Promedio"
    },
    work: {
      title: "Proyectos y Arquitecturas Destacadas",
      exploreAll: "Ver Todos los Proyectos",
      inspectArch: "INSPECCIONAR ARQUITECTURA",
      closeArch: "CERRAR ESQUEMA",
      launchLive: "Abrir Plataforma en Vivo"
    },
    team: {
      badge: "[ EL ESTUDIO Y LIDERAZGO ]",
      title: "Las mentes tras la ejecución",
      subtitle: "Un colectivo multidisciplinar de diseñadores, arquitectos de sistemas e ingenieros de IA."
    },
    sections: {
      hero: "Resumen",
      metrics: "Rendimiento",
      work: "Proyectos",
      services: "Capacidades",
      team: "Equipo",
      contact: "Contacto"
    }
  }
};
