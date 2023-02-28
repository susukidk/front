var cateto1 = Number(prompt('Escribe el primer Cateto: '));
var cateto2 = Number(prompt('Escribe el Segundo Cateto: '));
var potencia1 = Math.pow(cateto1, 2);
var potencia2 = Math.pow(cateto2, 2);
var suma = (potencia1 + potencia2);
var raiz = Math.sqrt(suma);
alert("la hipotenusa funal es: " + raiz);
