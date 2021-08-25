'use strict';

const button = document.querySelector('.js_button');

function chgStyleHandler(event){
    button = button.classList.toggle('button2');
}


button.addEventListener('click', chgStyleHandler);