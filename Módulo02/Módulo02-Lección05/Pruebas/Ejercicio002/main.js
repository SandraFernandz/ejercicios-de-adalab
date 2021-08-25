'use strict';

const button = document.querySelector('.js_button');
const input = document.querySelector('.js_input');

function greetingsNameHandler (){
    const hello = `Hola ${input.value}`
    console.log(hello);
}

button.addEventListener('click', greetingsNameHandler);