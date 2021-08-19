'use strict';

const adalaber1 = {};
adalaber1.name = 'María';
adalaber1.run = doing => `Estoy ${doing}`;

//le pasamos un argumento (corriendo) al método (función) del objeto adalaber1
console.log(adalaber1.run('corriendo'));

//añadimos un nuevo método (runAMarathon) al objeto adalaber1, que toma un parámetro distance

adalaber1.runAMarathon = distance => `una marathon de ${distance} kilometros`;

console.log(adalaber1.runAMarathon(50));
console.log(adalaber1.run('corriendo') + " " + adalaber1.runAMarathon('50'));
