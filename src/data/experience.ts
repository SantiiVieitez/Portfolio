import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface ExperienceItem {
  role: Localized;
  company: Localized;
  period: Localized;
  /** true => muestra "Actualidad / Present" en el período */
  current?: boolean;
  bullets: Record<Lang, string[]>;
}

export const experience: ExperienceItem[] = [
  {
    role: {
      es: 'Pasante — Desarrollo de Agentes de IA',
      en: 'Intern — AI Agent Development',
    },
    company: {
      // TODO: reemplazar por el nombre real de la empresa si se puede nombrar
      es: 'Empresa del sector asegurador',
      en: 'Insurance company',
    },
    period: {
      es: '2026 — Actualidad', // TODO: ajustar fecha de inicio
      en: '2026 — Present', // TODO: ajustar fecha de inicio
    },
    current: true,
    bullets: {
      es: [
        'Diseño y desarrollo de agentes de inteligencia artificial sobre modelos de lenguaje (LLMs) para tareas del negocio.',
        'Integración de los agentes con datos y flujos de trabajo internos de la compañía.',
        'Iteración sobre prompts, herramientas y lógica de los agentes para mejorar precisión y confiabilidad.',
      ],
      en: [
        'Design and development of AI agents built on language models (LLMs) for business tasks.',
        'Integration of agents with the company’s internal data and workflows.',
        'Iteration over prompts, tools and agent logic to improve accuracy and reliability.',
      ],
    },
  },
];
