"use strict";

const item1 = "Yogures";
const precio1= 1.30;
const item2 ="Leche";
const precio2 = 0.65;

const lista = document.querySelector(".js_lista");

// meter una variable en un string 
// opcion1: concatenación (estoy usando comillas simples y no acento abierto)



// lista.innerHTML = '<li>' + item1 + '<span>' + precio1 + '</span></li>';

// opción2: con string template (con acento abierto)- interpolación

// lista.innerHTML = `<li> ${item1} <span> ${precio1} </span></li>`;

// el += en js añade al valor ant de la variable, el "=" machaca el valor ant y lo reemplaza por el nuevo.

// lista.innerHTML += `<li> ${item2} <span> ${precio2} </span></li>`;

// lista.innerHTML+= `<li> ${item2} <span> ${precio2} </span></li>`;

let html = `<li> ${item1} <span> ${precio1} </span></li>`;



html += `<li> ${item2} <span> ${precio2} </span></li>`;

 

html += `<li> total <span> ${precio1 + precio2} </span></li>`;

lista.innerHTML = html;
