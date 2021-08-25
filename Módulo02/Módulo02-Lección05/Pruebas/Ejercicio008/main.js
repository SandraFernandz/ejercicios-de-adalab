'use strict';

const button1 = document.querySelector('.js_button1');
const button2 = document.querySelector('.js_button2');


function chgStyleHandler(event){
    const selectedButton = event.currentTarget;
    
    if( event.target === button1){
        selectedButton.classList.toggle('buttonSecondStyle');
       
    } else if (event.target === button2){

        selectedButton.classList.toggle('buttonSecondStyle');
    
       
    }
   
}

button1.addEventListener('click', chgStyleHandler);

button2.addEventListener('click', chgStyleHandler);