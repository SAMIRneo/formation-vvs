// Source de vérité unique — contenu du site FormationVVS
// Édite ici pour changer les cours / outils / plans / marché.
// Les liens internes utilisent BASE_URL (cf. consts.ts) pour marcher en local + GitHub Pages.

import { curriculum } from "./curriculum";
export const modules = curriculum("fr");

export const tools = [
  {
    slug: "screener",
    t: "Screener de setups",
    d: "Explore un catalogue fictif de structures : range, cassure, retournement.",
    icon: "M3 12h4l3-8 4 16 3-8h4",
    body: "Ce catalogue illustratif permet de comparer des structures et de comprendre les filtres. Les exemples sont fictifs : ce ne sont ni des cours actualisés ni des signaux de trading.",
  },
  {
    slug: "calculateur",
    t: "Calculateur de risque",
    d: "Quantité au comptant, perte estimée, frais et seuil d’équilibre.",
    icon: "M12 3v18M7 7h7a3 3 0 0 1 0 6H7m0 0h8a3 3 0 0 1 0 6H7",
    body: "Un modèle pédagogique d’achat au comptant : renseigne un capital fictif, un budget, une entrée, un stop, un objectif et des frais. La quantité est exprimée en unités et plafonnée au capital disponible.",
  },
  {
    slug: "journal",
    t: "Journal de trades",
    d: "Documente chaque plan avant l’entrée. La discipline devient une habitude.",
    icon: "M4 5h16v14H4zM4 9h16M9 5v14",
    body: "Le journal est ton miroir. Avant l’entrée : contexte, setup, stop, target. Après : ce qui est arrivé et ce que tu as ressenti. En relisant plusieurs observations, tu peux repérer des habitudes et comparer tes décisions au plan initial.",
  },
  {
    slug: "veille",
    t: "Veille marché",
    d: "Ta liste personnelle de zones et d’événements à suivre.",
    icon: "M12 2v4M12 18v4M2 12h4M18 12h4",
    body: "Conserve tes zones, les dates et les événements à suivre. Cette liste est personnelle, enregistrée dans ce navigateur et ne se met pas à jour automatiquement.",
  },
];

export function getContent(_lang: "fr" | "es" = "fr") {
  return { modules, tools };
}
