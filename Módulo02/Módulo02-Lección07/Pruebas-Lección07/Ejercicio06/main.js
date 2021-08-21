'use strict';

const infoUser = document.querySelector('.js_userWork');
const button = document.querySelector('.js_button');
const movies = [];

function obtainInfo(){

    movies[0] = infoUser.value;
    console.log(movies);

    for(let movie of movies){
        console.log(`A mí también me encantó ${movies[0]}`);
    }
}

button.addEventListener('click', obtainInfo)