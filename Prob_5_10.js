// Realice un algoritmo que lea dos vectores de cien elementos y que calcule
// la suma de éstos guardando su resultado en otro vector, el cual se
// debe presentar en forma impresa.

let v1 = [0,1,2,3,4,5,6,7,8,9];
let v2 = [9,8,7,6,5,4,3,2,1,0];
let rpta = [];

for (let i = 0; i < v1.length; i++) {
    rpta[i]= v1[i]+v2[i];
}
console.log(`El array resultante de la suma es [${rpta}]`);