import { useState } from "react";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import Seo from "../components/Seo";
import { MARCA, TEXTO_CONTACTO } from "../data/site";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    const datos = new FormData(evento.currentTarget);

    // Honeypot: si viene relleno, es un bot. Se finge el éxito y no se manda nada.
    if (datos.get("sitio_web")) {
      setError("");
      setEnviado(true);
      evento.currentTarget.reset();
      return;
    }

    if (!datos.get("nombre")?.trim()) {
      setError("Escribí tu nombre para saber cómo llamarte.");
      return;
    }
    const email = datos.get("email")?.trim() ?? "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Revisá el email: no parece una dirección válida.");
      return;
    }
    if (!datos.get("mensaje")?.trim()) {
      setError("Contanos qué estás buscando para poder ayudarte.");
      return;
    }

    setError("");
    setEnviado(true);
    evento.currentTarget.reset();
  }

  return (
    <>
      <Seo
        titulo="Contacto"
        descripcion={`Escribinos o pasá por el local de ${MARCA.nombreCompleto} en ${MARCA.ciudad}. Zapatos de cuero y fragancias con envío a todo Uruguay.`}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl">
            {TEXTO_CONTACTO.titulo}
          </h1>
          <p className="mt-6 max-w-[58ch] leading-relaxed text-ink-soft">
            {TEXTO_CONTACTO.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-2xl text-ink">El local</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 text-ink-soft">
              <MapPin size={18} className="mt-0.5 shrink-0 text-copper-ink" />
              <span>
                {MARCA.direccion}
                <br />
                <a
                  className="mt-1 inline-block text-sm text-copper-ink underline underline-offset-4"
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Italia+2468+Montevideo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en Google Maps
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3 text-ink-soft">
              <Phone size={18} className="shrink-0 text-copper-ink" />
              <a className="transition-colors hover:text-ink" href={`tel:${MARCA.telefono.replace(/\s/g, "")}`}>
                {MARCA.telefono}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-soft">
              <Mail size={18} className="shrink-0 text-copper-ink" />
              <a className="transition-colors hover:text-ink" href={`mailto:${MARCA.email}`}>
                {MARCA.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-soft">
              <Camera size={18} className="shrink-0 text-copper-ink" />
              <a
                className="transition-colors hover:text-ink"
                href={MARCA.instagram}
                target="_blank"
                rel="noreferrer"
              >
                @sayanes.store
              </a>
            </li>
          </ul>

          <h2 className="mt-12 font-display text-2xl text-ink">Horarios</h2>
          <ul className="mt-6 border-t border-line">
            {MARCA.horarios.map((h) => (
              <li
                key={h.dia}
                className="flex justify-between gap-4 border-b border-line py-3 text-ink-soft"
              >
                <span>{h.dia}</span>
                <span>{h.hora}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={manejarEnvio} noValidate className="relative max-w-xl">
          <h2 className="font-display text-2xl text-ink">Mandar un mensaje</h2>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm text-ink-soft">
                {TEXTO_CONTACTO.campos.nombre}
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                className="mt-1.5 w-full border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-copper"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-ink-soft">
                {TEXTO_CONTACTO.campos.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1.5 w-full border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-copper"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm text-ink-soft">
                {TEXTO_CONTACTO.campos.telefono}
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                className="mt-1.5 w-full border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-copper"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm text-ink-soft">
                {TEXTO_CONTACTO.campos.mensaje}
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                className="mt-1.5 w-full resize-y border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-copper"
              />
            </div>
          </div>

          {/* Honeypot contra spam: si viene relleno, el envío se frena. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="sitio-web">No completar</label>
            <input id="sitio-web" name="sitio_web" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {error && (
            <p role="alert" className="mt-5 border-l-2 border-copper bg-sand px-4 py-3 text-sm text-ink">
              {error}
            </p>
          )}
          {enviado && (
            <p role="status" className="mt-5 border-l-2 border-ink bg-sand px-4 py-3 text-sm text-ink">
              Mensaje enviado. Te respondemos el mismo día al{" "}
              {MARCA.email}.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 bg-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-ink-deep"
          >
            {TEXTO_CONTACTO.campos.enviar}
          </button>

          {/* REEMPLAZAR: conectar el formulario a un servicio de envío (Formspree, Basin) o al backend propio.
              Sin endpoint configurado, el formulario valida y avisa, pero no manda el correo. */}
          <p className="mt-3 text-xs text-ink-soft">
            También podés escribirnos directo a{" "}
            <a className="text-copper-ink underline underline-offset-4" href={`mailto:${MARCA.email}`}>
              {MARCA.email}
            </a>
            .
          </p>
        </form>
      </section>
    </>
  );
}
