'use strict';

const button1 = document.querySelector('.js_button1');
const button2 = document.querySelector('.js_button2');


function chgBackground(event){

    if(event.target === button1){
        button1.classList.toggle('buttonStyle');
    } else if(event.target === button2){
        button2.classList.toggle('buttonStyle');
    }  
   
}

button1.addEventListener('click', chgBackground);
button2.addEventListener('click', chgBackground);

//otra manera de hacerlo es como lo ha hecho andrea
// const button1 = document.querySelector('.button1');
// const button2 = document.querySelector('.button2');

// function changeStyle (event){
//    const selectedButton = event.currentTarget;
//     selectedButton.classList.toggle('buttonStyle');
// }

// button1.addEventListener('click', changeStyle);
// button2.addEventListener('click', changeStyle);