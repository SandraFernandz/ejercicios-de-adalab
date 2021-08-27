'use strict';

const numbers = [31, 45, 54, 86, 47];
numbers[5] = 215;
let acc = 0;

for(let i = 0; i < numbers.length; i++){
    let adding = acc += numbers[i];
   console.log(adding);
}

let average = acc/6;
console.log(`The average is ${average}`);

//generalizar el código:
// function average(numbers){
//     for(let i = 0; i < numbers.length; i++){
//         let adding = acc += numbers[i];
//        console.log(adding);
//     }

// let average = acc/numbers.length;
// console.log(`The average is ${average}`);
// }
