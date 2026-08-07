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

  // ---- 3) Market board "live" (simulation douce, respect reduce) ----
  const tiles = Array.from(document.querySelectorAll('.tile[data-base]'));
  if (tiles.length && !reduce) {
    const fmt = (n) => n.toLocaleString('fr-FR').replace(/,/g, ' ');
    setInterval(() => {
      tiles.forEach((t) => {
        const base = parseFloat(t.getAttribute('data-base'));
        const drift = (Math.random() - 0.5) * base * 0.004; // ±0.2%
        const next = Math.max(1, Math.round(base + drift));
        const priceEl = t.querySelector('.tile__price');
        if (!priceEl) return;
        const prev = parseFloat((priceEl.dataset.val || base));
        priceEl.textContent = fmt(next);
        priceEl.dataset.val = next;
        t.classList.remove('flash-up', 'flash-down');
        void t.offsetWidth; // reflow pour relancer l'anim
        t.classList.add(next >= prev ? 'flash-up' : 'flash-down');
      });
    }, 2600);
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
})();
