// Realice un algoritmo que lea un vector y a partir de él forme un segundo
// vector, de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. Represéntelo mediante un diagrama de flujo.

// Realice un algoritmo que lea un vector y a partir de él forme un segundo
// vector, de tal forma que el primer elemento pase a ser el segundo,
// el segundo pase a ser el tercero, el último pase a ser el primero, y así
// sucesivamente. Represéntelo mediante un diagrama de flujo.

let vector1 = [];
let vector2 = [];

for (let i = 0; i < 10; i++) {
    vector1[i]=prompt(`Ingrese el valor de posicion ${i} del vector de 10 elementos`);
}
vector2[0]=vector1[vector1.length-1];
console.log(`El vector que Ud ingreso es: ${vector1}`);
for (let j = 0; j <vector1.length-1; j++) {
    vector2[j+1]=vector1[j];
}
console.log(`El nuevo vector reordenado es: ${vector2}`);