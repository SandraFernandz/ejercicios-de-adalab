'use strict';

// // elemento de HTML
// const button = document.querySelector('.alert');

// // handler
// function showAlert() {
//   console.log("Mi primer click");
// }

// // listener sobre el elemento, con tipo de evento y handler
// button.addEventListener('click', showAlert);

// elemento de HTML
const button = document.querySelector('.alert');

// handler
// se escribirá 'alerta' en el navegador
function showAlert() {
  console.log('Alerta');
}

// listener sobre el elemento, con tipo de evento y handler

button.addEventListener('click', showAlert);