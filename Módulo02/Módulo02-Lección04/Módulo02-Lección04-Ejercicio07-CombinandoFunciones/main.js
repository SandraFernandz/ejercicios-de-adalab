'use strict';

function getEl (selector) {
    const element = document.querySelector(selector);
    if(!element){
        return `There is no element, id or tag called ${selector}`;

        //tb se puede aquí usar en lugar del return de la línea 5
        //console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }else{
        return element;
    }
}

const evenOrOdd = (num) =>{
  if(num % 2 === 0){
      return `Number ${num} is even`
  }
  else{
      return `Number ${num} is odd`
  }
}

const numWord = getEl('.js_paragraph');

console.log(`Your number is: ${numWord.innerHTML}`);

const wordNum = parseInt(numWord.innerHTML);

console.log(evenOrOdd(wordNum));




