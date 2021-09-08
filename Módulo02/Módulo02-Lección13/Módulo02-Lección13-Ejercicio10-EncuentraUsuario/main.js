"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

//a/ encontrar un usuario con pin determinado con find

const userWithThisPin = users.find((user) => user.pin === 5232);
console.log(userWithThisPin); //Rocío

//b/ Borrar del array el ususario. Para ello, encontrarlo con findIndex y dar con su posición y luego aplicar splice para borrarlo.

const findArrayIndexOfUser = users.findIndex(
  (userPosition) => userPosition.pin === 5232
);

console.log(findArrayIndexOfUser); //3

//borrar a ese usuario con splice
const eraseUser = users.splice(3, 1);
console.log(eraseUser);
console.log(users);
