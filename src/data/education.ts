import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface EducationItem {
  title: Localized;
  institution: Localized;
  period: Localized;
  note?: Localized;
}

export const education: EducationItem[] = [
  {
    title: {
      es: 'Ingeniería en Sistemas Informáticos',
      en: 'Systems Engineering',
    },
    institution: {
      es: 'Universidad Abierta Interamericana (UAI)',
      en: 'Universidad Abierta Interamericana (UAI)',
    },
    period: {
      es: '5.º año en curso',
      en: '5th year in progress',
    },
    note: {
      es: 'Título intermedio obtenido: Analista en Sistemas Informáticos.',
      en: 'Intermediate degree obtained: Systems Analyst.',
    },
  },
  {
    title: {
      es: 'Carrera Desarrollador Full Stack',
      en: 'Full Stack Developer Program',
    },
    institution: {
      es: 'Coderhouse',
      en: 'Coderhouse',
    },
    period: {
      es: 'Mayo 2024',
      en: 'May 2024',
    },
  },
];

export interface LanguageItem {
  name: Localized;
  level: Localized;
}

export const languagesSpoken: LanguageItem[] = [
  {
    name: { es: 'Español', en: 'Spanish' },
    level: { es: 'Nativo', en: 'Native' },
  },
  {
    name: { es: 'Inglés', en: 'English' },
    level: { es: 'B2 — Intermedio alto', en: 'B2 — Upper Intermediate' },
  },
];
