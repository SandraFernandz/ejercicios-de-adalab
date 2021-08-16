'use strict';

const evenOrOdd = (num) =>{
  if(num % 2 === 0){
      return `Number ${num} is even`
  }
  else{
      return `Number ${num} is odd`
  }
}

console.log(evenOrOdd(9999));


function getEl (selector) {
    const element = document.querySelector(selector);
    if(!element){
        return `No existe ningún elemento con clase, id o tag llamado ${selector}`;

        //tb se puede aquí usar en lugar del return de la línea 5
        //console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }else{
        return element;
    }
}

const btnEl = getEl('.js_title');
console.log(btnEl);