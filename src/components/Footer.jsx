import { Link } from "react-router-dom";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { MARCA, NAVEGACION } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-3xl leading-none">
            {MARCA.nombre}
            <span className="ml-2 font-sans text-xs tracking-wide text-copper-lite">
              store
            </span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/70">
            {MARCA.claim} elegidos uno por uno en {MARCA.ciudad}. Precios en pesos
            uruguayos.
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="font-display text-xl text-bone">Tienda</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAVEGACION.map((item) => (
              <li key={item.href}>
                <Link className="text-bone/80 transition-colors hover:text-bone" to={item.href}>
                  {item.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xl text-bone">Contacto</h2>
          <ul className="mt-4 space-y-3 text-sm text-bone/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-copper-lite" />
              {MARCA.direccion}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-copper-lite" />
              <a className="transition-colors hover:text-bone" href={`tel:${MARCA.telefono.replace(/\s/g, "")}`}>
                {MARCA.telefono}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-copper-lite" />
              <a className="transition-colors hover:text-bone" href={`mailto:${MARCA.email}`}>
                {MARCA.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Camera size={16} className="shrink-0 text-copper-lite" />
              <a
                className="transition-colors hover:text-bone"
                href={MARCA.instagram}
                target="_blank"
                rel="noreferrer"
              >
                @sayanes.store
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-bone">Horarios</h2>
          <ul className="mt-4 space-y-2 text-sm text-bone/80">
            {MARCA.horarios.map((h) => (
              <li key={h.dia} className="flex justify-between gap-4">
                <span>{h.dia}</span>
                <span className="text-bone/60">{h.hora}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {MARCA.nombreCompleto}. Todos los derechos
            reservados.
          </p>
          <p>Precios en pesos uruguayos (UY$).</p>
        </div>
      </div>
    </footer>
  );
}
