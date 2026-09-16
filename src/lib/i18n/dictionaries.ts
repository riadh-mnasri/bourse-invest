/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 *
 * FR/EN dictionary for static UI strings (navigation, homepage, article
 * chrome). Article body content lives in MDX files, not here.
 */

export type Locale = "fr" | "en";

const dictionaries = {
  fr: {
    "site.title": "BourseInvest",
    "site.tagline": "Comprendre avant d'investir",
    "nav.marches": "Les bases",
    "nav.enveloppes": "Enveloppes fiscales",
    "nav.routine": "Routine d'investisseur",
    "nav.conseils": "Conseils",
    "nav.glossaire": "Glossaire",
    "theme.toggle": "Changer de thème",
    "locale.toggle": "EN",
    "home.hero.title": "Devenir un investisseur qui comprend ce qu'il fait",
    "home.hero.subtitle":
      "Un guide pédagogique en français et en anglais sur les bases de la bourse, la fiscalité de l'investissement en France et la construction d'une routine saine, pour ne jamais prendre un risque que vous ne pouvez pas expliquer vous-même.",
    "home.hero.cta": "Commencer par les bases",
    "home.disclaimer":
      "Contenu pédagogique indépendant, pas un conseil en investissement personnalisé. Aucune donnée financière réelle n'est collectée par ce site.",
    "home.modules.title": "Le parcours",
    "module.marches.title": "Les bases des marchés",
    "module.marches.intro":
      "Ce que sont réellement une action, une obligation et un ETF, et pourquoi la distinction entre risque de marché et risque de perte permanente est le concept le plus important à maîtriser avant d'investir un euro.",
    "module.enveloppes.title": "Les enveloppes fiscales françaises",
    "module.enveloppes.intro":
      "PEA, compte-titres ordinaire, assurance-vie : ce que chaque enveloppe permet, ses contraintes réelles, et comment elles se complètent plutôt que de faire doublon.",
    "module.routine.title": "Construire une routine d'investisseur",
    "module.routine.intro":
      "Une allocation qui tient dans le temps, un rythme de versement qui ne dépend pas de votre humeur, et les biais qui font le plus de dégâts chez les investisseurs qui pilotent seuls.",
    "module.conseils.title": "Conseils des classiques",
    "module.conseils.intro":
      "Les idées qui ont le mieux résisté à l'épreuve du temps, distillées depuis quelques livres de référence sur l'argent et l'investissement, avec la source à chaque fois pour aller plus loin.",
    "article.module": "Module",
    "article.prev": "Précédent",
    "article.next": "Suivant",
    "article.backToModule": "Retour au module",
    "footer.disclaimer":
      "BourseInvest est un site pédagogique indépendant. Rien ici ne constitue un conseil en investissement personnalisé au sens de la réglementation AMF. Investir comporte un risque de perte en capital.",
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    "site.title": "BourseInvest",
    "site.tagline": "Understand before you invest",
    "nav.marches": "The basics",
    "nav.enveloppes": "Tax wrappers",
    "nav.routine": "Investor routine",
    "nav.conseils": "Lessons",
    "nav.glossaire": "Glossary",
    "theme.toggle": "Toggle theme",
    "locale.toggle": "FR",
    "home.hero.title": "Become an investor who understands what they're doing",
    "home.hero.subtitle":
      "A bilingual (French/English) guide to stock market basics, French investment tax wrappers, and building a sane routine, so you never take a risk you can't explain yourself.",
    "home.hero.cta": "Start with the basics",
    "home.disclaimer":
      "Independent educational content, not personalized investment advice. This site collects no real financial data.",
    "home.modules.title": "The path",
    "module.marches.title": "Market basics",
    "module.marches.intro":
      "What a stock, a bond and an ETF actually are, and why the distinction between market risk and permanent loss is the single most important concept to grasp before investing a single euro.",
    "module.enveloppes.title": "French tax wrappers",
    "module.enveloppes.intro":
      "PEA, ordinary brokerage account, life insurance: what each wrapper actually allows, its real constraints, and how they complement each other instead of overlapping.",
    "module.routine.title": "Building an investor routine",
    "module.routine.intro":
      "An allocation that holds up over time, a contribution rhythm that doesn't depend on your mood, and the biases that do the most damage to self-directed investors.",
    "module.conseils.title": "Lessons from the classics",
    "module.conseils.intro":
      "The ideas that have aged best, distilled from a handful of reference books on money and investing, with the source cited each time so you can go deeper.",
    "article.module": "Module",
    "article.prev": "Previous",
    "article.next": "Next",
    "article.backToModule": "Back to module",
    "footer.disclaimer":
      "BourseInvest is an independent educational site. Nothing here constitutes personalized investment advice. Investing carries a risk of capital loss.",
    "footer.rights": "All rights reserved.",
  },
} as const;

export type DictionaryKey = keyof (typeof dictionaries)["fr"];

export function translate(locale: Locale, key: DictionaryKey): string {
  return dictionaries[locale][key];
}
