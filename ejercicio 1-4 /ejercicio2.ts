


let alumnos : number = Number(prompt("Coloque el Numero de alumnos :"));
let costoAlumno : number;
let totalCosto : number;
if (alumnos >= 100) {
  costoAlumno = 65;
} else if (alumnos >= 50) {
  costoAlumno = 70;
} else if (alumnos >= 30) {
  costoAlumno = 95;
} else {
  costoAlumno = 4000 / alumnos;
}
totalCosto = costoAlumno * alumnos;
alert("El precio para los alumnos: " + costoAlumno + "\n" + "el costo para los autobuses es: " + totalCosto );
