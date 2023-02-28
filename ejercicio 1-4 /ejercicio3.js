var llamada = Number(prompt("Coloca los minutos de la llamada"));
var dia = Number(prompt("Si el dia es Domingo ingresa el No.1, si el dia es cualquier otro ingresa el No.2"));
var turno = Number(prompt("Si el turno es de mañana ingresa el No.1, si es el de la tarde ingresa el No.2"));
var precio = 1;
var precio2 = 0.8;
var precio3 = 0.7;
var precio4 = 0.5;
var domingo = 0.03;
var mañana = 0.15;
var tarde = 0.1;
var costoLlamada;
var impuesto;
if (llamada <= 5) {
    costoLlamada = llamada * precio;
}
else if (llamada <= 8) {
    costoLlamada = 5 * precio + (llamada - 5) * precio2;
}
else if (llamada <= 10) {
    costoLlamada = 5 * precio + 3 * precio2 + (llamada - 8) * precio3;
}
else {
    costoLlamada = 5 * precio + 3 * precio2 + 2 * precio3 + (llamada - 10) * precio4;
}
if (dia === 1) {
    impuesto = costoLlamada * domingo;
}
else if (turno === 1) {
    impuesto = costoLlamada * mañana;
}
else {
    impuesto = costoLlamada * tarde;
}
var costoTotal = costoLlamada + impuesto;
alert("El costo de la llamada es de " + costoLlamada +
    "\n" + "y el impuesto es de " + impuesto +
    "\n" + "El costo total es de " + costoTotal);
