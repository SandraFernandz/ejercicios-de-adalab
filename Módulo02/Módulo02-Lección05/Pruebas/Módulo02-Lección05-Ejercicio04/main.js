'use strict';

const container = document.querySelector('.container');

function scrollScreen() {
  //podríamos crear una constante 
  //const scrollMov = window.scrollY y usar esa constante
  //para scrollMov >= 250 en las condicionales
    
    if (window.scrollY >= 250) {
        //no necesitamos que haya el remove porque no partimos de ninguna clase de color
        //container.classList.remove('green')
        container.classList.add('pink')
    } else {
        container.classList.remove('pink')
        container.classList.add('green')
    }
    
}
//el tipo de evento scroll siempre sucede en window (primer elemento de addEventListener) y está sucediendo en un div
window.addEventListener('scroll', scrollScreen )