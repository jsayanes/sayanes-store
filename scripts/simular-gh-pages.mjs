// Simulador local de GitHub Pages: sirve dist/ bajo un subdirectorio y,
// como GitHub Pages, devuelve 404.html en las rutas que no existen.
// Sirve para comprobar que el sitio funciona antes de subirlo.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const raiz = "dist";
const prefijo = "/sayanes-store";
const puerto = 4321;

const tipos = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".json": "application/json",
};

async function existe(ruta) {
  try {
    return (await stat(ruta)).isFile();
  } catch {
    return false;
  }
}

createServer(async (req, res) => {
  let ruta = decodeURIComponent(req.url.split("?")[0]);
  if (!ruta.startsWith(prefijo)) {
    res.writeHead(404).end("Not found");
    return;
  }
  ruta = ruta.slice(prefijo.length) || "/";

  let archivo = join(raiz, ruta);
  if (ruta.endsWith("/")) archivo = join(raiz, ruta, "index.html");

  if (!(await existe(archivo))) {
    // GitHub Pages: ruta desconocida -> sirve 404.html con status 404
    archivo = join(raiz, "404.html");
    if (!(await existe(archivo))) {
      res.writeHead(404).end("Sin 404.html");
      return;
    }
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end(await readFile(archivo));
    return;
  }

  res.writeHead(200, { "content-type": tipos[extname(archivo)] ?? "application/octet-stream" });
  res.end(await readFile(archivo));
}).listen(puerto, () => console.log(`Simulador de GitHub Pages en http://localhost:${puerto}${prefijo}/`));
