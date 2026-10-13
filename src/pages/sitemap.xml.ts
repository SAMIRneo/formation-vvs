import { curriculum } from "../data/curriculum";
const paths = [
  "",
  "modules/",
  "marche/",
  "abonnement/",
  "contact/",
  "ressources/",
  ...curriculum().map((m) => `modules/${m.slug}/`),
  ...["calculateur", "screener", "journal", "veille"].map(
    (s) => `outils/${s}/`,
  ),
];
export function GET() {
  const origin = "https://samirneo.github.io/formation-vvs/";
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${origin}${path}</loc></url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
