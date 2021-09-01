'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const newArr = [];
const multiple3Array = [];

function bestLostNumber(){
for(let i =0; i < lostNumbers.length; i++){
    if(lostNumbers[i] % 2 === 0){
        newArr.push(lostNumbers[i]);
        
    }else if(lostNumbers[i] % 3 === 0){
        multiple3Array.push(lostNumbers[i])
    }
    }
    const newAwarray = newArr.concat(multiple3Array);
    return newAwarray;
}

console.log(bestLostNumber());


// console.log(newArr);
// console.log(multiple3Array);
//console.log(newArr.concat(multiple3Array));

