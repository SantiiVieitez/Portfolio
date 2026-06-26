import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface Project {
  title: Localized;
  type: Localized;
  description: Localized;
  highlights: Record<Lang, string[]>;
  tags: string[];
  /** URL en vivo (opcional). Dejar null si no aplica. */
  liveUrl?: string | null;
  /** Repositorio (opcional). */
  repoUrl?: string | null;
  year?: string;
}

export const projects: Project[] = [
  {
    title: {
      es: 'Sistema de Gestión de Repuestos',
      en: 'Auto Parts Management System',
    },
    type: {
      es: 'Aplicación de escritorio · C# / .NET',
      en: 'Desktop application · C# / .NET',
    },
    description: {
      es: 'Sistema de gestión de compra y venta de repuestos de automóviles. Administra inventario, clientes y operaciones, con control de acceso por roles y generación de reportes.',
      en: 'Management system for buying and selling car parts. Handles inventory, customers and operations, with role-based access control and report generation.',
    },
    highlights: {
      es: [
        'Autenticación de usuarios con sistema de roles y permisos.',
        'Persistencia en base de datos relacional (SQL Server).',
        'Módulo de reportes sobre ventas e inventario.',
      ],
      en: [
        'User authentication with a roles and permissions system.',
        'Relational database persistence (SQL Server).',
        'Reporting module for sales and inventory.',
      ],
    },
    tags: ['C#', '.NET', 'SQL Server'],
    liveUrl: null,
    repoUrl: 'https://github.com/SantiiVieitez/TRABAJO-DE-DIPLOMA',
    year: '2025',
  },
  {
    title: {
      es: 'Tienda de Camperas',
      en: 'Jackets Store',
    },
    type: {
      es: 'Sitio web',
      en: 'Website',
    },
    description: {
      es: 'Sitio web para una tienda de camperas, con catálogo de productos y una experiencia de navegación cuidada en escritorio y móvil.',
      en: 'Website for a jackets store, featuring a product catalog and a polished browsing experience across desktop and mobile.',
    },
    highlights: {
      es: [
        'Catálogo de productos con diseño responsivo.',
        'Interfaz orientada a la conversión y a la claridad.',
      ],
      en: [
        'Product catalog with responsive design.',
        'Interface focused on clarity and conversion.',
      ],
    },
    tags: ['Next.js', 'React'],
    liveUrl: 'https://web-mass-importadores.vercel.app',
    // Repositorio privado: no se enlaza para no mostrar un 404 a los visitantes.
    // Si lo hacés público, agregá aquí: 'https://github.com/SantiiVieitez/Web-MassImportadores'
    repoUrl: null,
    year: '2025',
  },
];
