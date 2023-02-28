let suma1: number = 0;
let cantidadNumeros: number = 3;

for (let i = 0; i < cantidadNumeros; i++) {
  let numero = Number(prompt(`Ingrese los 3 numeros: `));
  suma1 += numero;
}

let media: number = suma1 / cantidadNumeros;
alert(`La media de los 3 numeros ingresados es: ` + media );