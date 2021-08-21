'use strict';

function workingWithMovies(){

const films = ['Suddenly', 'Frozen', 'Brave'];
console.log(films);


//añadimos un nuevo elemento al array con índice 3
films[3] = 'Jumanji';
console.log(films);

//modificar una película
films[1] = 'Titanic';
}

//Muy importante no olvidar los paréntesis que siguen a la función para LLAMAR A LA FUNCIÓN vs loggear la función
console.log(workingWithMovies());