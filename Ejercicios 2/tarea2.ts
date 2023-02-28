let base : number = Number(prompt('Ingrese la base del Rectangulo:')) ?? ""; //asi se tipea un codigo 
let altura = Number(prompt('Ingrese la altura de el Rectangulo'));
alert("El Perimetro es: " + (base*2 + altura*2));
alert("El Area es: " + (base * altura));