'use strict';

//container se refiere al div en el que cambiamos color
//es un div con tantos paragrafos que cambia de color con scroll
const container = document.querySelector('.js_container');

function chgBackground() {
    //podemos crear const activeChg = window.scrollY;
    //y usarlo en la condicional para activeChg>=250

    if (window.scrollY >= 250) {
        container.classList.add('sand')
        //no necesitamos remove xq no partimos de ninguna clase anterior
        // container.classList.remove('blue')
    } else {
        container.classList.remove('sand')
        container.classList.add('blue')
    }
}
//el tipo de evento scroll siempre sucede en window (primer elemento de addEventListener) y está sucediendo en un div
window.addEventListener('scroll', chgBackground)