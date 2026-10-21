// Rutas de imágenes con el prefijo del despliegue (BASE_URL).
// En Vercel es "/", en GitHub Pages es "/sayanes-store/". Sin esto, las fotos
// se rompen al publicar en un subdirectorio.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export const img = (ruta) => `${BASE}${ruta}`;
