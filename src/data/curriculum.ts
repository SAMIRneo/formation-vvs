const lessons = [
  {
    title: "Le chandelier japonais",
    diagram: "candles",
    body: "Une bougie décrit quatre prix sur une période : ouverture, plus haut, plus bas et clôture. Sa couleur compare la clôture à l’ouverture. Elle ne révèle ni le nombre d’acheteurs, ni la prochaine direction.",
    points: [
      "Ouverture 100, clôture 104 : corps haussier de 4.",
      "Plus haut 108, plus bas 98 : amplitude de 10.",
      "Une mèche décrit une excursion, pas une promesse de retournement.",
    ],
    question: "Où se situe la clôture d’une bougie haussière ?",
    answers: [
      "Au-dessus de l’ouverture",
      "Toujours au plus haut",
      "Sous l’ouverture",
    ],
    correct: 0,
    explanation:
      "La couleur vient de la comparaison ouverture / clôture. Le plus haut peut être supérieur à la clôture.",
  },
  {
    title: "Support & résistance",
    diagram: "levels",
    body: "Un niveau est une zone où le prix a déjà réagi. On formule une hypothèse de réaction et son invalidation. Une zone peut céder, même après plusieurs tests : chaque nouveau passage peut aussi absorber la liquidité disponible.",
    points: [
      "Délimite une zone, plutôt qu’un trait parfait.",
      "Observe les réactions et l’unité de temps.",
      "Le changement de rôle support / résistance reste une hypothèse.",
    ],
    question: "Trois tests d’un support garantissent-ils un rebond ?",
    answers: [
      "Oui, toujours",
      "Non, la zone peut céder",
      "Oui, si la zone est étroite",
    ],
    correct: 1,
    explanation:
      "L’historique aide à repérer une zone. Il ne garantit aucune réaction future.",
  },
  {
    title: "Range & fausse cassure",
    diagram: "range",
    body: "Dans un range, le prix évolue entre deux zones. Une sortie peut durer ou être réintégrée. Distingue une simple excursion d’une clôture extérieure et précise à l’avance ce qui invaliderait ton scénario.",
    points: [
      "Trace les deux bornes sur une période cohérente.",
      "Une cassure peut échouer.",
      "Attendre une information supplémentaire a un coût : une entrée plus tardive.",
    ],
    question:
      "Le prix dépasse une borne puis revient dans le range. On observe…",
    answers: [
      "Une tendance garantie",
      "Une sortie réintégrée",
      "Une erreur du graphique",
    ],
    correct: 1,
    explanation:
      "La réintégration remet en cause l’hypothèse de cassure durable.",
  },
  {
    title: "Lire dans le contexte",
    diagram: "context",
    body: "Une forme de bougie change de sens selon sa position, la volatilité et l’horizon étudié. Le graphique décrit le passé. Commence par la structure générale, puis rapproche-toi de la zone étudiée sans chercher un signal à tout prix.",
    points: [
      "Annonce ton horizon avant l’analyse.",
      "Distingue description, hypothèse et décision.",
      "Deux unités de temps peuvent montrer des structures différentes.",
    ],
    question:
      "Une hausse en cinq minutes peut-elle coexister avec une baisse journalière ?",
    answers: ["Non", "Oui, les horizons diffèrent", "Uniquement en crypto"],
    correct: 1,
    explanation:
      "Les mouvements courts peuvent être des corrections dans une structure plus longue.",
  },
  {
    title: "La structure de tendance",
    diagram: "trend",
    body: "Des sommets et creux ascendants décrivent une tendance haussière sur l’horizon choisi. Une rupture de cette séquence incite à réévaluer l’analyse. Elle ne suffit pas, seule, à prouver qu’une nouvelle tendance a commencé.",
    points: [
      "Repère des pivots cohérents, pas chaque variation.",
      "Une tendance dépend de l’horizon.",
      "Décris ce qui ferait changer ton hypothèse.",
    ],
    question: "Quels pivots décrivent une hausse ?",
    answers: [
      "Sommets et creux ascendants",
      "Seulement une bougie verte",
      "Creux toujours identiques",
    ],
    correct: 0,
    explanation:
      "On observe une séquence de pivots, pas seulement la couleur du dernier chandelier.",
  },
  {
    title: "Figures : hypothèses visuelles",
    diagram: "reversal",
    body: "Double sommet, double creux et épaule-tête-épaule sont des descriptions de formes. Leur reconnaissance est subjective. Définis la zone, le déclencheur et l’invalidation ; conserve les exemples ratés autant que les réussites.",
    points: [
      "Une figure ne garantit pas un retournement.",
      "Les exemples choisis après coup peuvent tromper.",
      "Compare des règles explicites sur plusieurs observations.",
    ],
    question: "Que manque-t-il à une figure seule ?",
    answers: [
      "Un objectif éloigné, à lui seul",
      "Un contexte et une invalidation",
      "La même taille de position sur chaque marché",
    ],
    correct: 1,
    explanation:
      "Une forme devient une hypothèse testable quand ses conditions et ses limites sont explicites.",
  },
  {
    title: "Volume & participation",
    diagram: "volume",
    body: "Le volume mesure une quantité échangée selon la source. Il apporte du contexte, sans identifier automatiquement le sens du prochain mouvement. En crypto, il dépend de la plateforme ; sur certains marchés de change, il s’agit d’un volume de ticks.",
    points: [
      "Compare des données de même source et horizon.",
      "Volume élevé signifie activité, pas réussite.",
      "Vérifie ce que mesure ton fournisseur.",
    ],
    question: "Un volume élevé prouve-t-il que le prix va monter ?",
    answers: ["Oui", "Non, il mesure l’activité", "Seulement à la clôture"],
    correct: 1,
    explanation:
      "Chaque échange implique une contrepartie. L’activité n’est pas une garantie directionnelle.",
  },
  {
    title: "Pullback & retest",
    diagram: "pullback",
    body: "Après une sortie de zone, le prix peut revenir vers l’ancien niveau : c’est un retest. Ce retour peut tenir, traverser la zone ou ne jamais se produire. Prépare ces trois possibilités plutôt que de forcer une entrée.",
    points: [
      "Retest possible, jamais obligatoire.",
      "Définis ce qu’est une réaction acceptable.",
      "L’absence d’occasion est une issue normale.",
    ],
    question: "Si le retest n’arrive pas…",
    answers: [
      "Il faut poursuivre le prix",
      "On peut rester sans position",
      "On doit élargir le stop pour entrer",
    ],
    correct: 1,
    explanation:
      "Un plan peut conduire à ne rien faire. C’est aussi une décision.",
  },
  {
    title: "Dimensionner une position",
    diagram: "positionsize",
    body: "Pour un achat au comptant à exposition linéaire : unités = budget de perte / distance entre entrée et stop. Exemple fictif : capital de 5 000 €, budget 1 % = 50 €, entrée 100 €, stop 95 € : 10 unités avant frais. Ce résultat n’est pas un nombre de lots.",
    points: [
      "Toutes les valeurs monétaires utilisent la même devise.",
      "Inclure frais et contraintes de quantité.",
      "Marge, contrats et levier exigent un modèle spécifique.",
    ],
    question: "50 € de budget / 5 € de distance donnent…",
    answers: ["10 unités", "1 lot garanti", "250 unités"],
    correct: 0,
    explanation:
      "50 / 5 = 10 unités dans ce modèle linéaire, avant frais et glissement.",
  },
  {
    title: "Invalider avant d’entrer",
    diagram: "stop",
    body: "Le stop matérialise un scénario d’invalidation. Un stop au marché devient un ordre au marché lorsqu’il est déclenché : son prix d’exécution peut différer du seuil, notamment lors d’un gap. Le budget calculé reste donc une estimation.",
    points: [
      "Définis le seuil avant la taille de position.",
      "Distingue stop au marché et stop à cours limité.",
      "Un stop ne garantit pas la perte maximale.",
    ],
    question: "Un stop au marché garantit-il son prix d’exécution ?",
    answers: ["Oui", "Non", "Oui si le montant est petit"],
    correct: 1,
    explanation:
      "Le déclenchement et l’exécution sont deux événements différents. Le glissement reste possible.",
  },
  {
    title: "Ratio & espérance",
    diagram: "rr",
    body: "Avec une perte de 1R et un gain de 3R, le seuil d’équilibre théorique est 25 % de réussites, avant frais : une victoire et trois pertes s’annulent. Le ratio annoncé ne suffit pas : il faut aussi la fréquence et les résultats réellement observés.",
    points: [
      "Équilibre = perte / (gain + perte).",
      "Espérance = fréquence des gains × gain moyen − fréquence des pertes × perte moyenne.",
      "Frais et glissement dégradent le résultat.",
    ],
    question: "Avec +3R ou −1R, le seuil brut est…",
    answers: ["25 %", "33 %", "75 %"],
    correct: 0,
    explanation:
      "1 / (3 + 1) = 25 %. Cela suppose que chaque gain et chaque perte correspondent à ces valeurs.",
  },
  {
    title: "Drawdown & décisions",
    diagram: "drawdown",
    body: "Le drawdown mesure le recul depuis un sommet de capital. Passer de 100 à 80 représente −20 % ; revenir de 80 à 100 exige +25 %. Une pause et une revue du processus peuvent être plus utiles que chercher à récupérer rapidement.",
    points: [
      "Compare toujours au dernier sommet.",
      "Sépare qualité du processus et résultat isolé.",
      "Évite d’augmenter l’exposition pour te refaire.",
    ],
    question: "Après −20 %, il faut gagner combien pour revenir au départ ?",
    answers: ["20 %", "25 %", "10 %"],
    correct: 1,
    explanation: "20 / 80 = 25 %. Le dénominateur a changé.",
  },
  {
    title: "Écrire un scénario",
    diagram: "plan",
    body: "Un scénario relie observation, condition et invalidation. Exemple fictif : si le prix revient dans une zone puis clôture au-dessus, j’étudie une entrée ; sinon je reste à l’écart. Ce document organise une décision, sans rendre le résultat certain.",
    points: [
      "Écris les conditions avant le résultat.",
      "Précise horizon, frais et budget.",
      "Prévois explicitement le scénario sans trade.",
    ],
    question: "Quel plan est vérifiable ?",
    answers: [
      "Ça devrait monter",
      "Si A se produit, je teste B ; sinon je m’abstiens",
      "Je verrai sur le moment",
    ],
    correct: 1,
    explanation:
      "Des conditions écrites permettent de comparer décision prévue et décision prise.",
  },
  {
    title: "Délimiter une zone",
    diagram: "zone",
    body: "Une zone regroupe des prix et non une entrée automatique. Définis ses limites et l’information recherchée. Une zone étroite peut donner un ratio séduisant tout en augmentant les sorties prématurées ; un petit stop n’est pas forcément un bon stop.",
    points: [
      "Précise les bornes et la source du graphique.",
      "Mesure la distance avant de dimensionner.",
      "Compare l’invalidation à la volatilité habituelle.",
    ],
    question: "Réduire artificiellement le stop garantit-il un meilleur plan ?",
    answers: [
      "Oui",
      "Non, la cohérence compte aussi",
      "Oui avec un grand objectif",
    ],
    correct: 1,
    explanation:
      "Un ratio élevé obtenu avec une invalidation incohérente n’améliore pas forcément l’espérance.",
  },
  {
    title: "Annoter sans réécrire le passé",
    diagram: "annotated",
    body: "Une annotation utile distingue les éléments connus au moment de la décision et ceux découverts ensuite. Les schémas de ce site sont illustratifs. Pour tester une méthode, conserve les dates, les conditions initiales, les coûts et les échecs.",
    points: [
      "Marque entrée, invalidation et cible hypothétiques.",
      "Cache la suite du graphique pendant l’exercice.",
      "Un bel exemple isolé ne valide pas une méthode.",
    ],
    question: "Pour réduire le biais rétrospectif, on…",
    answers: [
      "Affiche tout le futur",
      "Cache la suite avant de décider",
      "Supprime les échecs",
    ],
    correct: 1,
    explanation:
      "Décider avec les seules informations disponibles à cet instant réduit la reconstruction après coup.",
  },
  {
    title: "Journal & revue",
    diagram: "review",
    body: "Le journal conserve ton scénario, ton exécution et ton ressenti. Analyse plusieurs observations comparables avant de conclure. Le journal proposé ici reste local à ton navigateur : il sert à documenter des exercices et ne passe aucun ordre.",
    points: [
      "Sépare faits, interprétation et émotion.",
      "Relis aussi les occasions non prises.",
      "Exporte tes notes pour en conserver une copie.",
    ],
    question: "Une seule opération gagnante valide-t-elle une méthode ?",
    answers: [
      "Oui",
      "Non, il faut plusieurs observations",
      "Oui si le gain est élevé",
    ],
    correct: 1,
    explanation:
      "Un résultat isolé peut venir du hasard. La revue porte sur une série et sur le respect des règles.",
  },
] as const;
const metadata = [
  {
    n: "01",
    slug: "lire-le-prix",
    title: "Lire le prix",
    desc: "Décrire avant d’interpréter. Bougies, zones et contexte.",
    tag: "Observer",
    accent: "orange",
  },
  {
    n: "02",
    slug: "analyse-technique",
    title: "Relier les indices",
    desc: "Structure, volume, figures : construire une hypothèse.",
    tag: "Relier",
    accent: "bleu",
  },
  {
    n: "03",
    slug: "gestion-du-risque",
    title: "Calculer le risque",
    desc: "Budget, unités, stop et espérance. Les chiffres d’abord.",
    tag: "Mesurer",
    accent: "jaune",
  },
  {
    n: "04",
    slug: "setups-en-live",
    title: "Construire un scénario",
    desc: "Préparer, annoter et revoir des situations fictives.",
    tag: "Pratiquer",
    accent: "emeraude",
  },
] as const;
export function curriculum(_lang: "fr" | "es" = "fr") {
  return metadata.map((m, i) => ({
    ...m,
    body: "Lis la notion, explore le schéma puis vérifie ta compréhension. Les exemples sont pédagogiques et illustratifs ; ils ne constituent pas des recommandations d’investissement.",
    chapters: lessons.slice(i * 4, i * 4 + 4),
  }));
}
