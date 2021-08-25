'use strict';

const userInput = document.querySelector('.js_input');
const shownText = document.querySelector('.js_paragraph');

function userText(event){
    shownText.innerHTML=event.currentTarget.value;
    //tb funciona con 
    //shownText.innerHTML = userInput.value;
}

userInput.addEventListener('keyup', userText);