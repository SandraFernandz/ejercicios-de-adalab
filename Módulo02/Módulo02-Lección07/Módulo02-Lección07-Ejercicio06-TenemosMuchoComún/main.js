'use strict';

const button = document.querySelector('.button');
const info = document.querySelector('.userWork');
const alsoMine = document.querySelector('.paragraph');

const favWork = [];

function weHaveAlotInCommon(){

    favWork[0] = info.value;
    console.log(favWork);

    for(const movies of favWork){

        console.log(`A mí también me encanta ${favWork[0]}`)
    }
  
}

// let message = alsoMine.innerHTML;
// message = `¡${info} tambien es mi obra favorita!`;


button.addEventListener('click', weHaveAlotInCommon);