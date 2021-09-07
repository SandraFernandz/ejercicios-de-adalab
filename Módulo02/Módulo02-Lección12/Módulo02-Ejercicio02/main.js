"use strict";

const madrid = document.querySelector(".js-madrid");
const newYork = document.querySelector(".js-new-york");
const paris = document.querySelector(".js-paris");
const select = document.querySelector(".js_select");

const selectMadrid = document.querySelector(".js-sel-madrid");
const selectNewYork = document.querySelector(".js-sel-new-york");
const selectParis = document.querySelector(".js-sel-paris");

//quedaría hacer las otras opciones, que si elijo NY en el desplegable con un else if, y que las fotos que aparezcan sean todas de Ny tb con otro else if
function chooseDestiny() {
  if (select.value === "Madrid") {
    //en realidad por lección querríamos formular la siguiente línea con
    //madrid.setAttribute('src', './images/madrid2.jpg');
    madrid.src = "./images/madrid2.jpg";
    paris.src = "./images/madrid2.jpg";
    newYork.src = "./images/madrid2.jpg";
  }
}

select.addEventListener("change", chooseDestiny);

// con query selector cogemos solo el select
// y lo guardamos en variable pe select y automáticamente ese se pone en cada option

//ponemos evento change sabemos qe ha cambiado
