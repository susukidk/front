var total = Number(prompt('Coloque el precio de la compra '));
var rebaja = (total * .15) / 100;
var precioFinal = (total - rebaja);
alert("El precio ingresado es: " + total +
    "\n" + "el descuento seria: " + rebaja +
    "\n" + "para que pague el valor de: " + precioFinal);
