# Sayanes Store

Catálogo web de zapatos y perfumes. React + Tailwind v4 + Vite.

## Online

| | URL |
| --- | --- |
| Vercel (principal) | https://sayanes-store.vercel.app |
| GitHub Pages | https://jsayanes.github.io/sayanes-store/ |
| Código | https://github.com/jsayanes/sayanes-store |

Los dos se actualizan solos con cada `git push` a `main` (workflows en `.github/workflows/`).

## Arrancar en local

```powershell
cd C:\SistemaIA\sayanes-store
npm install
npm run dev
```

Queda en http://localhost:5173. Para ver la versión de producción: `npm run build` y `npm run preview`.

Para probar el comportamiento de GitHub Pages en local (rutas profundas servidas como 404):

```powershell
npm run build:gh
node scripts/simular-gh-pages.mjs
# http://localhost:4321/sayanes-store/
```

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

Los dos deploys son automáticos con `git push`:

```bash
git add -A
git commit -m "cambios"
git push
```

- `deploy.yml` → GitHub Pages. Hace el build con el prefijo `/sayanes-store/` y genera el
  `404.html` que GitHub necesita para las rutas profundas.
- `deploy-vercel.yml` → Vercel. Usa los secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` y
  `VERCEL_PROJECT_ID` (ya configurados en el repo).

Para desplegar a mano a Vercel: `npx vercel deploy --prod --yes`.

`public/_redirects` tiene el fallback de SPA para Netlify, por si algún día se usa esa plataforma.

## Notas de cada plataforma

- **Vercel** sirve en la raíz (`/`). El rewrite de `vercel.json` manda todo a `index.html`
  para que las rutas profundas funcionen al recargar.
- **GitHub Pages** sirve en `/sayanes-store/` y no tiene rewrites: por eso el build lleva
  ese prefijo y se copia `index.html` como `404.html`. Las rutas profundas devuelven
  status 404 pero la página renderiza igual (es el comportamiento estándar de GitHub Pages).
- El prefijo se resuelve en un solo lugar: `src/lib/img.js` y el `base` de `vite.config.js`.

## Capturas

En `capturas/`, a 1440px y 375px.
