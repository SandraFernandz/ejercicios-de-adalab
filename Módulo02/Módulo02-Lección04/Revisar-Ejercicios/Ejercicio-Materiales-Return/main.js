'use strict';

function sayHi(name) {
    return "Hi " + name;
  
    return "En un lugar de la Mancha"; //Esta línea nunca se llega a ejecutar
  }
  
  const result = sayHi("Ashley"); //result vale 'Hi Ashley'

  //en la consola se muestra Hi Ashley
  console.log(result);