let precioDefinido : number = Number(prompt ("ingrese un precio definido")); 
let tipo = prompt("ingrese el tipo si es A o B");
let tamaño : number = Number (prompt("ingrese un tamaño ya sea 1 o 2"));
let precioajustado: number = 0;

if (tipo === "A") {
  if (tamaño  === 1) {
    precioajustado = 0.20;
  } else {
    precioajustado = 0.30;
  }
} else {
  if (tamaño  === 1) {
    precioajustado = -0.30;
  } else {
    precioajustado = -0.50;
  }
}
let ultimoprecio : number = precioDefinido  + precioajustado;
let kilosproductor : number = Number(prompt("coloque la cantidad de kilos puestos por el productor")); 
let total : number = ultimoprecio * kilosproductor;
alert("el productor gano: "  + total );