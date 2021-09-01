'use strict';

const arr = [];
let acc = 0;
const arrLength = 100;

function get100Numbers(){
   
    for(let i=0; i < arrLength; i++){
        acc++
        arr.push(acc);
    }
    return arr;
}

console.log(get100Numbers());





// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
// const springMonths = months.splice(4, 3, 'JUNE', 'JULY', 'AUGUST');
// console.log(months);
// console.log(springMonths);