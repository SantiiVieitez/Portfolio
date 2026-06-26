export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.about': 'Perfil',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.education': 'Formación',
    'nav.skills': 'Stack',
    'nav.contact': 'Contacto',
    'nav.langLabel': 'EN',

    'hero.role': 'Analista en Sistemas · Automatización y Agentes de IA',
    'hero.heading': 'Construyo software y agentes de IA con criterio de ingeniería.',
    'hero.subheading':
      'Analista en sistemas y estudiante avanzado de Ingeniería en Sistemas. Desarrollo agentes de inteligencia artificial y automatización de procesos en Meridional Seguros.',
    'hero.cta.contact': 'Contactar',
    'hero.cta.cv': 'Descargar CV',
    'hero.available': 'Abierto a oportunidades',

    'about.label': 'Perfil',
    'about.title': 'Sobre mí',
    'about.p1':
      'Soy analista en sistemas y curso el 5.º año de Ingeniería en Sistemas. Me interesa el desarrollo de software bien estructurado: desde el modelo de datos hasta la capa que usa la persona final.',
    'about.p2':
      'Hoy trabajo como pasante en Meridional Seguros, desarrollando agentes de inteligencia artificial y automatizaciones que conectan modelos de lenguaje con las bases de datos y flujos de trabajo del negocio. En paralelo construyo proyectos propios para profundizar en arquitectura, bases de datos y experiencia de usuario.',
    'about.p3':
      'Busco sumar a equipos donde pueda aportar tanto en backend como en la resolución de problemas con IA aplicada.',

    'experience.label': 'Trayectoria',
    'experience.title': 'Experiencia',
    'experience.present': 'Actualidad',

    'projects.label': 'Trabajo',
    'projects.title': 'Proyectos seleccionados',
    'projects.viewLive': 'Ver en vivo',
    'projects.viewCode': 'Código',
    'projects.highlights': 'Aspectos clave',

    'skills.label': 'Herramientas',
    'skills.title': 'Stack técnico',

    'education.label': 'Formación',
    'education.title': 'Educación e idiomas',
    'education.languages': 'Idiomas',

    'contact.label': 'Contacto',
    'contact.title': 'Hablemos',
    'contact.text':
      'Estoy abierto a propuestas laborales, colaboraciones y proyectos. La mejor forma de contactarme es por correo o LinkedIn.',
    'contact.emailLabel': 'Correo',
    'contact.linkedinLabel': 'LinkedIn',
    'contact.githubLabel': 'GitHub',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.builtWith': 'Diseñado y desarrollado por Santiago Vieitez.',
  },
  en: {
    'nav.about': 'Profile',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.skills': 'Stack',
    'nav.contact': 'Contact',
    'nav.langLabel': 'ES',

    'hero.role': 'Systems Analyst · Automation & AI Agents',
    'hero.heading': 'I build software and AI agents with an engineering mindset.',
    'hero.subheading':
      'Systems analyst and senior Systems Engineering student. I develop AI agents and process automation at Meridional Seguros (insurance).',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.cv': 'Download CV',
    'hero.available': 'Open to opportunities',

    'about.label': 'Profile',
    'about.title': 'About me',
    'about.p1':
      "I'm a systems analyst, currently in my 5th year of Systems Engineering. I care about well-structured software — from the data model to the layer the end user actually touches.",
    'about.p2':
      'I work as an intern at Meridional Seguros, developing AI agents and automations that connect language models with the business’ databases and workflows. Alongside that, I build my own projects to go deeper into architecture, databases and user experience.',
    'about.p3':
      'I want to join teams where I can contribute both on the backend and in solving problems with applied AI.',

    'experience.label': 'Background',
    'experience.title': 'Experience',
    'experience.present': 'Present',

    'projects.label': 'Work',
    'projects.title': 'Selected projects',
    'projects.viewLive': 'Live site',
    'projects.viewCode': 'Code',
    'projects.highlights': 'Highlights',

    'skills.label': 'Tooling',
    'skills.title': 'Technical stack',

    'education.label': 'Education',
    'education.title': 'Education & languages',
    'education.languages': 'Languages',

    'contact.label': 'Contact',
    'contact.title': "Let's talk",
    'contact.text':
      'I am open to job offers, collaborations and projects. The best way to reach me is by email or LinkedIn.',
    'contact.emailLabel': 'Email',
    'contact.linkedinLabel': 'LinkedIn',
    'contact.githubLabel': 'GitHub',

    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Designed and built by Santiago Vieitez.',
  },
} as const;
