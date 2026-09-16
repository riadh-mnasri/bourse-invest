# BourseInvest

Guide pédagogique bilingue (FR/EN) sur les bases de la bourse, la fiscalité de l'investissement en France (PEA, compte-titres, assurance-vie) et la construction d'une routine d'investisseur saine. Pas un tracker, pas un calculateur : un site de contenu, dans l'esprit de [finance-for-engineers](https://github.com/riadh-mnasri/finance-for-engineers) mais pour l'investisseur particulier plutôt que l'ingénieur finance.

*[Read this in English](README.en.md)*

## Contenu

12 articles bilingues répartis en 4 modules :

1. **Les bases** : qu'est-ce qu'un marché financier, actions/obligations/ETF, risque de marché vs perte permanente.
2. **Enveloppes fiscales** : vue d'ensemble PEA/CTO/assurance-vie, le PEA en détail (éligibilité, réplication synthétique, risque de contrepartie), le CTO en complément.
3. **Routine d'investisseur** : allocation core-satellite, DCA et versements programmés, biais comportementaux.
4. **Conseils** : idées distillées de trois livres de référence (Père riche père pauvre, The Little Book of Common Sense Investing, The Psychology of Money), avec la source citée à chaque fois.

Plus un glossaire de termes clés.

## Ce que le site ne fait pas (encore)

Pas de suivi de portefeuille personnel, pas de saisie de position, pas de conseil personnalisé (voir le disclaimer AMF en pied de page). Le contenu français est le premier centre d'intérêt ; le contenu anglais est traduit en parallèle mais n'a pas vocation à couvrir la fiscalité d'autres pays.

## Stack

- Next.js 16 (App Router, Turbopack) avec `src/`
- Tailwind CSS v4 + `@tailwindcss/typography`
- Contenu MDX (`@next/mdx`) avec composants pédagogiques dédiés (`Callout`, `Example`, `KeyTakeaway`, `Source`)
- FR/EN et clair/sombre via `useSyncExternalStore` (pas de next-intl/next-themes)
- Favicon et image Open Graph générés via `next/og`

## Développement local

```bash
npm install
npm run dev
```

Le site tourne sur [http://localhost:3040](http://localhost:3040).

```bash
npm run build   # build de production
npm run lint    # eslint
```

## Déploiement

Déployé en continu sur Vercel à chaque push sur `main`.

---

© 2026 Riadh MNASRI. Tous droits réservés.
