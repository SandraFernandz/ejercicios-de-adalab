'use strict';

const input = document.querySelector('.js_input');

function inputText (){
     console.dir(input);
     console.log(input);
 }

inputText();
//si es un string devuelven un string tanto log como dir
console.log('Hola');
console.dir('Hola');

//si es un objeto, log devuelve la forma html y dir devuelve un árbol de propiedades
console.log(document.body);
console.dir(document.body);

// Reference to object: console.log take direct reference of the object it is logging while console.dir makes a copy of the object before logging.
// DOM interaction: Using console.log you can interact with document object (DOM) but using console.dir you can not.
// Output type: console.log prints the object in an HTML like a tree while console.dir prints the element in a JSON like a tree.

// Console.dir()
// El método dir() de Console despliega una lista interactiva de las propiedades del objeto JavaScript especificado. El resultado es presentado como un listado jerárquico con triángulos de despliegue que te dejan ver los contenidos de los objetos hijos.

// Dicho de otra manera, console.dir() es la manera de ver todas las propiedades de un objeto JavaScript específicado por consola, mediante la cual el desarrollador puede facilmente obtener las propiedades del objeto.