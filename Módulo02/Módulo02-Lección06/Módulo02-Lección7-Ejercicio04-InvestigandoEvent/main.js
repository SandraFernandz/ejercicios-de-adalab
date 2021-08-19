'use strict';

const button = document.querySelector('.js_button');

function logObject(event){
    console.log(event);
//o podemos escribir para acceder a type directamente en lugar de desplegar el triángulo que aparece a la izquierda 
//console.log(event.type);
}

button.addEventListener('click', logObject);