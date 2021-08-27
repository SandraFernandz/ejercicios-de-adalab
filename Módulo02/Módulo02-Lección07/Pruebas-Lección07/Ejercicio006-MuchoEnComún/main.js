// 'use strict';

// const button = document.querySelector('.js_button');
// const film = document.querySelector('.js_film');

// const films =[];
// let i= 0;


// function addFilm(){
    
//     films[i] = films[films.length];
// for(let userFilm of films){
//  userFilm += films[films.length + i];
//  console.log(films);
// }

// console.log(`A mí también me encantó ${film.value}`);
// }

// button.addEventListener('click', addFilm);


// ángela


const inputFilm=document.querySelector('.js_input1');
const inputBook=document.querySelector('.js_input2');
const button=document.querySelector('.js_button');


const hobbies=[];
function checkTheMatch(){
    //si ponemos añade en el array
    //hobbies[i++] = inputFilm.value;
    //hobbies[i++] = inputBook.value;
    hobbies[0]= inputFilm.value;
    hobbies[1]= inputBook.value;
    console.log(hobbies)
    for (const hobbie of hobbies){
        console.log ('A mí también me encanta '+ hobbie);
    }
    
}


button.addEventListener('click', checkTheMatch)