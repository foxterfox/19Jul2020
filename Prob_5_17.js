// Una compañía de transporte cuenta con cinco choferes, de los cuales
// se conoce: nombre, horas trabajadas cada día de la semana (seis días)
// y sueldo por hora. Realice un algoritmo que:
// a) Calcule el total de horas trabajadas a la semana para cada trabajador.
// b) Calcule el sueldo semanal para cada uno de ellos.
// c) Calcule el total que pagará la empresa.
// d) Indique el nombre del trabajador que labora más horas el día lunes.
// e) Imprima un reporte con todos los datos anteriores.

// |        | Dia1 	| Dia2 	| Dia3 	| Dia4 	| Dia5 	| Dia6 	| Sueldo/h (USD) |
// |--------|------	|------	|------	|------	|------	|------	|----------------|
// | Thony  | 5    	| 4    	| 6    	| 8    	| 9    	| 5    	| 8              |
// | Erick  | 6    	| 5    	| 4    	| 6    	| 8    	| 3    	| 9              |
// | Juan   | 7    	| 8    	| 5    	| 4    	| 6    	| 7    	| 10             |
// | Jose   | 9    	| 3    	| 8    	| 5    	| 4    	| 6    	| 12             |
// | Manuel | 8    	| 5    	| 5    	| 3    	| 5    	| 4    	| 10             |

let company = [
    ["Thony",5, 4, 6, 8, 9, 5, 8],
    ["Erick",6, 5, 4, 6, 8, 3, 9],
    ["Juan",7, 8, 5, 4, 6, 7, 10],
    ["Jose",9, 3, 8, 5, 4, 6, 12],
    ["Manuel",8, 5, 5, 3, 5, 4, 10]
];
let resultados=[[],[],[],[],[]];
let totalEmpresa=0;
let maxHorasLunes=0;
let masTrabajo;

for (let i = 0; i < company.length; i++) {
    let totalHrs=0;
    for (let j = 1; j < company[i].length-1; j++) {
        totalHrs+=company[i][j];
    }
    if (company[i][1]>maxHorasLunes) {
        maxHorasLunes=company[i][1];
        masTrabajo=i;
    }
    resultados[i][0]=company[i][0];
    resultados[i][1]=totalHrs;
    resultados[i][2]=totalHrs*company[i][company[i].length-1];
    totalEmpresa+=resultados[i][2];
}
console.log("######### RESULTADOS ###########");
for (let k = 0; k < resultados.length; k++) {
    console.log(`-- ${resultados[k][0]} trabajó ${resultados[k][1]} hrs, y recibira $${resultados[k][2]} de sueldo semanal `);
}
console.log(`- El trabajador que mas laboró el dia LUNES es: ${resultados[masTrabajo][0]}`);
console.log(`- Total a Pagar por la EMPRESA: $${totalEmpresa}`);
