'use strict';

const button = document.querySelector('.js_button');
const message= document.querySelector('.js_paragraph')

function writeHello (){
    message.innerHTML = 'Mi primer click';
}

button.addEventListener('click', writeHello);