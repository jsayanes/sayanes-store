import { useEffect } from "react";
import { MARCA } from "../data/site";

export default function Seo({ titulo, descripcion }) {
  useEffect(() => {
    document.title = titulo
      ? `${titulo} — ${MARCA.nombreCompleto}`
      : `${MARCA.nombreCompleto} — Zapatos de cuero y fragancias en ${MARCA.ciudad}`;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && descripcion) meta.setAttribute("content", descripcion);
  }, [titulo, descripcion]);

  return null;
}
