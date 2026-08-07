// Source de vérité unique — contenu du site FormationVVS
// Édite ici pour changer les cours / outils / plans / marché.

export const marketTickers = [
  { sym: 'BTC/EUR', price: '61 240', chg: '+2.4%', dir: 'up' as const },
  { sym: 'ETH/EUR', price: '3 180', chg: '+1.1%', dir: 'up' as const },
  { sym: 'EUR/USD', price: '1.0842', chg: '-0.3%', dir: 'down' as const },
  { sym: 'XAU/EUR', price: '2 210', chg: '+0.7%', dir: 'up' as const },
  { sym: 'CAC 40', price: '8 142', chg: '-0.5%', dir: 'down' as const },
  { sym: 'S&P 500', price: '5 430', chg: '+0.9%', dir: 'up' as const },
];

export const modules = [
  { n: '01', title: 'Lire le prix', desc: 'Structure de marché, chandeliers, niveaux. Les fondations sans le bruit.', tag: 'Débutant', accent: 'orange' as const, href: '/formation/' },
  { n: '02', title: 'Analyse technique', desc: 'Tendances, figures de retournement, volume. Ta grille de lecture.', tag: 'Intermédiaire', accent: 'bleu' as const, href: '/formation/' },
  { n: '03', title: 'Gestion du risque', desc: 'Taille de position, stop, psychologie. Survivre d’abord.', tag: 'Clé', accent: 'jaune' as const, href: '/formation/' },
  { n: '04', title: 'Setups en live', desc: 'Plans de trade documentés, récits de marché réels.', tag: 'Avancé', accent: 'emeraude' as const, href: '/formation/' },
];

export const cours = [
  { n: '01', t: 'Lire le prix', d: 'Cours, chandeliers, support/résistance. Ce que tout le reste suppose.', dur: '3 h', lvl: 'Débutant' },
  { n: '02', t: 'Analyse technique', d: 'Tendances, figures, volume. Construis ta grille de lecture.', dur: '5 h', lvl: 'Intermédiaire' },
  { n: '03', t: 'Gestion du risque', d: 'Taille de position, stop, plan de trade. La discipline avant le signal.', dur: '2 h', lvl: 'Clé' },
  { n: '04', t: 'Setups en live', d: 'Plans documentés + récits de marché réels annotés.', dur: 'Illimité', lvl: 'Avancé' },
];

export const tools = [
  { t: 'Screener de setups', d: 'Filtre les marchés par structure (range, cassure, retournement) en un coup d’œil.', icon: 'M3 12h4l3-8 4 16 3-8h4' },
  { t: 'Calculateur de risque', d: 'Taille de position et stop en fonction de ton capital et de ta tolérance.', icon: 'M12 3v18M7 7h7a3 3 0 0 1 0 6H7m0 0h8a3 3 0 0 1 0 6H7' },
  { t: 'Journal de trades', d: 'Documente chaque plan avant l’entrée. La discipline devient une habitude.', icon: 'M4 5h16v14H4zM4 9h16M9 5v14' },
  { t: 'Veille marché', d: 'Niveaux clés à surveiller, mis à jour chaque session.', icon: 'M12 2v4M12 18v4M2 12h4M18 12h4' },
];

export const plans = [
  { nom: 'Découverte', prix: '0€', periode: 'gratuit', feat: ['Module 01 — Lire le prix', 'Screener de base', 'Accès communauté'], cta: 'Commencer', hl: false },
  { nom: 'Trader', prix: '29€', periode: '/ mois', feat: ['Les 4 modules', 'Calculateur de risque', 'Journal de trades', 'Veille marché'], cta: 'Rejoindre', hl: true },
  { nom: 'Pro', prix: '79€', periode: '/ mois', feat: ['Tout Trader', 'Setups en live', 'Coaching mensuel', 'Support prioritaire'], cta: 'Passer Pro', hl: false },
];
