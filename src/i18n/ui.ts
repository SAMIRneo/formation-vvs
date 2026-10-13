import fr from "./fr";
// Component argument compatibility; routing and public content are French only.
export type Lang = "fr" | "es";
export const DEFAULT_LANG: Lang = "fr";
export function getLang(_url: URL): Lang {
  return DEFAULT_LANG;
}
export function t(_lang: Lang, key: string): string {
  return (fr as Record<string, string>)[key] ?? key;
}
export function localizedPath(path: string, _lang: Lang = "fr"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + (path.startsWith("/") ? path : "/" + path);
}
