let llamada : number = Number(prompt("Coloca los minutos de la llamada"));
let dia : number =  Number (prompt("Si el dia es Domingo ingresa el No.1, si el dia es cualquier otro ingresa el No.2"));
let turno : number = Number(prompt("Si el turno es de mañana ingresa el No.1, si es el de la tarde ingresa el No.2"));
let precio = 1;
let precio2 = 0.8;
let precio3 = 0.7;
let precio4 = 0.5;
let domingo = 0.03;
let mañana = 0.15;
let tarde = 0.1;
let costoLlamada: number;
let impuesto: number;

if (llamada <= 5) {
  costoLlamada = llamada * precio;
} else if (llamada <= 8) {
  costoLlamada = 5 * precio + (llamada - 5) * precio2;
} else if (llamada <= 10) {
  costoLlamada = 5 * precio + 3 * precio2 + (llamada - 8) * precio3;
} else {
  costoLlamada = 5 * precio + 3 * precio2 + 2 * precio3 + (llamada - 10) * precio4;
}
if (dia === 1) {
    impuesto = costoLlamada * domingo;
  } else if (turno === 1) {
    impuesto = costoLlamada * mañana;
  } else {
    impuesto = costoLlamada * tarde;
  }
let costoTotal = costoLlamada + impuesto;
alert("El costo de la llamada es de " + costoLlamada + 
        "\n" + "y el impuesto es de " + impuesto + 
        "\n" + "El costo total es de " + costoTotal);
