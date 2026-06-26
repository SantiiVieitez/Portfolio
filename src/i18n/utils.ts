import { ui, defaultLang, type Lang } from './ui';

/** Devuelve el idioma a partir de la URL (`/en/...` => 'en', resto => 'es'). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

/** Helper de traducción para un idioma dado. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Ruta equivalente en el otro idioma (para el toggle). */
export function getAlternateUrl(url: URL): string {
  const current = getLangFromUrl(url);
  return current === 'en' ? '/' : '/en/';
}

/** Prefija una ruta interna con el locale activo. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'en' ? `/en${clean === '/' ? '/' : clean}` : clean;
}
