'use strict';

const button = document.querySelector('.js_button');

function chgBackground(){
    //esta opción debajo tb funcionaría, cambiaría clase inicial de una a otra si una estuviera en html
    // button.classList.replace('buttonColor', 'buttonStyle')
    button.classList.toggle('buttonStyle');
}


button.addEventListener('click', chgBackground);