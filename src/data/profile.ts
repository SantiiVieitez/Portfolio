/**
 * Datos personales. Editá estos valores para personalizar el sitio.
 * Los campos marcados como TODO conviene completarlos antes de publicar.
 */
export const profile = {
  name: 'Santiago Vieitez',
  // Iniciales para el favicon / logo del nav
  initials: 'SV',
  email: 'savieitez@gmail.com',
  phone: '+54 11 2464-1009',
  linkedin: 'https://www.linkedin.com/in/santiago-vieitez-93994b263/',
  github: 'https://github.com/SantiiVieitez',
  // Ruta del CV dentro de /public
  cv: '/cv-santiago-vieitez.pdf', // TODO: copiar el PDF a public/cv-santiago-vieitez.pdf
  // Foto de perfil dentro de /public
  photo: '/profile.jpg',
  location: 'San Isidro, Buenos Aires, Argentina',
} as const;
