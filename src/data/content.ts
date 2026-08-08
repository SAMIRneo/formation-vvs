// Source de vérité unique — contenu du site FormationVVS
// Édite ici pour changer les cours / outils / plans / marché.
// Les liens internes utilisent BASE_URL (cf. consts.ts) pour marcher en local + GitHub Pages.

export const marketTickers = [
  { sym: 'BTC/EUR', price: '61 240', chg: '+2.4%', dir: 'up' as const },
  { sym: 'ETH/EUR', price: '3 180', chg: '+1.1%', dir: 'up' as const },
  { sym: 'EUR/USD', price: '1.0842', chg: '-0.3%', dir: 'down' as const },
  { sym: 'XAU/EUR', price: '2 210', chg: '+0.7%', dir: 'up' as const },
  { sym: 'CAC 40', price: '8 142', chg: '-0.5%', dir: 'down' as const },
  { sym: 'S&P 500', price: '5 430', chg: '+0.9%', dir: 'up' as const },
];

export const modules = [
  {
    n: '01', slug: 'lire-le-prix', title: 'Lire le prix', desc: 'Structure de marché, chandeliers, niveaux. Les fondations sans le bruit.', tag: 'Débutant', accent: 'orange' as const,
    body: 'Tu ne trades pas un prix, tu lis une structure. Cette module te donne le vocabulaire : chandeliers (corps, mèche, couleur), supports et résistances, et pourquoi le niveau tenu hier pèse encore aujourd’hui. À la fin, tu identifies un range, une cassure et une zone de value — sans indicateur.',
    chapters: [
      {
        title: 'Le chandelier japonais',
        diagram: 'candles',
        body: 'Une bougie résume un combat en un temps donné : le corps montre l’ouverture et la clôture, la mèche haute et basse le maximum et le minimum atteints. Vert = les acheteurs ont gagné (clôture > ouverture), rouge = les vendeurs.',
        points: ['Le corps = écart ouverture/clôture', 'La mèche = excursion hors du corps', 'Une mèche longue = rejet du prix à ce niveau'],
      },
      {
        title: 'Support & résistance',
        diagram: 'levels',
        body: 'Ce ne sont pas des lignes magiques mais des zones où le prix a réagi. Le support = mur d’achats en dessous, la résistance = plafond de ventes au-dessus. On trade les zones, pas les traits au pixel près.',
        points: ['Un support cassé devient résistance', 'Plus le niveau est testé, plus il compte', 'La force se mesure sur le volume du rebond'],
      },
      {
        title: 'Le range & la cassure',
        diagram: 'range',
        body: 'Entre support et résistance, le prix oscille : c’est un range. La cassure (breakout) survient quand le prix sort de la zone avec conviction — c’est souvent le début d’une tendance.',
        points: ['Range = indecision, borne haute/basse', 'La cassure cherche le sens du prochain move', 'Une fausse cassure (pique) piège les pressés'],
      },
      {
        title: 'Lire dans le contexte',
        diagram: 'context',
        body: 'Une bougie seule ne dit rien. Place-la dans la structure : est-elle au sommet d’un range ou au milieu d’une tendance ? Le contexte décide si le signal est fort ou bruit.',
        points: ['Même bougie, sens opposé selon le contexte', 'Balisage : range / tendance / extension', 'Le timeframe supérieur dicte le sens'],
      },
    ],
  },
  {
    n: '02', slug: 'analyse-technique', title: 'Analyse technique', desc: 'Tendances, figures de retournement, volume. Ta grille de lecture.', tag: 'Intermédiaire', accent: 'bleu' as const,
    body: 'La tendance est ton amie jusqu’à ce qu’elle ne le soit plus. Tu apprends à la tracer, à repérer les figures de retournement (tête-épaules, double bottom) et à lire le volume comme confirmation. Le bruit des 15 min s’efface devant une lecture 4H propre.',
    chapters: [
      {
        title: 'La tendance, ton amie',
        diagram: 'trend',
        body: 'Une tendance haussière fait des plus-hauts et des plus-bas qui montent (HH/HL). Une tendance baissière fait l’inverse (LH/LL). Tracer ces points donne une lecture immédiate du sens.',
        points: ['HH/HL = haussier, LH/LL = baissier', 'Trade dans le sens de la pente', 'La casse du dernier HL annonce la fin'],
      },
      {
        title: 'Figures de retournement',
        diagram: 'reversal',
        body: 'Le double bottom (« W ») et la tête-épaules marquent la fin d’une tendanche. Ils se forment dans la douleur : le prix teste deux fois un plancher avant de repartir.',
        points: ['Double bottom = « W », plancher testé 2x', 'Tête-épaules = sommet central plus haut', 'La ligne de cou (neckline) rompue = signal'],
      },
      {
        title: 'Le volume confirme',
        diagram: 'volume',
        body: 'Le volume est la voix du move. Une cassure sur gros volume est crédible ; une cassure sur volume faible sent le piège. Le volume ne ment pas sur la conviction.',
        points: ['Casser sur volume élevé = conviction', 'Volume faible sur cassure = suspect', 'La fin de move se lit sur volume qui s’essouffle'],
      },
      {
        title: 'Pullback & retest',
        diagram: 'pullback',
        body: 'Après une cassure, le prix revient souvent tester l’ancienne résistance devenue support. Ce retest est ton entry de qualité : tu entres dans le sens, avec un stop serré sous le niveau.',
        points: ['Le retest valide la cassure', 'Entry sur rebond du niveau', 'Stop sous le niveau testé = risque maîtrisé'],
      },
    ],
  },
  {
    n: '03', slug: 'gestion-du-risque', title: 'Gestion du risque', desc: 'Taille de position, stop, psychologie. Survivre d’abord.', tag: 'Clé', accent: 'jaune' as const,
    body: 'Un trade sans stop n’est pas un trade, c’est une prière. Tu calcules la taille de position à partir de ton capital et de ta tolérance (1% par trade), tu places le stop AVANT l’entrée, et tu traites la perte comme un coût d’exploitation — pas comme une insulte.',
    chapters: [
      {
        title: 'Ta taille de position',
        diagram: 'positionsize',
        body: 'La formule : Taille = (Capital × Risque%) ÷ (Entrée − Stop). Avec 10 000 € et 1% de risque pour 50 € d’écart, tu prends 1 lot. Le chiffre est défendable, pas « ça avait l’air bien ».',
        points: ['Risque par trade = % de capital', 'Divise par l’écart entrée−stop', 'Jamais « à feeling » : le calcul gouverne'],
      },
      {
        title: 'Le stop avant l’entrée',
        diagram: 'stop',
        body: 'Le stop est placé AVANT de cliquer. Il vit sous le support (long) ou au-dessus de la résistance (short). Sans stop, une bougie adverse ruine des semaines de travail.',
        points: ['Stop = décision prise à froid', 'Sous le support / au-dessus résistance', 'Le déplacer dans le rouge = suicide'],
      },
      {
        title: 'Risk / Reward (R-multiple)',
        diagram: 'rr',
        body: 'Si tu risques 1R pour viser 3R, il te suffit d’avoir raison 1 fois sur 3 pour être à l’équilibre. Le R-multiple mesure le potentiel face au risque — tu ne takes un trade que si le ratio paie.',
        points: ['1R = ton risque, 3R = ta cible', 'RR ≥ 2-3 pour absorber les échecs', 'Un bon ratio sauve une faible réussite'],
      },
      {
        title: 'Psychologie & drawdown',
        diagram: 'drawdown',
        body: 'Le drawdown est la chute de ton capital depuis le sommet. -20% exige +25% pour revenir. La survie mental passe par la régle de taille et l’acceptation de la perte comme coût, pas comme échec personnel.',
        points: ['Drawdown = chute depuis le plus haut', 'Plus on tombe, plus le retour coûte cher', 'La perte est un coût, pas une insulte'],
      },
    ],
  },
  {
    n: '04', slug: 'setups-en-live', title: 'Setups en live', desc: 'Plans de trade documentés, récits de marché réels.', tag: 'Avancé', accent: 'emeraude' as const,
    body: 'La théorie rencontre le réel. Tu documentes chaque plan avant l’entrée (pourquoi, où, stop, target), puis tu revois les récits de marché annotés : ce qui a marché, ce qui a raté, et pourquoi. La répétition calibre ton œil.',
    chapters: [
      {
        title: 'Le plan de trade',
        diagram: 'plan',
        body: 'Avant le marché, tu écris : contexte, setup, entrée, stop, target, raison. Le plan négocie à ta place quand l’émotion monte. Sans plan, tu réagis ; avec, tu exécutes.',
        points: ['Écrit AVANT l’entrée, pas après', 'Contexte → setup → entrée → stop → target', 'Le plan calme l’émotion du live'],
      },
      {
        title: 'La zone d’entrée',
        diagram: 'zone',
        body: 'Tu ne prends pas le prix, tu prends une zone. La zone de demande (support) ou d’offre (résistance) est un rectangle où le prix a réagi fortement. Tu entries au rebond, pas à la poursuite.',
        points: ['Une zone, pas un prix unique', 'Entry au rebond de la zone', 'Stop sous la zone = risque serré'],
      },
      {
        title: 'Lire un setup annoté',
        diagram: 'annotated',
        body: 'Sur un graphique annoté : flèche d’entrée, ligne de stop, cible en vert, et le pourquoi écrit dessus. Lire des setups annotés par d’autres calibre ton œil sur ce qui compte.',
        points: ['Entrée / Stop / Target clairement marqués', 'Le « pourquoi » écrit sur le chart', 'La figure vaut plus que 10 pages'],
      },
      {
        title: 'Revoir & journaliser',
        diagram: 'review',
        body: 'Après le trade, tu notes ce qui est arrivé et ce que tu as ressenti. Le journal est ton miroir : en le relisant, tes biais récurrents sautent aux yeux mieux que tout coach.',
        points: ['Note post-trade : fait vs plan', 'Ressenti = signal de biais', 'La relecture bat le conseil extérieur'],
      },
    ],
  },
];

