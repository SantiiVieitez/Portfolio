/**
 * Datos personales. Editá estos valores para personalizar el sitio.
 * Los campos marcados como TODO conviene completarlos antes de publicar.
 */
export const profile = {
  name: 'Santiago Vieitez',
  // Iniciales para el favicon / logo del nav
  initials: 'SV',
  email: 'savieitez@gmail.com', // TODO: confirmar correo de contacto
  linkedin: 'https://www.linkedin.com/in/santiago-vieitez-93994b263/',
  github: 'https://github.com/', // TODO: usuario de GitHub
  // Ruta del CV dentro de /public
  cv: '/cv-santiago-vieitez.pdf', // TODO: subir el PDF a /public
  // Foto de perfil dentro de /public.
  // Placeholder: /profile.svg. Subí tu foto (p. ej. profile.jpg) y cambiá esta ruta.
  photo: '/profile.svg', // TODO: reemplazar por tu foto real
  location: 'Argentina',
} as const;
