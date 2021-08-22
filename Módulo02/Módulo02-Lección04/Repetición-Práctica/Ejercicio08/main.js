'use strict';

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

// console.log(mySecretLetter()); // devuelve "x"
// console.log(secretLetter); // devuelve "x"

//si cambiamos el orden de los console.log
console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"

//porque lo está leyendo en ese orden y let secretLetter aún no ha sido reescrita. Interesante!!
