let salario = Number(prompt('Coloca el sueldo base de la persona: '));
let venta = Number(prompt('Coloca la venta 1: '));
let venta1 = Number(prompt('Coloca la venta 2: '));
let venta2 = Number(prompt('Coloca la venta 3: '));
let comision : number = (venta + venta1 + venta2) * 0.10;
let suma2 : number = (salario + comision);
alert("El salario fijo de la persona es: "+ salario +
       "\n" + "Venta 1: " + venta + 
       "\n" + "Venta 2: " + venta1 + 
       "\n" + "Venta 3: " + venta2 +
       "\n" + "La comicion es: " + comision +
       "\n" + "El Resultado de las comiciones y el Sueldo base es: " + suma2);