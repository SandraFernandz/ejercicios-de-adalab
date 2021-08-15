'use strict';

let visibleMessage = document.querySelector (".js_message");

let dogAge = 3;

if(dogAge === 1){
    visibleMessage.innerHTML = `Tu perro tiene 15 años de humano`;
} else if (dogAge > 1 && dogAge < 2){
    visibleMessage.innerHTML =`tu perro tiene 9 años de humano`;
} else{
    visibleMessage.innerHTML = "cada año de perro equivale a 5 de humano";
}