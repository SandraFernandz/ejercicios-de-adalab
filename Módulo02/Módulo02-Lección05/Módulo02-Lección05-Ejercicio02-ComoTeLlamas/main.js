'use strict';

const button = document.querySelector(".js_button");

const hiName = () => {
    
    const name = document.querySelector(".js_input").value;
    
    console.log(`Hola ${name}`);
}

button.addEventListener("click", hiName);