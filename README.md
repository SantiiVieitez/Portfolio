# Portfolio — Santiago Vieitez

Sitio personal construido con [Astro](https://astro.build). Estático, bilingüe
(ES/EN) y con tema oscuro sobrio.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # sirve /dist localmente
```

## Estructura

```
src/
  data/        # CONTENIDO EDITABLE: profile, experience, projects, skills
  i18n/        # textos ES/EN (ui.ts) y helpers de traducción
  components/  # secciones (Hero, About, Experience, Projects, Skills, Contact…)
  layouts/     # Base.astro (head, meta, fuentes)
  pages/       # index.astro (ES) y en/index.astro (EN)
  styles/      # global.css (paleta y tokens de diseño)
public/        # imágenes, favicon, CV
```

Para cambiar textos no hace falta tocar el markup: editá `src/data/*.ts` y
`src/i18n/ui.ts`.

## Pendientes antes de publicar

Buscá los comentarios `TODO` en el código. En concreto:

- **Foto:** subí tu foto a `public/` (p. ej. `profile.jpg`) y actualizá `photo`
  en `src/data/profile.ts`. Hoy usa el placeholder `public/profile.svg`.
- **CV:** colocá tu PDF en `public/cv-santiago-vieitez.pdf` (o cambiá la ruta `cv`
  en `src/data/profile.ts`).
- **GitHub:** completá tu usuario en `github` de `src/data/profile.ts`.
- **Email:** confirmá el correo de contacto en `src/data/profile.ts`.
- **Proyectos:** en `src/data/projects.ts`, agregá `liveUrl` y `repoUrl`, y
  ajustá los `tags` de la tienda de camperas a su stack real.
- **Experiencia:** en `src/data/experience.ts`, ajustá la fecha de inicio y, si
  podés nombrar la empresa, reemplazá el texto genérico.
- **OG image:** agregá `public/og-image.png` (1200×630) para vistas previas al
  compartir el link. Y revisá `site` en `astro.config.mjs` con tu dominio final.

## Deploy

Cualquier hosting de estáticos sirve. Opciones gratuitas:

- **Vercel / Netlify:** importá el repo; detectan Astro automáticamente.
- **GitHub Pages:** ver la guía oficial de Astro para Pages.
