var calificon1 = Number(prompt('Ingresa la primer calificación de la materia de Algoritmos: '));
var calificon2 = Number(prompt('Ingresa la segunta calificación de la materia de Algoritmos: '));
var calificon3 = Number(prompt('Ingresa la tercera calificación de la materia de Algoritmos: '));
var calificonExamen = Number(prompt('Ingresa la calificación del examen de la materia de Algoritmos: '));
var calificonTrabajo = Number(prompt('Ingresa la calificación de un trabajo final de la materia de Algoritmos: '));
var promedioCalificacion = (calificon1 + calificon2 + calificon3) / 3;
var final = (promedioCalificacion * 0.55 + calificonExamen * 0.30 + calificonTrabajo * 0.15);
alert("La primera calificación ingresada es: " + calificon1 + "\nLa segunda calificación ingresada es: " + calificon2 + +"\nLa tercera calificación ingresada es: " + calificon3 +
    "\nEl promedio de las 3 calificaciones es: " + promedioCalificacion +
    "\nLa cailificación final del examen es: " + calificonExamen +
    "\nLa cailificación de un trabajo final es: " + calificonExamen +
    "\nLa cailificación final es: " + final);
