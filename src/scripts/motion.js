// FormationVVS — moteur de mouvement léger (zéro dépendance)
// Reveals staggered, ripple tactile, market board "live", respect reduced-motion.
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- 1) Reveals au scroll (stagger via data-reveal-delay) ----
  const reveals = Array.from(document.querySelectorAll('[data-reveal]'));
  if (reveals.length && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const d = e.target.getAttribute('data-reveal-delay') || 0;
          setTimeout(() => e.target.classList.add('in'), Number(d));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ---- 2) Ripple tactile sur .btn et .tabbar__item ----
  function attachRipple(els) {
    els.forEach((el) => {
      el.addEventListener('pointerdown', (ev) => {
        if (reduce) return;
        const r = el.getBoundingClientRect();
        const size = Math.max(r.width, r.height);
        const rip = document.createElement('span');
        rip.className = 'ripple';
        rip.style.width = rip.style.height = size + 'px';
        rip.style.left = (ev.clientX - r.left - size / 2) + 'px';
        rip.style.top = (ev.clientY - r.top - size / 2) + 'px';
        el.appendChild(rip);
        setTimeout(() => rip.remove(), 600);
      });
    });
  }
  attachRipple(document.querySelectorAll('.btn'));
  attachRipple(document.querySelectorAll('.tabbar__item'));

  // ---- 3) Market board LIVE (CoinGecko crypto + open.er-api FX, sans clé, CORS *) ----
  const board = document.getElementById('market-board');
  if (board) {
    const tiles = Array.from(board.querySelectorAll('.tile'));
    const fmtPrice = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: n >= 100 ? 2 : 4 }).replace(/ /g, ' ');
    const setTile = (sym, price, chg, dir) => {
      const tile = tiles.find((t) => t.dataset.sym === sym);
      if (!tile) return;
      const priceEl = tile.querySelector('[data-price]');
      const chgEl = tile.querySelector('[data-chg]');
      if (priceEl) {
        const prev = parseFloat(priceEl.dataset.val || 'NaN');
        priceEl.textContent = fmtPrice(price);
        priceEl.dataset.val = price;
        if (!reduce && !isNaN(prev) && prev !== price) {
          tile.classList.remove('flash-up', 'flash-down');
          void tile.offsetWidth; // reflow pour relancer l'anim
          tile.classList.add(price >= prev ? 'flash-up' : 'flash-down');
        }
      }
      if (chgEl) {
        chgEl.textContent = chg;
        chgEl.className = `tile__badge badge ${dir === 'up' ? 'badge--up' : 'badge--down'}`;
      }
      tile.classList.toggle('tile--up', dir === 'up');
      tile.classList.toggle('tile--down', dir === 'down');
    };
    const CG_IDS = tiles.filter((t) => t.dataset.source === 'cg').map((t) => t.dataset.sym);
    async function refresh() {
      try {
        const cg = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${CG_IDS.join(',')}&order=market_cap_desc&price_change_percentage=24h`, { cache: 'no-store' });
        if (cg.ok) {
          const data = await cg.json();
          data.forEach((c) => {
            const pct = c.price_change_percentage_24h ?? 0;
            const dir = pct >= 0 ? 'up' : 'down';
            setTile(c.id, c.current_price, `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%`, dir);
          });
        }
      } catch (e) { /* échec réseau : on garde la dernière valeur affichée */ }
      try {
        const fx = await fetch('https://open.er-api.com/v6/latest/USD', { cache: 'no-store' });
        if (fx.ok) {
          const j = await fx.json();
          if (j.rates && j.rates.EUR) {
            const eurUsd = 1 / j.rates.EUR;
            const prevEl = board.querySelector('.tile[data-sym="eurusd"] [data-price]');
            const prev = prevEl ? parseFloat(prevEl.dataset.val || 'NaN') : NaN;
            const dir = isNaN(prev) ? 'up' : (eurUsd >= prev ? 'up' : 'down');
            setTile('eurusd', eurUsd, 'LIVE', dir);
          }
        }
      } catch (e) { /* ignore */ }
    }
    refresh();
    setInterval(refresh, 30000);
  }

  // ---- 4) Tilt léger sur cartes (desktop, pointer fine) ----
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  // ---- 5) Parallax léger (héro) : translateY selon le scroll ----
  const pxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  if (pxEls.length && !reduce) {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      pxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
        el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }
})();
