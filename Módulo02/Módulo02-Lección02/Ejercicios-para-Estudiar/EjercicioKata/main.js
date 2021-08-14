'use strict';

// Objetivo:
//   Debéis poner el texto que está en el span de la derecha del primer div
// dentro del span del segundo div, transformando el texto en mayúsculas y
// usando unicamente JavaScript (podéis poner clases en las etiquetas del HTML).
// Pista: buscad en MDN los métodos de strings.
//
// Pasos:
//
// 1. Traer el <span> con el texto original a una constante.
const originText = document.querySelector(".js_origin");
// 2. Traer el <span> donde se escribirá el texto modificado.
const targetText = document.querySelector(".js_target");
// 3. Obtener el texto que contiene.
const textToChange = originText.innerHTML;
const textUpper = textToChange.toLocaleUpperCase();

targetText.innerHTML = textUpper;

// // 4. Transformar el texto a mayúsculas.
// const newText = textToChange.toLocalUpperCase();
// // 5. Poner el texto transformado en el <span> destino.
// targetText.innerHTML = newText;