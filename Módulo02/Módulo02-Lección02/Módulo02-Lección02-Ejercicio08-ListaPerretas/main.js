'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dina = document.querySelector('.js_dina');
dina.innerHTML= `<img src="${firstDogImage}"/> ${firstDogName}`;
const luna = document.querySelector(".js_luna");
luna.innerHTML= `<img src="${secondDogImage}"/> ${secondDogName}`;
const lana = document.querySelector(".js_lana");
lana.innerHTML = `<img/ src=${thirdDogImage}> ${thirdDogName}`;
