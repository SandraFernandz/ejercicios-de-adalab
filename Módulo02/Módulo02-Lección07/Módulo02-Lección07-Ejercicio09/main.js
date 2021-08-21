'use strict';

//Si escribimos en la consola de DevTools del navegador
document.querySelectorAll('h1')

// devuelve 
// NodeList []0

//Si escribimos 
document.querySelectorAll('h1')[0]
//devuelve undefined

//Si escribimos
document.querySelectorAll('h1')[0].className;
//nos muestra 
//Uncaught TypeError: Cannot read property 'className' of undefined at <anonymous>:1:35

//Si escribimos
document.querySelectorAll('asdf')
// devuelve 
//NodeList []length: 0[[Prototype]]: NodeList

