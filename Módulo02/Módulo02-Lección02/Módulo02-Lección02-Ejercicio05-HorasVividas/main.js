'use strict';

const calcAge = document.querySelector(".js_age");
debugger
const age = 47;
const hoursYear = 24 * 365;
const answerHours = hoursYear * age;
console.log(`He vivido ${answerHours} horas`);

calcAge.innerHTML = "He vivido" + " " + answerHours +" " + "horas";

