'use strict';

const container = document.querySelector('.js_container');
const newBody = document.querySelector('.js_newBody');


function chgColorHandler(){
    if(window.scrollY >= 250){
       container.classList.add('newBody');
    } else{
        container.classList.remove('newBody')
       
    }
}

window.addEventListener('scroll', chgColorHandler);