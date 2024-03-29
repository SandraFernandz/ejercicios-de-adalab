'use strict';

let adalabers = [
    { 
    nombre: 'María',
    edad:32,
    profesión: 'veterinaria'
    },
    {
    nombre: 'Lola',
    edad: 35,
    profesión: 'periodista'
    },
    {
    nombre: 'Carmen',
    edad: 39,
    profesión: 'bailarina'
    },
    {
    nombre: 'Asunción',
    edad: 25,
    profesión: 'somelier'
    },
    {    
    nombre: 'Clarisa',
    edad: 39,
    profesión: 'interiorista'
    },
];

//función que devuelve el número de adalabers del arreglo
function countAdalabers (){
    console.log(adalabers.length);
}
countAdalabers();

 //función que devuelve media de edad de adalabers del arreglo
 let totalAge = 0;
 function averageAge(){   
    for(let i = 0; i < adalabers.length; i++){
        totalAge += adalabers[i].edad;
    }

   let averageAge = totalAge / adalabers.length;
   return averageAge;
}

console.log('La media es' + " " +averageAge());
//tb funciona si escribimos
//console.log('La media es' + " " +averageAge(adalabers));

//función para obtener nombre de la Adalaber más joven
function theYoungest(){
    // * Inicializar variables: 
  //Posición inicial para comenzar el ciclo for, 1er objeto a comparar
  let youngest = adalabers[0].edad;
  //Posición de la adalaber más joven
  let position = 0;
  //Recorrido para comparar edades en el array (edad en índice 0 sirve de base, por eso empezamos en i = 1)
  for(let i = 1; i < adalabers.length; i++){
      let ageAdalaber = adalabers[i].age;

  //Detecta Adalaber más joven
  if(ageAdalaber < youngest){
      youngest = ageAdalaber;
  }

  if(ageAdalaber === youngest){
      position = i;
  }
}

//relaciona el índice con el valor nombre
let youngestAge = adalabers[position].name
return youngestAge
}

console.log(`La adalaber más joven es ${theYoungest()}`)


//función para contar adalabers q son diseñadoras

function countDesigners(){
    //establece variables
    let designer = 'designer';
    //número de diseñadoras
    let howMany = 0;
    
    //bucle para buscar designers en el objeto adalabers
    for(let j = 0; j < adalabers.length; j++){

        let adalaberDesigner = adalabers[j].profession;

        //busca diseñadoras y las va sumando
        if(adalaberDesigner === designer){
            howMany = howMany + 1;
        }
    } 
    return howMany
}


console.log(`Hay ${countDesigners()} diseñadora/s entre las Adalabers`);