# FormationVVS — L’atelier des marchés

Site pédagogique Astro, français, déployé sur GitHub Pages à `/formation-vvs/`.

## Développer

Node.js 24 recommandé.

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run verify
npm run preview
```

## Contenus et architecture

- `src/data/curriculum.ts` : 4 modules, 16 notions et questions en français.
- `src/data/content.ts` : outils et leur périmètre.
- `src/components/CoursePage.astro` et `ToolPage.astro` : modèles communs des pages cours et outils.
- `src/styles/lab.css` : direction laboratoire des marchés, bleu pétrole / citron, adaptations mobiles et mouvement réduit.
- `src/components/RiskCalculator.astro` et `src/lib/risk.ts` : achat au comptant, unités, budget de risque, frais fixes et limite du capital disponible. Pas de dérivés, de levier ou d’ordres.
- `CandleLab`, `RiskInstrument` et `ExpectancyLab` : illustrations manipulables au clavier et au pointeur. Exemples fictifs.
- `scripts/build-instrument.mjs` : construction reproductible du dessin isométrique ; `npm run illustration`. Le kit de géométrie `iso-kit.mjs` provient du skill Anatomy utilisé pour cette refonte.
- `public/social-card.svg` : source de l’image sociale ; sa version PNG est incluse pour les plateformes de partage.

## Données et stockage

Le marché interroge CoinGecko et ExchangeRate-API une fois à l’ouverture, puis sur actualisation manuelle. Une valeur absente reste `—` ; les erreurs et les dates des sources sont affichées. Les cours de référence ne constituent pas un flux d’exécution.

Le journal (`fv_journal_v1`) et la veille (`fv_watch_v1`) conservent leurs clés historiques. Les exercices utilisent `vvs-learning-v1`. Les données restent dans le navigateur, sans synchronisation ni compte. Les notes sont exportables en JSON. Le blocage du stockage n’empêche pas la lecture ou le calcul.

Les 14 pages sont librement consultables. Les tarifs historiques 29 € / 79 € sont présentés comme propositions d’accompagnement à confirmer, sans paiement ni promesse d’accès à un service non activé. Le contact passe par l’adresse professionnelle de Samir, sans invitation Discord ou Telegram fictive.

## Sources pédagogiques

Les ressources du site renvoient à l’AMF (CFD), Investor.gov (types d’ordres et diversification), et CME Group (lecture des graphiques). Aucun partenariat ou agrément de ces organismes n’est revendiqué.

## Publication

La branche `main` déclenche GitHub Pages. Les branches de travail et les PR exécutent vérification Astro, tests du modèle de risque et de progression, construction et contrôle des liens / métadonnées. La publication nécessite ensuite validation de la version proposée, fusion vers `main`, succès du workflow Pages et contrôle du contenu servi.

`robots.txt` est également fourni dans ce sous-répertoire ; les moteurs ne consultent automatiquement que le fichier situé à la racine de l’origine GitHub Pages. Le sitemap reste directement accessible à `/formation-vvs/sitemap.xml` et peut être soumis dans la console de recherche.
