// Se tiene en un arreglo cien elementos representando calificaciones de
// los estudiantes de una escuela. Realice un algoritmo que lea el arreglo
// y calcule la calificación promedio del grupo, además, que cuente los estudiantes
// que obtuvieron calificaciones arriba del promedio del grupo.
// Represéntelo mediante diagrama de flujo, diagrama N/S y pseudocódigo.

let notas = [12, 15, 18, 16, 17, 20, 18, 11, 16, 16];
let prom = 0;
let acum = 0;
let encimaPromedio = 0;
let debajoPromedio = 0;

for (let i = 0; i < notas.length; i++) {
    acum+= notas[i];    
}
prom=acum/notas.length;
console.log(`El promedio de las notas es ${prom}, de un total de ${notas.length} alumnos`);
for(let j =0;j<notas.length;j++){
    if (notas[j]<prom) {
        debajoPromedio+=1;
    } else{
        encimaPromedio+=1;
    }
}
console.log(`Se tienen ${encimaPromedio} alumnos por encima del promedio`);
console.log(`Se tienen ${debajoPromedio} alumnos por debajo del promedio`);