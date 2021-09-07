'use strict'
​
const madrid = document.querySelector('.js-madrid');
const newYork = document.querySelector('.js-new-york');
const paris = document.querySelector('.js-paris');
const select = document.querySelector('.js_select');

const selectMadrid = document.querySelector('.js-sel-madrid');​
const selectNewYork = document.querySelector('.js-sel-new-york');
const selectParis = document.querySelector('.js-sel-paris');
​
function chooseDestiny() {
    select.value
    madrid.src = 'https://unsplash.com/photos/HBD6Zfzzo0c';
}
​
select.addEventListener('change', chooseDestiny);




// con query selector cogemos solo el select
// y lo guardamos en variable pe select y automáticamente ese se pone en cada option

//ponemos evento change sabemos qe ha cambiado

