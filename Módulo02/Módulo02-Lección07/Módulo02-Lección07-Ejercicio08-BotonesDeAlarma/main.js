'use strict';

const button = document.querySelectorAll('.button');
const background = document.querySelector('.body');

function changeColorHandler(){
        background.classList.toggle('redBackground');
}

button[0].addEventListener('click', changeColorHandler);
button[1].addEventListener('click', changeColorHandler);
button[2].addEventListener('click', changeColorHandler);