//descuento dependiendo de la compra del importe
const importeCompra = 2500;
if (importeCompra > 5000) {
  console.log(
    "descuento 18% total a pagar con descuento:",
    importeCompra * 0.82
  );
} else {
  if (importeCompra > 1000) {
    console.log("el importe con el 10% de descuento es:", importeCompra * 0.9);
  } else {
    console.log("no hay descuento si es menos de $1000");
  }
}