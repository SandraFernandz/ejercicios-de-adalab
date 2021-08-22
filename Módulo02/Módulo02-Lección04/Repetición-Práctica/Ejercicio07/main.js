'use strict';

function getEl(selector){
    const element = document.querySelector(selector)
    return element;
}

const btnEl = getEl('.js_paragraph');
console.log(btnEl);

const num = parseInt(btnEl.innerHTML);

const evenOrOdd = (num) =>{
    if(num % 2 === 0){
        return `Number ${num} is even`
    }
    else{
        return `Number ${num} is odd`
    }
}

console.log(evenOrOdd(num));