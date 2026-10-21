// Formateo de precios en pesos uruguayos. Cambiar la moneda es cambiar "UYU" y "es-UY".
export const precio = (valor) =>
  new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "UYU",
    maximumFractionDigits: 0,
  }).format(valor);
