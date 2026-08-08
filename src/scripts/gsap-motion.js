// FormationVVS — motion GSAP (scroll reveal + parallax + draw-on SVG)
// Respecte prefers-reduced-motion. Fallback statique si GSAP indisponible.
// Révélation via classe .in (opacity gérée par CSS) — pas de autoAlpha (conflit
// avec le [data-reveal]{opacity:0} du CSS et risque visibility:hidden permanent).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Force la révélation de tous les [data-reveal] (utilisé en fallback ET en safety net).
function revealAll() {
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.classList.add('in');
    if (gsap) gsap.set(el, { y: 0 }); // annule tout y:28 résiduel du reveal
  });
}

if (reduce || !gsap || !ScrollTrigger) {
  revealAll();
} else {
  try {
    gsap.registerPlugin(ScrollTrigger);

    // 0) Titres : split-reveal (mots) + line-reveal (hero) + pulse CTA au scroll
    function revealTitles() {
      document.querySelectorAll('.anim-title, .anim-hero').forEach((el) => {
        el.querySelectorAll('.word, .line-inner').forEach((w) => { w.style.opacity = '1'; w.style.transform = 'none'; });
      });
    }
    function splitWords(el) {
      const text = el.textContent;
      el.innerHTML = text.split(/(\s+)/).map((w) => w.trim() === '' ? w : `<span class="word" style="display:inline-block; will-change:transform">${w}</span>`).join('');
      return [...el.querySelectorAll('.word')];
    }
    function splitLines(el) {
      const parts = el.innerHTML.split(/<br\s*\/?>/i);
      el.innerHTML = parts.map((p) => `<span class="line" style="display:block; overflow:hidden"><span class="line-inner" style="display:block; will-change:transform">${p}</span></span>`).join('');
      return [...el.querySelectorAll('.line-inner')];
    }
    document.querySelectorAll('.anim-title').forEach((el) => {
      const words = splitWords(el);
      gsap.set(words, { yPercent: 120, opacity: 0 });
      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to(words, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: 'power3.out' }) });
    });
    document.querySelectorAll('.anim-hero').forEach((el) => {
      const lines = splitLines(el);
      gsap.set(lines, { yPercent: 110 });
      ScrollTrigger.create({ trigger: el, start: 'top 95%', once: true, onEnter: () => gsap.to(lines, { yPercent: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out' }) });
    });
    document.querySelectorAll('.anim-cta').forEach((btn) => {
      ScrollTrigger.create({ trigger: btn, start: 'top 92%', once: true, onEnter: () => {
        gsap.fromTo(btn, { scale: 0.92 }, { scale: 1, duration: 0.6, ease: 'back.out(2.2)' });
        btn.classList.add('cta-pulse'); setTimeout(() => btn.classList.remove('cta-pulse'), 1100);
      } });
    });

    // 1) Scroll-reveal : les éléments data-parallax gardent .in (opacity via CSS)
    //    mais leur transform est géré par le parallax (pas de conflit de transform).
    const items = gsap.utils.toArray('[data-reveal]');
    items.forEach((el) => {
      if (el.hasAttribute('data-parallax')) { el.classList.add('in'); return; } // transform -> parallax
      const delay = Number(el.getAttribute('data-reveal-delay') || 0) / 1000;
      const inView = el.getBoundingClientRect().top < window.innerHeight * 0.95;
      if (inView) {
        el.classList.add('in');
        gsap.fromTo(el, { y: 28 }, { y: 0, duration: 0.7, delay, ease: 'power3.out' });
      } else {
        el.classList.add('in');
        gsap.fromTo(el, { y: 28 }, {
          y: 0, duration: 0.7, delay, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });
      }
    });

    // 2) Parallax générique sur tous [data-parallax] (vitesse = valeur de l'attribut).
    //    Les cartes "flottent" : chaque widget se décale verticalement au scroll.
    //    .in est ajouté ici aussi (au cas où le reveal ne l'a pas fait) pour l'opacity.
    gsap.utils.toArray('[data-parallax]').forEach((el) => {
      el.classList.add('in');
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      gsap.to(el, {
        yPercent: speed * 160,
        ease: 'none',
        scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    });

    // 3) Draw-on des diagrammes SVG ChapterDiagram au scroll
    gsap.utils.toArray('.cd__svg .cd__line').forEach((line) => {
      const len = line.getTotalLength ? line.getTotalLength() : 800;
      gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(line, { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut', scrollTrigger: { trigger: line.closest('.cd') || line, start: 'top 85%', once: true } });
    });
    gsap.utils.toArray('.cd__fill').forEach((f) => {
      gsap.fromTo(f, { scale: 0.92, transformOrigin: 'center', autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.7)', scrollTrigger: { trigger: f.closest('.cd') || f, start: 'top 85%', once: true } });
    });

    // 4) Hover physics léger sur .btn (magnetic subtle)
    if (window.matchMedia('(pointer:fine)').matches) {
      document.querySelectorAll('.btn').forEach((b) => {
        b.addEventListener('pointermove', (e) => {
          const r = b.getBoundingClientRect();
          const mx = (e.clientX - r.left) / r.width - 0.5;
          const my = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(b, { x: mx * 6, y: my * 6, duration: 0.3, ease: 'power2.out' });
        });
        b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' }));
      });
    }

    // 5) Safety net : après 1.2s, on force .in sur tout ce qui traînerait caché
    //    + revealTitles() (au cas où un ScrollTrigger de titre/CTAm ne se déclenche pas).
    ScrollTrigger.refresh();
    setTimeout(revealAll, 1200);
    setTimeout(revealTitles, 2000);
  } catch (e) {
    revealAll();
    revealTitles();
  }
}
