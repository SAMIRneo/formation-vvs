// URL de base unique — dérivée de astro.config.mjs (base: '/formation-vvs').
// Tous les liens internes passent par BASE_URL pour que le site marche
// en local (/formation-vvs/), en prod GitHub Pages, et si on renomme le repo.
export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
