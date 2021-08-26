'use strict';

const button = document.querySelector('.js_button');

function handlerFunction(event){
    console.log (event);
}

button.addEventListener('click', handlerFunction);

    
