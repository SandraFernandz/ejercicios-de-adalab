'use strict';

const bodyEl = document.querySelector("body");

function chgColor(event){

    if(event.key === "m"){
        bodyEl.classList.add('purple')
    } else{
        bodyEl.classList.replace('purple', 'red')
    }
}

document.addEventListener('keyup', chgColor);