'use strict';

const input = document.querySelector('.js_input');
const paragraph = document.querySelector('.js_paragraph');

function addLetterHandler (event){
  paragraph.innerHTML = event.currentTarget.value;
  //tb funciona con
  //  paragraph.innerHTML = input.value;
}

input.addEventListener('keyup', addLetterHandler);