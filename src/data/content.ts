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
  { n: '01', slug: 'lire-le-prix', title: 'Lire le prix', desc: 'Structure de marché, chandeliers, niveaux. Les fondations sans le bruit.', tag: 'Débutant', accent: 'orange' as const,
    body: 'Tu ne trades pas un prix, tu lis une structure. Cette module te donne le vocabulaire : chandeliers (corps, mèche, couleur), supports et résistances, et pourquoi le niveau tenu hier pèse encore aujourd’hui. À la fin, tu identifies un range, une cassure et une zone de value — sans indicateur.' },
  { n: '02', slug: 'analyse-technique', title: 'Analyse technique', desc: 'Tendances, figures de retournement, volume. Ta grille de lecture.', tag: 'Intermédiaire', accent: 'bleu' as const,
    body: 'La tendance est ton amie jusqu’à ce qu’elle ne le soit plus. Tu apprends à la tracer, à repérer les figures de retournement (tête-épaules, double bottom) et à lire le volume comme confirmation. Le bruit des 15 min s’efface devant une lecture 4H propre.' },
  { n: '03', slug: 'gestion-du-risque', title: 'Gestion du risque', desc: 'Taille de position, stop, psychologie. Survivre d’abord.', tag: 'Clé', accent: 'jaune' as const,
    body: 'Un trade sans stop n’est pas un trade, c’est une prière. Tu calcules la taille de position à partir de ton capital et de ta tolérance (1% par trade), tu places le stop AVANT l’entrée, et tu traites la perte comme un coût d’exploitation — pas comme une insulte.' },
  { n: '04', slug: 'setups-en-live', title: 'Setups en live', desc: 'Plans de trade documentés, récits de marché réels.', tag: 'Avancé', accent: 'emeraude' as const,
    body: 'La théorie rencontre le réel. Tu documentes chaque plan avant l’entrée (pourquoi, où, stop, target), puis tu revois les récits de marché annotés : ce qui a marché, ce qui a raté, et pourquoi. La répétition calibre ton œil.' },
];

export const cours = [
  { n: '01', t: 'Lire le prix', d: 'Cours, chandeliers, support/résistance. Ce que tout le reste suppose.', dur: '3 h', lvl: 'Débutant' },
  { n: '02', t: 'Analyse technique', d: 'Tendances, figures, volume. Construis ta grille de lecture.', dur: '5 h', lvl: 'Intermédiaire' },
  { n: '03', t: 'Gestion du risque', d: 'Taille de position, stop, plan de trade. La discipline avant le signal.', dur: '2 h', lvl: 'Clé' },
  { n: '04', t: 'Setups en live', d: 'Plans documentés + récits de marché réels annotés.', dur: 'Illimité', lvl: 'Avancé' },
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
