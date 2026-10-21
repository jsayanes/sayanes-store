// GitHub Pages no tiene "rewrites": si alguien entra a /zapatos directo, da 404.
// La solución es copiar index.html como 404.html: GitHub lo sirve en esa ruta y
// React Router toma el control desde ahí.
import { copyFileSync, existsSync } from "node:fs";

if (existsSync("dist/index.html")) {
  copyFileSync("dist/index.html", "dist/404.html");
  console.log("404.html generado para GitHub Pages");
}
