/*
 * Copyright (c) 2026 Riadh MNASRI. All rights reserved.
 */
import type { LocalizedText } from "@/lib/content/types";

interface GlossaryTerm {
  term: LocalizedText;
  definition: LocalizedText;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: { fr: "Marché primaire", en: "Primary market" },
    definition: {
      fr: "Le moment où un titre est émis pour la première fois (IPO, augmentation de capital, nouvelle obligation). Seul moment où l'argent versé va réellement à l'émetteur.",
      en: "The moment a security is issued for the first time (IPO, capital raise, new bond). The only moment the money paid actually goes to the issuer.",
    },
  },
  {
    term: { fr: "Marché secondaire", en: "Secondary market" },
    definition: {
      fr: "L'échange de titres déjà émis entre investisseurs. La quasi-totalité des transactions boursières quotidiennes.",
      en: "The exchange of already-issued securities between investors. The vast majority of day-to-day stock market trades.",
    },
  },
  {
    term: { fr: "Liquidité", en: "Liquidity" },
    definition: {
      fr: "La facilité à acheter ou vendre un actif rapidement sans faire bouger significativement son prix.",
      en: "How easily an asset can be bought or sold quickly without significantly moving its price.",
    },
  },
  {
    term: { fr: "Action", en: "Stock / equity" },
    definition: {
      fr: "Part de propriété résiduelle d'une entreprise, donnant droit à une part des bénéfices (dividende) et au dernier rang en cas de faillite.",
      en: "A residual ownership stake in a company, entitling the holder to a share of profits (dividend) and last rank in a bankruptcy.",
    },
  },
  {
    term: { fr: "Obligation", en: "Bond" },
    definition: {
      fr: "Un prêt à un émetteur (État ou entreprise) contre un intérêt fixe (coupon) et un remboursement à échéance. Prioritaire sur les actionnaires en cas de défaut.",
      en: "A loan to an issuer (government or company) in exchange for fixed interest (coupon) and repayment at maturity. Ranks above shareholders in a default.",
    },
  },
  {
    term: { fr: "ETF", en: "ETF" },
    definition: {
      fr: "Exchange-Traded Fund : fonds coté qui réplique la performance d'un indice, permettant une exposition diversifiée en une seule ligne.",
      en: "Exchange-Traded Fund: a listed fund that tracks an index's performance, giving diversified exposure in a single line.",
    },
  },
  {
    term: { fr: "Réplication physique", en: "Physical replication" },
    definition: {
      fr: "Méthode où un ETF détient réellement les titres de l'indice qu'il réplique.",
      en: "A method where an ETF actually holds the securities of the index it tracks.",
    },
  },
  {
    term: { fr: "Réplication synthétique", en: "Synthetic replication" },
    definition: {
      fr: "Méthode où un ETF détient un panier de titres différent et échange sa performance contre celle de l'indice visé via un contrat de swap avec une banque. Introduit un risque de contrepartie encadré par la réglementation UCITS.",
      en: "A method where an ETF holds a different basket of securities and swaps its performance for the target index's via a contract with a bank. Introduces a counterparty risk bounded by UCITS regulation.",
    },
  },
  {
    term: { fr: "Risque de contrepartie", en: "Counterparty risk" },
    definition: {
      fr: "Le risque qu'une partie à un contrat financier (par exemple un swap) ne puisse pas honorer son engagement.",
      en: "The risk that a party to a financial contract (e.g. a swap) fails to honor its commitment.",
    },
  },
  {
    term: { fr: "UCITS", en: "UCITS" },
    definition: {
      fr: "Cadre réglementaire européen pour les fonds d'investissement, qui plafonne notamment l'exposition à une seule contrepartie de swap à 10% de la valeur du fonds.",
      en: "European regulatory framework for investment funds, which notably caps exposure to a single swap counterparty at 10% of the fund's value.",
    },
  },
  {
    term: { fr: "PEA", en: "PEA" },
    definition: {
      fr: "Plan d'Épargne en Actions : enveloppe fiscale française limitée aux titres UE éligibles, exonération d'impôt sur les plus-values après 5 ans, plafond de versement à 150 000€.",
      en: "French tax wrapper limited to eligible EU securities, capital gains tax exemption after 5 years, €150,000 contribution cap.",
    },
  },
  {
    term: { fr: "CTO", en: "Brokerage account (CTO)" },
    definition: {
      fr: "Compte-titres ordinaire : enveloppe sans restriction géographique ni plafond, mais soumise à la flat tax de 30% sur chaque plus-value réalisée.",
      en: "Ordinary brokerage account: no geographic restriction or cap, but every realized gain is subject to the 30% flat tax.",
    },
  },
  {
    term: { fr: "Flat tax", en: "Flat tax" },
    definition: {
      fr: "Prélèvement forfaitaire unique de 30% (12,8% impôt sur le revenu + 17,2% prélèvements sociaux) appliqué par défaut aux revenus et plus-values de capitaux mobiliers en France.",
      en: "Single 30% flat tax (12.8% income tax + 17.2% social contributions) applied by default to French investment income and capital gains.",
    },
  },
  {
    term: { fr: "DCA (versement programmé)", en: "DCA (dollar-cost averaging)" },
    definition: {
      fr: "Investir un montant fixe à intervalle régulier plutôt qu'une somme importante en une fois, ce qui lisse le prix d'achat moyen dans le temps.",
      en: "Investing a fixed amount at a regular interval instead of a large sum at once, which smooths the average purchase price over time.",
    },
  },
  {
    term: { fr: "Volatilité", en: "Volatility" },
    definition: {
      fr: "L'amplitude des variations de prix d'un actif. Un risque de marché temporaire, à distinguer de la perte permanente.",
      en: "The magnitude of an asset's price swings. A temporary market risk, distinct from permanent loss.",
    },
  },
  {
    term: { fr: "Drawdown", en: "Drawdown" },
    definition: {
      fr: "La baisse en pourcentage entre le plus haut atteint par un actif et son point le plus bas suivant, avant un nouveau sommet.",
      en: "The percentage decline from an asset's peak to its subsequent lowest point, before a new high.",
    },
  },
  {
    term: { fr: "Diversification", en: "Diversification" },
    definition: {
      fr: "Répartir un investissement sur de nombreux titres pour rendre la faillite ou la contre-performance d'un seul négligeable pour l'ensemble.",
      en: "Spreading an investment across many securities so that any single one's bankruptcy or underperformance becomes negligible to the whole.",
    },
  },
  {
    term: { fr: "Allocation core-satellite", en: "Core-satellite allocation" },
    definition: {
      fr: "Structure de portefeuille séparant un cœur large et stable (indiciel) d'un satellite plafonné pour les convictions individuelles.",
      en: "A portfolio structure separating a broad, stable core (indexed) from a capped satellite for individual convictions.",
    },
  },
  {
    term: { fr: "Actif (au sens Kiyosaki)", en: "Asset (Kiyosaki sense)" },
    definition: {
      fr: "Tout ce qui met de l'argent dans votre poche dans le temps, par opposition à un passif qui en fait sortir.",
      en: "Anything that puts money in your pocket over time, as opposed to a liability, which takes money out.",
    },
  },
];
