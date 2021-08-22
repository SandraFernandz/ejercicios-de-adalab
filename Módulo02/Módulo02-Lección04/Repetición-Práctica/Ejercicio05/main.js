'use strict';

function getEl(selector){
    const element = document.querySelector('.selector')
    return element;
}


const btnEl = getEl('.btn');
console.log(btnEl);