// FormationVVS — motion GSAP (scroll reveal stagger + parallax + draw-on SVG)
// Respecte prefers-reduced-motion. Fallback statique si GSAP indisponible.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll() {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('in'));
}

if (reduce || !gsap || !ScrollTrigger) {
  // Pas de motion: on affiche tout directement
  revealAll();
} else {
  try {
    gsap.registerPlugin(ScrollTrigger);

    // 1) Scroll-reveal stagger sur les [data-reveal]
    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      const delay = Number(el.getAttribute('data-reveal-delay') || 0) / 1000;
      gsap.fromTo(el,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1, y: 0, duration: 0.7, delay, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onStart: () => el.classList.add('in'),
        }
      );
    });

    // 2) Parallax héro renforcé
    const bg = document.querySelector('[data-parallax="0.18"]');
    const grid = document.querySelector('[data-parallax="0.08"]');
    if (bg) {
      gsap.to(bg, { yPercent: 18, ease: 'none', scrollTrigger: { trigger: bg.closest('section') || bg, start: 'top top', end: 'bottom top', scrub: true } });
    }
    if (grid) {
      gsap.to(grid, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: grid.closest('section') || grid, start: 'top top', end: 'bottom top', scrub: true } });
    }

    // 3) Draw-on des diagrammes SVG ChapterDiagram au scroll
    gsap.utils.toArray('.cd__svg .cd__line').forEach((line) => {
      const len = line.getTotalLength ? line.getTotalLength() : 800;
      gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(line, {
        strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut',
        scrollTrigger: { trigger: line.closest('.cd') || line, start: 'top 85%', once: true },
      });
    });
    gsap.utils.toArray('.cd__fill').forEach((f) => {
      gsap.fromTo(f, { scale: 0.92, transformOrigin: 'center', autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: f.closest('.cd') || f, start: 'top 85%', once: true } });
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
  } catch (e) {
    // GSAP a foiré à l'exécution: on révèle tout pour ne jamais bloquer le contenu
    revealAll();
  }
}
