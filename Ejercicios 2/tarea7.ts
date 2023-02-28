let minutosTotales = Number(prompt('Ingrese una cantidad de minutos: '));

let horas: number = Math.floor(minutosTotales / 60);
let minutos: number = minutosTotales % 60;
alert('los minutos ingresados en hora y  minutos son: ' + horas + ' horas y ' + minutos + 'minutos');

