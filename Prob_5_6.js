// Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.

let alumno = [];
let edad = [];
let mayor = 0;
let pos;

for (let i = 0; i < 3; i++) {
    alumno[i] = prompt(`Alumno ${i + 1}: Ingrese nombre: `);
    edad[i] = +prompt(`Ingrese la edad del alumno ${i + 1}`);
    if (edad[i] >= mayor) {
        mayor = edad[i];
        pos = i;
    };
};
console.log("Los alumnos inscritos son:");
for (let j = 0; j < alumno.length; j++) {
    console.log(`- ${alumno[j]}, ${edad[j]} años`);
};
console.log(`El mayor de todos es ${alumno[pos]} con ${edad[pos]} años`);
