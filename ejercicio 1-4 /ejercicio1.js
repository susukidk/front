var precioDefinido = Number(prompt("ingrese un precio definido"));
var tipo = prompt("ingrese el tipo si es A o B");
var tamaño = Number(prompt("ingrese un tamaño ya sea 1 o 2"));
var precioajustado = 0;
if (tipo === "A") {
    if (tamaño === 1) {
        precioajustado = 0.20;
    }
    else {
        precioajustado = 0.30;
    }
}
else {
    if (tamaño === 1) {
        precioajustado = -0.30;
    }
    else {
        precioajustado = -0.50;
    }
}
var ultimoprecio = precioDefinido + precioajustado;
var kilosproductor = Number(prompt("coloque la cantidad de kilos puestos por el productor"));
var total = ultimoprecio * kilosproductor;
alert("el productor gano: " + total);
