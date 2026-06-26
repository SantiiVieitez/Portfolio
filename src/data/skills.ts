import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface SkillGroup {
  category: Localized;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: { es: 'Lenguajes', en: 'Languages' },
    items: ['C#', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: { es: 'Tecnologías', en: 'Frameworks & Tech' },
    items: ['.NET', 'Astro', 'HTML', 'CSS'],
  },
  {
    category: { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
    items: ['Agentes de IA', 'LLMs', 'Prompt Engineering'],
  },
  {
    category: { es: 'Bases de datos', en: 'Databases' },
    items: ['SQL Server'],
  },
  {
    category: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'GitHub', 'Visual Studio'],
  },
];
