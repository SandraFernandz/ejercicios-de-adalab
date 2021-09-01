'use strict';

const numberInput = document.querySelector('.js-number');
const testButton = document.querySelector('.js-test-button');
const tipTextElement = document.querySelector('.js-tip');
const counterElement = document.querySelector('.js-counter');
const form = document.querySelector('.js-form');

/* Número aleatorio */
const randomNumber = getRandomNumber(100);

/* Conador de intentos */
let counter = 0;

console.log(`Mi número aleatorio es ${randomNumber}`);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function writeTip(message) {
  tipTextElement.innerHTML = message;
}

function compareNumbers() {
  const playerNumber = parseInt(numberInput.value);

  if (isNaN(playerNumber)) {
    writeTip('Pista: Tienes que escribir un número entero.');
  } else if (playerNumber <= 0 || playerNumber > 100) {
    writeTip('Pista: El número debe estar entre 1 y 100');
  } else if (playerNumber > randomNumber) {
    writeTip('Pista: Demasiado alto.');
  } else if (playerNumber < randomNumber) {
    writeTip('Pista: Demasiado bajo.');
  } else if (playerNumber === randomNumber) {
    writeTip('¡¡¡Has ganado campeona!!!');
  }
}

function writeCounter() {
  counterElement.value = `Número de intentos: ${counter}`;
}

function updateCounter() {
  /*
  Instrucciones equivalentes:
  counter = counter + 1;
  counter += 1;
  counter++;
  ++counter;
*/

  counter = counter + 1;
  writeCounter();
}

function handleClick(ev) {
  compareNumbers();
  updateCounter();
}

testButton.addEventListener('click', handleClick);

/**
 * Función para evitar que los datos del formulario se envíen
 * al pulsar Enter o hacer click en el botón.
 *
 * @param {Event} ev Evento del navegador
 */

function handleSubmit(ev) {
  ev.preventDefault();
}

form.addEventListener('submit', handleSubmit);
