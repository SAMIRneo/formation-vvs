export function GET() { return new Response('User-agent: *\nAllow: /\nSitemap: https://samirneo.github.io/formation-vvs/sitemap.xml\n', { headers: { 'Content-Type': 'text/plain' } }); }
