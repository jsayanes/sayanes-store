import { Link } from "react-router-dom";
import { precio } from "../lib/precio";

export default function ProductCard({ producto }) {
  return (
    <Link
      to={`/producto/${producto.id}`}
      className="group block focus-visible:outline-offset-4"
    >
      <div className="relative overflow-hidden bg-sand">
        <img
          src={producto.imagen}
          alt={producto.alt}
          loading="lazy"
          width="1024"
          height="768"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {producto.etiqueta && (
          <span className="absolute top-3 left-3 bg-bone/95 px-2.5 py-1 text-xs text-ink-soft">
            {producto.etiqueta}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-3">
        <h3 className="font-display text-xl leading-tight text-ink">
          {producto.nombre}
        </h3>
        <p className="font-display text-xl text-copper-ink tabular-nums">
          {precio(producto.precio)}
        </p>
      </div>

      <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
        {producto.resumen}
      </p>
    </Link>
  );
}
