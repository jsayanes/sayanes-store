import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import { AZUL_CASA, CATEGORIAS, MARCA, PRODUCTOS, VALORES } from "../data/site";
import { ArrowRight } from "lucide-react";
import { img } from "../lib/img";

export default function Inicio() {
  const destacados = [
    PRODUCTOS.find((p) => p.id === "oxford-cognac"),
    PRODUCTOS.find((p) => p.id === "ambar-calido"),
    PRODUCTOS.find((p) => p.id === "mocasin-tabaco"),
    PRODUCTOS.find((p) => p.id === "verde-sal"),
  ];

  return (
    <>
      <Seo />

      {/* Portada: foto de producto a sangre, texto encima en columna */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 pt-14 pb-16 lg:grid-cols-[1fr_1.15fr] lg:pt-20">
          <div className="animate-rise" style={{ animationDelay: "80ms" }}>
            <p className="font-sans text-sm text-ink-soft">{MARCA.ciudad}, {MARCA.pais}</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl">
              Zapatos que
              <br />
              duran y perfumes
              <br />
              <span className="text-copper-ink">que quedan.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-soft">
              Ocho piezas elegidas una por una: cuero curtido a mano y fragancias
              de autor. Sin marcas de fábrica, sin intermediarios, con el precio
              a la vista.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/zapatos"
                className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-ink-deep"
              >
                Ver zapatos
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/perfumes"
                className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-sand"
              >
                Ver perfumes
              </Link>
            </div>
          </div>

          <div
            className="animate-rise relative overflow-hidden bg-sand"
            style={{ animationDelay: "200ms" }}
          >
            <img
              src={img("/img/hero.jpg")}
              alt="Zapatos oxford color cognac junto a un frasco de perfume de vidrio ámbar"
              width="1152"
              height="768"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tiras de categorías: dos bloques photographied, no tarjetas repetidas */}
      <section className="border-y border-line bg-sand">
        <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2">
          {CATEGORIAS.map((cat) => (
            <Link
              key={cat.id}
              to={`/${cat.id}`}
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-ink p-8"
            >
              <img
                src={cat.imagen}
                alt={cat.alt}
                loading="lazy"
                width="1024"
                height="768"
                className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="relative">
                <h2 className="font-display text-4xl text-bone">{cat.nombre}</h2>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-bone/75">
                  {cat.descripcion}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-copper-lite">
                  Ver la colección
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* El color de la casa */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <div
            className="h-40 w-40 shrink-0 rounded-full border border-line shadow-[0_0_60px_-10px_rgba(27,36,56,0.45)]"
            style={{ backgroundColor: AZUL_CASA.hex }}
            role="img"
            aria-label={`Muestra de color ${AZUL_CASA.nombre}`}
          />
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {AZUL_CASA.nombre}
            </h2>
            <p className="mt-4 max-w-[62ch] leading-relaxed text-ink-soft">
              {AZUL_CASA.descripcion}
            </p>
            <p className="mt-4 font-sans text-sm text-ink-soft">
              <span className="font-medium text-ink">{AZUL_CASA.nombre}</span>{" "}
              <span className="text-ink-soft/70">·</span>{" "}
              <span className="font-mono text-xs">{AZUL_CASA.hex}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Selección */}
      <section className="border-t border-line bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Selección de la casa
            </h2>
            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-copper-ink"
            >
              Ver el catálogo completo
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {destacados.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Valores en fila, separados por filetes */}
      <section className="border-t border-line bg-ink text-bone">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl">Cómo comprás</h2>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALORES.map((v) => (
              <div key={v.titulo} className="border-t border-line-dark pt-4">
                <dt className="font-display text-lg text-copper-lite">
                  {v.titulo}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-bone/70">
                  {v.detalle}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-20 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-[20ch] font-display text-4xl leading-tight text-ink">
            ¿ Dudás entre dos talles o dos fragancias?
          </h2>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-copper-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-ink"
          >
            Escribinos
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
