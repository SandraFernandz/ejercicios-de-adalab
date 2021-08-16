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