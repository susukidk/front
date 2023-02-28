var salario = Number(prompt('Coloca el sueldo base de la persona: '));
var venta = Number(prompt('Coloca la venta 1: '));
var venta1 = Number(prompt('Coloca la venta 2: '));
var venta2 = Number(prompt('Coloca la venta 3: '));
var comision = (venta + venta1 + venta2) * 0.10;
var suma2 = (salario + comision);
alert("El salario fijo de la persona es: " + salario +
    "\n" + "Venta 1: " + venta +
    "\n" + "Venta 2: " + venta1 +
    "\n" + "Venta 3: " + venta2 +
    "\n" + "La comicion es: " + comision +
    "\n" + "El Resultado de las comiciones y el Sueldo base es: " + suma2);
