let calificon1 = Number(prompt('Ingresa la primera calificacion: '));
let calificon2 = Number(prompt('Ingresa la segunta calificación: '));
let calificon3 = Number(prompt('Ingresa la tercera calificación: '));
let calificonExamen = Number(prompt('Ingresa la calificación del examen: '));
let calificonTrabajo = Number(prompt('Ingresa la calificación de el trabajo final: '));
let promedioCalificacion : number = (calificon1 + calificon2 + calificon3)/3; 
let final : number = (promedioCalificacion * 0.55 + calificonExamen * 0.30 + calificonTrabajo * 0.15);
        alert("La primera calificación ingresada es: "+ calificon1 +"\nLa segunda calificación ingresada es: "+ calificon2 + +"\nLa tercera calificación ingresada es: "+ calificon3 +
                "\n" + "El promedio de las 3 calificaciones: "+ promedioCalificacion  +
                "\n" + "La cailificación del examen es: " + calificonExamen + 
                "\n" + "La cailificación de un trabajo final es: " + calificonExamen +
                "\n" + "La cailificación final es: " + final );
       