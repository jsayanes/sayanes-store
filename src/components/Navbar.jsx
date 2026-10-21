import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { MARCA, NAVEGACION } from "../data/site";

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setAbierto(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bone/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link
          to="/"
          className="font-display text-2xl leading-none tracking-tight text-ink"
        >
          {MARCA.nombre}
          <span className="ml-2 font-sans text-xs tracking-wide text-copper-ink">
            store
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAVEGACION.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "border-b pb-0.5 text-sm transition-colors",
                  isActive
                    ? "border-copper text-ink"
                    : "border-transparent text-ink-soft hover:border-line-dark hover:text-ink",
                ].join(" ")
              }
            >
              {item.texto}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className="rounded-card p-2 text-ink transition-colors hover:bg-sand md:hidden"
        >
          {abierto ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {abierto && (
        <nav
          id="menu-movil"
          aria-label="Menú móvil"
          className="border-t border-line bg-bone md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {NAVEGACION.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      "block border-b border-line py-3 font-display text-xl last:border-0",
                      isActive ? "text-copper-ink" : "text-ink",
                    ].join(" ")
                  }
                >
                  {item.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
