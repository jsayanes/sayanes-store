import Seo from "../components/Seo";
import ProductCard from "../components/ProductCard";
import { PRODUCTOS } from "../data/site";

const DATOS = {
  todo: {
    titulo: "Catálogo",
    intro:
      "Todo lo que tenemos hoy, en una sola página: zapatos de cuero curtido a mano y fragancias de autor en eau de parfum.",
    seo: "Catálogo de zapatos y perfumes — Sayanes Store",
  },
  zapatos: {
    titulo: "Zapatos",
    intro:
      "Cuero curtido al vegetal en tambores revolving y suela de goma cocida. El cuero envejece mejor que el sintético, y a los tres meses ya es tuyo.",
    seo: "Zapatos de cuero curtido a mano en Montevideo — Sayanes Store",
  },
  perfumes: {
    titulo: "Perfumes",
    intro:
      "Eau de parfum de autor, en concentraciones que se quedan en la piel hasta la noche. Cuatro fragancias: ámbar, cristal, humo y verde sal.",
    seo: "Perfumes de autor en eau de parfum — Sayanes Store",
  },
};

export default function Catalogo({ categoria }) {
  const datos = DATOS[categoria];
  const productos =
    categoria === "todo"
      ? PRODUCTOS
      : PRODUCTOS.filter((p) => p.categoria === categoria);

  return (
    <>
      <Seo titulo={datos.titulo} descripcion={datos.seo} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl">
            {datos.titulo}
          </h1>
          <p className="mt-6 max-w-[60ch] leading-relaxed text-ink-soft">
            {datos.intro}
          </p>
          <p className="mt-6 text-sm text-ink-soft tabular-nums">
            {productos.length} productos
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </section>
    </>
  );
}
