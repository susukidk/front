var suma1 = 0;
var cantidadNumeros = 3;
for (var i = 0; i < cantidadNumeros; i++) {
    var numero = Number(prompt("Ingrese los 3 numeros: "));
    suma1 += numero;
}
var media = suma1 / cantidadNumeros;
alert("La media de los 3 numeros ingresados es: " + media);
