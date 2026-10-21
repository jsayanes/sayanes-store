# Sayanes Store

Catálogo web de zapatos y perfumes. React + Tailwind v4 + Vite.

## Arrancar

```powershell
cd C:\SistemaIA\sayanes-store
npm install
npm run dev
```

Queda en http://localhost:5173. Para ver la versión de producción: `npm run build` y `npm run preview`.

## Páginas

| Ruta | Qué es |
| --- | --- |
| `/` | Portada: hero, categorías, color de la casa, selección |
| `/catalogo` | Los 8 productos juntos |
| `/zapatos` | Solo zapatos |
| `/perfumes` | Solo perfumes |
| `/producto/:id` | Ficha de un producto |
| `/contacto` | Datos del local y formulario |

## Dónde se toca cada cosa

- **Textos, precios, productos, contacto** → `src/data/site.js` (todo el contenido editable está ahí)
- **Colores y tipografías** → `src/index.css`, bloque `@theme`
- **Formato de precio** → `src/lib/precio.js` (moneda y formato)
- **Fotos** → `public/img/`

## El color

`AZUL_CASA` en `src/data/site.js` es el azul de la casa (`#1B2438`). Va junto al cobre
cálido de los productos, que es el par que mejor hace resaltear ojos claros.

## Datos que hay que reemplazar

Todos están marcados con `REEMPLAZAR` en `src/data/site.js` y `src/pages/Contacto.jsx`:

- Dirección del local (figura "Av. Italia 2468, Montevideo")
- Teléfono y email (`+598 99 123 456`, `hola@sayanes.store`)
- Instagram
- Horarios
- Los 8 productos con sus precios, fotos y descripciones (son de ejemplo)
- El formulario de contacto no tiene endpoint: valida y avisa, pero no manda correo.
  Conectarlo a Formspree o al backend propio.

## Desplegar

```bash
vercel deploy --prod     # o
netlify deploy --prod
```

`public/_redirects` ya tiene el fallback de SPA para Netlify.

## Capturas

En `capturas/`, a 1440px y 375px.
