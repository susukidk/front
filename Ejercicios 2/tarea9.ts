let total : number = Number(prompt('Coloque el precio de la compra '));
let rebaja : number = (total * .15)/100;
let precioFinal : number = (total - rebaja);
alert("El precio ingresado es: "+ total +
    "\n" + "el descuento seria: "+ rebaja  +
    "\n" + "para que pague el valor de: " + precioFinal);
       
        
    
    