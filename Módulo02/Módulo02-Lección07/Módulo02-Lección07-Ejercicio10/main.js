'use strict';

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];
//funciona perfecto menos para el último elemento del objeto que es un objeto y con item[i] no se accede a su nombre, dice object Object. quizá la solución sea hacer un if item[i]===3 y concretar para ese caso como en soluciones alumnas n
  for (let i = 0; i< items.length; i++){
      console.log(`El dato ${items[i]} está en la posición ${items.indexOf(items[i])} y es del tipo ${typeof (items[i])}`)
  }