'use strict';

const arr = [];
let acc = 0;
const arrLength = 100;

function get100Numbers(){
   
    for(let i=0; i < arrLength; i++){
        acc++
        arr.push(acc);
        console.log(acc);
    }
    return arr;
}
//porqué si lo quitamos nos da 200 el bucle como indice?
//console.log(get100Numbers());

function reverseGet100Numbers(){
    const newArray = get100Numbers();   
    console.log(newArray);
    return newArray.reverse();
}

console.log(reverseGet100Numbers())



// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
// const springMonths = months.splice(4, 3, 'JUNE', 'JULY', 'AUGUST');
// console.log(months);
// console.log(springMonths);