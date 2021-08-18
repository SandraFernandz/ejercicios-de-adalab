'use strict';

const button = document.querySelector('.js_button');

function chgBackground(){
   
    button.classList.toggle('buttonStyle');
}


button.addEventListener('click', chgBackground);