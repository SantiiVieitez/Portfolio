import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface SkillGroup {
  category: Localized;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: { es: 'Lenguajes', en: 'Languages' },
    items: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'Python'],
  },
  {
    category: { es: 'Tecnologías', en: 'Frameworks & Tech' },
    items: ['.NET', 'Astro', 'React', 'Next.js', 'Node.js'],
  },
  {
    category: { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
    items: ['AI Agents', 'LLMs', 'Google ADK', 'Vertex AI'],
  },
  {
    category: { es: 'Bases de datos', en: 'Databases' },
    items: ['SQL Server', 'Google Firebase', 'Google BigQuery', 'Oracle Database'],
  },
  {
    category: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'GitHub', 'VS Code', 'Power BI'],
  },
];
