import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import { MARCA, PRODUCTOS } from "../data/site";
import { precio } from "../lib/precio";

export default function Producto() {
  const { id } = useParams();
  const producto = PRODUCTOS.find((p) => p.id === id);

  if (!producto) {
    return (
      <>
        <Seo titulo="Producto no encontrado" />
        <div className="mx-auto max-w-6xl px-5 py-28">
          <h1 className="font-display text-4xl">No encontramos ese producto</h1>
          <p className="mt-4 text-ink-soft">
            Puede que se haya agotado o que el link esté incompleto.
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

  const otros = PRODUCTOS.filter(
    (p) => p.categoria === producto.categoria && p.id !== producto.id
  ).slice(0, 3);

  const asunto = encodeURIComponent(
    `Consulta por ${producto.nombre} (${precio(producto.precio)})`
  );

  return (
    <>
      <Seo
        titulo={producto.nombre}
        descripcion={`${producto.resumen} Precio: ${precio(producto.precio)}.`}
      />

      <div className="mx-auto max-w-6xl px-5 py-12">
        <Link
          to={`/${producto.categoria}`}
          className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-copper-ink"
        >
          <ArrowLeft size={16} />
          {producto.categoria === "zapatos" ? "Zapatos" : "Perfumes"}
        </Link>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden bg-sand">
            <img
              src={producto.imagen}
              alt={producto.alt}
              width="1024"
              height="768"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="lg:pt-4">
            {producto.etiqueta && (
              <p className="text-sm text-copper-ink">{producto.etiqueta}</p>
            )}
            <h1 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
              {producto.nombre}
            </h1>
            <p className="mt-4 font-display text-3xl text-copper-ink tabular-nums">
              {precio(producto.precio)}
            </p>
            <p className="mt-6 max-w-[54ch] leading-relaxed text-ink-soft">
              {producto.resumen}
            </p>

            <dl className="mt-8 border-t border-line">
              {producto.detalles.map((d) => (
                <div
                  key={d}
                  className="flex items-start gap-3 border-b border-line py-3.5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper"
                  />
                  <dd className="text-sm leading-relaxed text-ink-soft">{d}</dd>
                </div>
              ))}
            </dl>

            <a
              href={`mailto:${MARCA.email}?subject=${asunto}`}
              className="mt-8 inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-ink-deep"
            >
              <Mail size={16} />
              Consultar por este producto
            </a>
            <p className="mt-3 text-sm text-ink-soft">
              Te respondemos el mismo día por email o por teléfono al{" "}
              {MARCA.telefono}.
            </p>
          </div>
        </div>
      </div>

      {otros.length > 0 && (
        <section className="border-t border-line bg-sand">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-2xl text-ink">De la misma colección</h2>
            <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {otros.map((p) => (
                <ProductCard key={p.id} producto={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