export const tools = [
  { slug: 'screener', t: 'Screener de setups', d: 'Filtre les marchés par structure (range, cassure, retournement) en un coup d’œil.', icon: 'M3 12h4l3-8 4 16 3-8h4',
    body: 'Un screener ne fait pas le trade à ta place : il réduit l’univers à ce qui mérite ton attention. Tu choisis le biais (range / cassure / retournement) et il te sort les paires qui matchent ta grille — pour que tu regardes 5 graphiques, pas 500.' },
  { slug: 'calculateur', t: 'Calculateur de risque', d: 'Taille de position et stop en fonction de ton capital et de ta tolérance.', icon: 'M12 3v18M7 7h7a3 3 0 0 1 0 6H7m0 0h8a3 3 0 0 1 0 6H7',
    body: 'Tu entres capital, risque par trade (ex. 1%), entrée et stop. Il calcule la taille de position exacte. Plus de "j’ai pris 0.5 parce que ça avait l’air bien" — le chiffre est défendable.' },
  { slug: 'journal', t: 'Journal de trades', d: 'Documente chaque plan avant l’entrée. La discipline devient une habitude.', icon: 'M4 5h16v14H4zM4 9h16M9 5v14',
    body: 'Le journal est ton miroir. Avant l’entrée : contexte, setup, stop, target. Après : ce qui est arrivé et ce que tu as ressenti. En relisant, tu vois tes biais récurrents mieux que tout coach.' },
  { slug: 'veille', t: 'Veille marché', d: 'Niveaux clés à surveiller, mis à jour chaque session.', icon: 'M12 2v4M12 18v4M2 12h4M18 12h4',
    body: 'Chaque session, tu notes les niveaux qui comptent (résistance daily, zone de value, events). La veille transforme l’actualité en cartes à jouer, pas en bruit.' },
];

export const plans = [
  { nom: 'Découverte', prix: '0€', periode: 'gratuit', feat: ['Module 01 — Lire le prix', 'Screener de base', 'Accès communauté'], cta: 'Commencer', hl: false },
  { nom: 'Trader', prix: '29€', periode: '/ mois', feat: ['Les 4 modules', 'Calculateur de risque', 'Journal de trades', 'Veille marché'], cta: 'Rejoindre', hl: true },
  { nom: 'Pro', prix: '79€', periode: '/ mois', feat: ['Tout Trader', 'Setups en live', 'Coaching mensuel', 'Support prioritaire'], cta: 'Passer Pro', hl: false },
];

import { modulesEs, toolsEs, plansEs } from './content.es';
export function getContent(lang: 'fr' | 'es' = 'fr') {
  if (lang === 'es') return { modules: modulesEs, tools: toolsEs, plans: plansEs, marketTickers };
  return { modules, tools, plans, marketTickers };
}
