import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo titulo="Página no encontrada" />
      <div className="mx-auto max-w-6xl px-5 py-28">
        <h1 className="font-display text-5xl leading-none text-ink">
          Esta página no existe
        </h1>
        <p className="mt-5 max-w-[46ch] leading-relaxed text-ink-soft">
          El link que seguiste no lleva a ningún lado. Volvé al inicio y seguí
          mirando el catálogo.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-sm text-copper-ink"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </>
  );
}
