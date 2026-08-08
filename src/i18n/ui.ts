// i18n minimaliste, sans dépendance — FR + ES latino.
// Usage dans un composant:
//   import { getLang, t, localizedPath } from '../../i18n/ui';
//   const lang = getLang(Astro.url);
//   <h1>{t(lang, 'home.heroTitle')}</h1>
//   <a href={localizedPath('/modules/', lang)}>…

import fr from './fr';
import es from './es';

export const SUPPORTED = ['fr', 'es'] as const;
export type Lang = (typeof SUPPORTED)[number];
export type Dict = Record<string, string>;
export const DEFAULT_LANG: Lang = 'fr';
export const dictionaries: Record<Lang, Dict> = { fr, es };

export function isLang(v: string | undefined | null): v is Lang {
  return !!v && (SUPPORTED as readonly string[]).includes(v);
}

// Déduit la langue depuis le path: /es/... -> 'es', sinon 'fr'
export function getLang(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean);
  const maybe = seg[0] === 'formation-vvs' ? seg[1] : seg[0];
  return isLang(maybe) ? maybe : DEFAULT_LANG;
}

// Traduction: t(lang, 'key') -> string. Retourne la clé si manquante (debug).
export function t(lang: Lang, key: string): string {
  const d = dictionaries[lang] || dictionaries[DEFAULT_LANG];
  return d[key] ?? dictionaries[DEFAULT_LANG][key] ?? key;
}

// Préfixe de langue pour les URLs (fr = pas de préfixe pour rester clean)
export function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

// Construit un chemin localisé: localizedPath('/modules/', 'es') -> '/formation-vvs/es/modules/'
export function localizedPath(path: string, lang: Lang): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${langPrefix(lang)}${p}`;
}
