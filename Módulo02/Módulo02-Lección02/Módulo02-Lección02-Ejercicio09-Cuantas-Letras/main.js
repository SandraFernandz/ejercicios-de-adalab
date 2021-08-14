'use strict';

let adalaberName = "Leticia Fernández Sánchez";


adalaberName = "Rosario Menendez";
const numLetters = adalaberName.length;

const writtenText = document.querySelector(".js_text");
writtenText.innerHTML = `El nombre de mi compañera es ${adalaberName}, y está compuesto por ${numLetters} caracteres`;