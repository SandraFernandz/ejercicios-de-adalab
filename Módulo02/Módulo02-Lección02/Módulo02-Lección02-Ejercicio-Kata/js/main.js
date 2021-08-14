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
// 2. Traer el <span> donde se escribirá el texto modificado.
// 3. Obtener el texto que contiene.
// 4. Transformar el texto a mayúsculas.
// 5. Poner el texto transformado en el <span> destino.

const containerOrigin = document.querySelector(".js_origin");
const containerTarget = document.querySelector(".js_target");

// recoge lo que hay en el html de esa clase
const text = containerOrigin.innerHTML;
//toLocalUpperCase(); pasa a may en cualquier alfabeto
const upperText = text.toLocaleUpperCase();
// recoge el valor de la variable (lo podemos ver en el devTools console)
// console.log(containerOrigin.innerHTML);

containerTarget.innerHTML = upperText;