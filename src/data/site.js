import { img } from "../lib/img";

// Todo el contenido editable de Sayanes Store está en este archivo.
// Textos, precios, productos y datos de contacto se cambian acá, no en las páginas.

export const MARCA = {
  nombre: "Sayanes",
  nombreCompleto: "Sayanes Store",
  claim: "Zapatos y fragancias",
  ciudad: "Montevideo",
  pais: "Uruguay",
  // REEMPLAZAR: dirección real del local
  direccion: "Av. Italia 2468, Montevideo",
  // REEMPLAZAR: teléfono y email reales
  telefono: "+598 99 123 456",
  email: "hola@sayanes.store",
  instagram: "https://instagram.com/sayanes.store",
  // REEMPLAZAR: horarios reales
  horarios: [
    { dia: "Lunes a viernes", hora: "10:00 – 19:00" },
    { dia: "Sábados", hora: "10:00 – 17:00" },
    { dia: "Domingos", hora: "Cerrado" },
  ],
};

export const NAVEGACION = [
  { texto: "Inicio", href: "/" },
  { texto: "Zapatos", href: "/zapatos" },
  { texto: "Perfumes", href: "/perfumes" },
  { texto: "Catálogo", href: "/catalogo" },
  { texto: "Contacto", href: "/contacto" },
];

export const CATEGORIAS = [
  {
    id: "zapatos",
    nombre: "Zapatos",
    descripcion:
      "Cuero curtido a mano en tambores y suela de goma cocida. Cada par sale del taller terminado a mano.",
    imagen: img("/img/zapato-oxford.jpg"),
    alt: "Zapato oxford de cuero cognac sobre fondo de yeso cálido",
  },
  {
    id: "perfumes",
    nombre: "Perfumes",
    descripcion:
      "Fragancias de autor en concentración de eau de parfum, embotelladas en vidrio de ámbar, cristal y humo.",
    imagen: img("/img/perfume-ambar.jpg"),
    alt: "Frasco de perfume de vidrio ámbar con tapa dorada",
  },
];

// El color de la casa: el azul de los ojos, que además hace resaltear el cobre de los productos.
export const AZUL_CASA = {
  nombre: "Azul Sayanes",
  hex: "#1B2438",
  rgb: "27, 36, 56",
  descripcion:
    "El azul profundo que usamos en toda la casa. Es el tono que mejor le queda a ojos claros y el que hace que el cobre de un frasco o de una suela se vea más intenso.",
};

