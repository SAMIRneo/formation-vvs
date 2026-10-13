import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const files = fs
  .readdirSync("dist", { recursive: true })
  .filter((p) => p.endsWith(".html"));
assert.equal(files.length, 14);
let links = 0;
for (const file of files) {
  const html = fs.readFileSync(path.join("dist", file), "utf8");
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    file + " must have exactly one H1",
  );
  assert.ok(/<meta name="description"/.test(html), file + " description");
  assert.ok(
    /<link rel="canonical" href="https:\/\/samirneo.github.io\/formation-vvs\//.test(
      html,
    ),
    file + " canonical",
  );
  assert.ok(
    !html.includes("/formation-vvs/es/") && !html.includes('hreflang="es"'),
    file + " no Spanish route",
  );
  assert.ok(html.includes('<html lang="fr"'), file + " French language");
  assert.ok(
    !/https:\/\/(?:discord.gg|t.me)\/(?:["\s]|formationvvs)/.test(html),
    file + " placeholder socials",
  );
  assert.ok(
    !html.includes("TAILLE DU LOT") && !html.includes("TAMAÑO DEL LOTE"),
    file + " unit terminology",
  );
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, file + " duplicate IDs");
  for (const m of html.matchAll(
    /(?:href|src)="(\/formation-vvs\/[^"#?]*)[^"]*"/g,
  )) {
    const relative = decodeURIComponent(m[1]).slice("/formation-vvs/".length);
    if (!relative) continue;
    const target = path.join("dist", relative);
    assert.ok(
      fs.existsSync(target) || fs.existsSync(path.join(target, "index.html")),
      file + " broken link " + m[1],
    );
    links++;
  }
  if (
    /modules[\\/](lire-le-prix|analyse-technique|gestion-du-risque|setups-en-live)/.test(
      file,
    )
  )
    assert.equal(
      (html.match(/data-practice /g) || []).length,
      4,
      file + " must have four exercises",
    );
}
assert.ok(fs.existsSync("dist/sitemap.xml"));
assert.ok(fs.existsSync("dist/robots.txt"));
assert.ok(fs.existsSync("dist/social-card.png"));
console.log(
  `Verified ${files.length} pages, ${links} internal links, metadata, languages and exercises.`,
);
