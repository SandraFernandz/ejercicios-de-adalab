'use strict';

//working with objects and methods

console.log('ready :)');

const numeros = [2, 23, 34, 45, 56];

const articulos = [
  { articulo: 'bambas', id: 1, precio: 39 },
  { articulo: 'camista', id: 4, precio: 139 },
  { articulo: 'bambas', id: 7, precio: 349 },
  { articulo: 'gorro', id: 1, precio: 9 },
];

console.log(articulos[3]);

// método map()
// obtener array de dobles

const dobles = numeros.map(function (numero) {
  return numero * 2;
});

console.log(dobles);

// obtener array de objetos baratos (< 100)

const articulosBaratos = articulos.map(function (producto) {
  if (producto.precio < 100) {
    return producto;
  }
});

console.log(articulosBaratos);

const vengadores = [
  { nombre: 'Tony', apellidos: 'Stark' },
  { nombre: 'Steve', apellidos: 'Rogers' },
  { nombre: 'Bruce', apellidos: 'Banner' },
  { nombre: 'Sasha', apellidos: 'Romanoff' },
  { nombre: 'Thor', apellidos: 'Odinson' },
  { nombre: 'Clint', apellidos: 'Barton' },
];

function generarNombre({ nombre, apellidos }) {
  return `${nombre} ${apellidos}`;
}

const nombres = vengadores.map(generarNombre);

console.log(nombres);

//filter dará nuevo array q contiene SOLO elementos que cumplen condición

// const arraySoloArticulosBaratos = articulos.filter(function (producto) {
//   if (producto.precio < 100) {
//     return producto;
//   }
// });

const esBarato = (articulo) => articulo.precio < 100;
const arraySoloArticulosBaratos = articulos.filter(esBarato);
console.log(arraySoloArticulosBaratos);

const arrayArticulosCaros = (producto) => !esBarato(producto);
console.log(arraySoloArticulosBaratos);

// array que doble cada elemento en su interior

const input = [1, 2, 3, 4, 5];

const doubledArray = input.map(calculateDobleOfElements);

function calculateDobleOfElements(number) {
  return number * number;
}
console.log(doubledArray);

// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input1 = [1, -4, 12, 0, -3, 29, -150]; //result 42

const newArrayInput = input1.filter(sumPositiveNumbers);

function sumPositiveNumbers(num) {
  if (num >= 0) {
    return num;
  }
}
console.log(newArrayInput);

const sumNewArray = newArrayInput.reduce(calculateReduceAddingElements);

function calculateReduceAddingElements(num, nextNum) {
  return (num += nextNum);
}

console.log(sumNewArray);

// REDUCE-SORT-MATH.ABS Calculate the mean and median values of the number elements from the input array. (mean value is durchschnitt, media value is in the middle of values)

const input2 = [12, 46, 32, 64];
const sortedInput = input2.sort();

console.log(sortedInput);
const input2length = input2.length;
console.log(input2length);

const mediaValue = input2.reduce(findTotalValue);

function findTotalValue(num, nextNum) {
  return (num += nextNum) / input2length;
}

console.log(mediaValue);

//MAP-SPLIT-JOIN The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

const stringName = 'George Raymond Richard Martin';

const firstCaptials = stringName
  // '' equivale al separador que queremos emplear, podríamos añadir un segundo
  .split(' ')
  .map(function (word) {
    return word[0];
  })
  .join('');

console.log(firstCaptials);

// let ouch = 'Ouch';
// console.log(typeof ouch);

//MAP-MATH.MAX-MATH.MIN Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const listOfNames = [
  {
    name: 'John',
    age: 13,
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jeniffer',
    age: 65,
  },
];

//let numeros = [10, 4, 7, 15, 3, 25];
//console.log(numeros); // Imprime un array.
//console.log(...numeros); // Imprime una lista de argumentos.

// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const ages = listOfNames.map((person) => person.age);
console.log(ages);

const arrayOfAges = [
  Math.min(...ages),
  Math.max(...ages),
  Math.max(...ages) - Math.min(...ages),
];
console.log(arrayOfAges);

//MAP- SPLIT- JOIN Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const unabreviatedSentence =
  'Every developer likes to mix kubernetes and javascript';

const createNumeronym = (word) =>
  word[0] + (word.length - 2) + word[word.length - 1];

const numeronym = unabreviatedSentence
  .split(' ')
  .map(function (word) {
    if (word.length >= 4) {
      return createNumeronym(word);
    }
    return word;
  })
  .join(' ');

console.log(numeronym);

// MAP-FILL-REDUCE- If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

const givenInput = 6;

const array = new Array(givenInput).fill(null);
// array is [null, null, null, null, null, null]

array
  .map(function (currentValue, index) {
    return index + 1;
  })
  .reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  });

// REDUCE and FLAT Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

const input5 = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];

input.flat().reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
