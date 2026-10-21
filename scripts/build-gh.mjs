// Build para GitHub Pages: fija el prefijo /sayanes-store/ y genera el 404.html.
// No necesita cross-env (ni dependencias extra) porque setea process.env antes de invocar a Vite.
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const prefijo = process.env.BASE_PATH ?? "/sayanes-store/";

const build = spawnSync(
  process.execPath,
  [join(raiz, "node_modules", "vite", "bin", "vite.js"), "build"],
  { stdio: "inherit", cwd: raiz, env: { ...process.env, BASE_PATH: prefijo } }
);

if (build.status !== 0) process.exit(build.status ?? 1);

// GitHub Pages no tiene rewrites: si alguien entra a /zapatos directo, da 404.
// Se copia index.html como 404.html y GitHub lo sirve en esa ruta, donde
// React Router toma el control.
if (existsSync("dist/index.html")) {
  copyFileSync("dist/index.html", "dist/404.html");
  console.log("404.html generado para GitHub Pages");
}
