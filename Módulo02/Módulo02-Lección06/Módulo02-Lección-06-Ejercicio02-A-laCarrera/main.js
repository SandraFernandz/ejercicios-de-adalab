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

//otra opción

// adalaber1.run = console.log (`Estoy corriendo`);

// adalaber1.runMarathon = 50;

// console.log(`Estoy corriendo una maratón de ${adalaber1.runMarathon} kilómetros`);


// const text = document.querySelector('.text');

// text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;


