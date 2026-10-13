// Content is visible before enhancement. Motion only introduces sections once.
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduce && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.animate(
          [
            { opacity: 0.5, transform: "translateY(10px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 350, easing: "cubic-bezier(.2,.7,.3,1)" },
        );
        observer.unobserve(entry.target);
      }),
    { root: document.getElementById("scroll-root"), threshold: 0.08 },
  );
  document
    .querySelectorAll("[data-reveal],.curriculum-heading,.lab-heading")
    .forEach((el) => observer.observe(el));
}
const board = document.querySelector("[data-live]");
if (board) {
  const es = document.documentElement.lang === "es";
  const format = new Intl.NumberFormat(es ? "es-ES" : "fr-FR", {
    maximumFractionDigits: 4,
  });
  const dateFormat = new Intl.DateTimeFormat(es ? "es-ES" : "fr-FR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const status = board.querySelector("[data-market-status]");
  const button = board.querySelector("[data-refresh]");
  const tiles = [...board.querySelectorAll("[data-sym]")];
  async function request(url) {
    const r = await fetch(url, {
      cache: "no-store",
      signal: AbortSignal.timeout(9000),
    });
    if (!r.ok) throw Error("Provider unavailable");
    return r.json();
  }
  function setTile(id, price, change, date) {
    if (!Number.isFinite(price) || price <= 0) throw Error("Invalid price");
    const stamp = new Date(date);
    if (!Number.isFinite(stamp.getTime())) throw Error("Invalid timestamp");
    const tile = tiles.find((t) => t.dataset.sym === id);
    if (!tile) return;
    tile.querySelector("[data-price]").textContent = format.format(price);
    const chg = tile.querySelector("[data-chg]");
    chg.textContent = Number.isFinite(change)
      ? (change >= 0 ? "+" : "") + format.format(change) + " %"
      : es
        ? "Referencia"
        : "Référence";
    tile.classList.toggle("tile--up", Number.isFinite(change) && change >= 0);
    tile.classList.toggle("tile--down", Number.isFinite(change) && change < 0);
    tile.querySelector("time").dateTime = stamp.toISOString();
    tile.querySelector("time").textContent =
      (es ? "Fuente: " : "Source : ") + dateFormat.format(stamp);
    tile.dataset.loaded = "true";
    tile.dataset.stale = "false";
  }
  async function refresh() {
    button.disabled = true;
    status.textContent = es
      ? "Consultando proveedores…"
      : "Interrogation des fournisseurs…";
    const results = await Promise.allSettled([
      (async () => {
        const ids = tiles
          .filter((t) => t.dataset.source === "cg")
          .map((t) => t.dataset.sym);
        const data = await request(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=" +
            ids.join(",") +
            "&order=market_cap_desc&price_change_percentage=24h",
        );
        if (!Array.isArray(data)) throw Error("Invalid response");
        for (const id of ids) {
          const c = data.find((c) => c.id === id);
          if (!c) throw Error("Missing asset");
          setTile(
            c.id,
            c.current_price,
            c.price_change_percentage_24h,
            c.last_updated,
          );
        }
      })(),
      (async () => {
        const data = await request("https://open.er-api.com/v6/latest/USD");
        if (
          data.result !== "success" ||
          !Number.isFinite(data.rates?.EUR) ||
          data.rates.EUR <= 0
        )
          throw Error("Invalid FX");
        setTile("eurusd", 1 / data.rates.EUR, null, data.time_last_update_utc);
      })(),
    ]);
    results.forEach((r, i) => {
      if (r.status === "rejected")
        tiles
          .filter((t) => t.dataset.source === (i ? "fx" : "cg"))
          .forEach((t) => {
            t.dataset.stale = "true";
            const time = t.querySelector("time");
            time.textContent =
              (es ? "Proveedor no disponible" : "Fournisseur indisponible") +
              (t.dataset.loaded === "true"
                ? (es ? " · referencia del " : " · référence du ") +
                  dateFormat.format(new Date(time.dateTime))
                : "");
          });
    });
    const failed = results.some((r) => r.status === "rejected");
    status.textContent = failed
      ? es
        ? "Datos incompletos. Puedes volver a intentarlo."
        : "Données incomplètes. Tu peux réessayer."
      : es
        ? "Referencias recibidas. Consulta la fecha de cada fuente."
        : "Références reçues. Consulte la date de chaque source.";
    button.disabled = false;
  }
  button.addEventListener("click", refresh);
  refresh();
}