export const PRODUCTOS = [
  {
    id: "oxford-cognac",
    nombre: "Oxford Cognac",
    categoria: "zapatos",
    precio: 3490,
    etiqueta: "Nuevo",
    imagen: img("/img/zapato-oxford.jpg"),
    alt: "Zapato oxford de cuero cognac con cordones, sobre superficie color yeso",
    resumen:
      "El clásico de cordones, en cuero vacuno color cognac con brillo pulido. Suela de goma cocida en tono miel.",
    detalles: [
      "Cuero vacuno curtido al vegetal",
      "Forro de cuero y plantilla de memory foam",
      "Suela de goma cocida en tono miel",
      "Disponible en talles 38 a 45",
    ],
  },
  {
    id: "zapatilla-lino",
    nombre: "Zapatilla Lino",
    categoria: "zapatos",
    precio: 2290,
    etiqueta: null,
    imagen: img("/img/zapato-sneaker.jpg"),
    alt: "Zapatilla blanca de cuero liso con suela color caramelo sobre arena",
    resumen:
      "Cuero blanco liso, suela caramelo y un dibujo limpio que combina con el jean y con el traje.",
    detalles: [
      "Cuero de vacuno blanco liso",
      "Suela de goma caramelo vulcanizada",
      "Plantilla de memory foam",
      "Disponible en talles 36 a 44",
    ],
  },
  {
    id: "mocasin-tabaco",
    nombre: "Mocasín Tabaco",
    categoria: "zapatos",
    precio: 3190,
    etiqueta: null,
    imagen: img("/img/zapato-loafer.jpg"),
    alt: "Mocasín de gamuza color tabaco con herraje de penny sobre fondo claro",
    resumen:
      "Gamuza color tabaco con herraje de penny. Cómodo desde el primer día y afloja con el uso.",
    detalles: [
      "Gamuza de vacuno curtida en pleasant",
      "Herraje de penny en latón",
      "Suela de goma flexible",
      "Disponible en talles 38 a 45",
    ],
  },
  {
    id: "botin-noche",
    nombre: "Botín Noche",
    categoria: "zapatos",
    precio: 4390,
    etiqueta: "Últimos pares",
    imagen: img("/img/zapato-bota.jpg"),
    alt: "Botín de cuero negro con taco bajo sobre fondo greige",
    resumen:
      "Cuero negro mate y taco bajo de bloque. Entra debajo del pantalón sin ruido y no hace ruido al pisar.",
    detalles: [
      "Cuero de novillo negro mate",
      "Taco bajo de bloque de 3,5 cm",
      "Cierre con cremallera lateral",
      "Disponible en talles 37 a 44",
    ],
  },
  {
    id: "ambar-calido",
    nombre: "Ámbar Cálido",
    categoria: "perfumes",
    precio: 2890,
    etiqueta: "Más vendido",
    imagen: img("/img/perfume-ambar.jpg"),
    alt: "Frasco de perfume de vidrio ámbar con tapa dorada y luz de fondo",
    resumen:
      "Vainilla, benjuí y un toque de cuero. Cálido de verdad: queda en la piel después del día.",
    detalles: [
      "Eau de parfum, 100 ml",
      "Notas de cabeza: naranja y cardamomo",
      "Corazón: vainilla, benjuí, iris",
      "Fondo: cuero, cedro, ámbar gris",
    ],
  },
  {
    id: "brisa-cristal",
    nombre: "Brisa Cristal",
    categoria: "perfumes",
    precio: 1990,
    etiqueta: null,
    imagen: img("/img/perfume-cristal.jpg"),
    alt: "Frasco de perfume de vidrio transparente con atomizador sobre fondo avena",
    resumen:
      "Ligero y limpio: sal marina, jazmín y un fondo de almizclado muy discreto.",
    detalles: [
      "Eau de parfum, 50 ml",
      "Notas de cabeza: bergamota, sal marina",
      "Corazón: jazmín, neroli",
      "Fondo: almizclado blanco, musgo",
    ],
  },
  {
    id: "humo-nocturno",
    nombre: "Humo Nocturno",
    categoria: "perfumes",
    precio: 2590,
    etiqueta: null,
    imagen: img("/img/perfume-humo.jpg"),
    alt: "Frasco de perfume de vidrio gris ahumado con tapa negra mate",
    resumen:
      "Piel, incienso y tabaco de pipa. Para las noches de winter, cuando hace fresco y querés quedarte con la piel.",
    detalles: [
      "Eau de parfum, 100 ml",
      "Notas de cabeza: pomelo negro, pimienta",
      "Corazón: incienso, piel",
      "Fondo: tabaco, vetiver, vainilla",
    ],
  },
  {
    id: "verde-sal",
    nombre: "Verde Sal",
    categoria: "perfumes",
    precio: 1790,
    etiqueta: null,
    imagen: img("/img/perfume-verde.jpg"),
    alt: "Frasco de perfume de vidrio verde claro sobre superficie de arena",
    resumen:
      "Hoja de higuera, piña verde y vetiver. Fresco pero con fondo, el que se usa todo el año.",
    detalles: [
      "Eau de parfum, 75 ml",
      "Notas de cabeza: piña verde, hoja de higuera",
      "Corazón: manzana verde, lavanda",
      "Fondo: vetiver, cedro, sándalo",
    ],
  },
];

export const VALORES = [
  {
    titulo: "Envíos a todo el país",
    detalle: "Montevideo sin costo. El resto del país, de 24 a 48 horas.",
  },
  {
    titulo: "Cambios sin costo",
    detalle: "Hasta 30 días, con la etiqueta y el empaque original.",
  },
  {
    titulo: "Cuero curtido a mano",
    detalle: "Trabajamos con dos talleres de curtido de la rambla.",
  },
  {
    titulo: "Asesoría sin vueltas",
    detalle: "Si dudás entre dos talles o dos fragancias, escribinos.",
  },
];

export const TEXTO_CONTACTO = {
  titulo: "Escribinos",
  intro:
    "Contanos qué estás buscando y te respondemos el mismo día. También podés pasar por el local a ver el cuero de verdad.",
  campos: {
    nombre: "Nombre",
    email: "Email",
    telefono: "Teléfono (opcional)",
    mensaje: "Mensaje",
    enviar: "Enviar mensaje",
  },
};
