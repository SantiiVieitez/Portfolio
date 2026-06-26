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
      es: 'Pasante — Automatización & Agentes de IA',
      en: 'Intern — Automation & AI Agents',
    },
    company: {
      es: 'Meridional Seguros · Buenos Aires',
      en: 'Meridional Seguros · Buenos Aires',
    },
    period: {
      es: 'Junio 2025 — Actualidad',
      en: 'June 2025 — Present',
    },
    current: true,
    bullets: {
      es: [
        'Desarrollo de Agentes de IA conectados a las bases de datos corporativas para automatizar procesos del negocio asegurador.',
        'Implementación de soluciones de automatización en Python sobre infraestructura GCP.',
        'Uso de Google Agent Development Kit (ADK) para orquestación de agentes inteligentes.',
      ],
      en: [
        'Development of AI agents connected to corporate databases to automate insurance business processes.',
        'Implementation of automation solutions in Python on GCP infrastructure.',
        'Use of the Google Agent Development Kit (ADK) to orchestrate intelligent agents.',
      ],
    },
  },
  {
    role: {
      es: 'Desarrollador Jr.',
      en: 'Jr. Developer',
    },
    company: {
      es: 'Proyectos académicos y freelance',
      en: 'Academic & freelance projects',
    },
    period: {
      es: '2022 — 2025',
      en: '2022 — 2025',
    },
    bullets: {
      es: [
        'Diseño y desarrollo de aplicaciones web con HTML, CSS, JavaScript.',
        'Desarrollo de sistema de gestión de inventarios en C# y SQL Server con reportes automatizados.',
        'Creación de sitio web responsive para negocio local con React.js y Bootstrap, con optimización SEO.',
        'Participación en equipos de desarrollo implementando soluciones escalables y centradas en el usuario.',
        'Control de versiones con Git / GitHub.',
      ],
      en: [
        'Design and development of web applications with HTML, CSS, JavaScript.',
        'Development of an inventory management system in C# and SQL Server with automated reports.',
        'Creation of a responsive website for a local business with React.js and Bootstrap, with SEO optimization.',
        'Participation in development teams implementing scalable, user-centered solutions.',
        'Version control with Git / GitHub.',
      ],
    },
  },
];
