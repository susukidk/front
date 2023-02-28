var minutosTotales = Number(prompt('Ingrese una cantidad de minutos: '));
var horas = Math.floor(minutosTotales / 60);
var minutos = minutosTotales % 60;
alert('los minutos ingresados en hora y  minutos son: ' + horas + ' horas y ' + minutos + 'minutos');
