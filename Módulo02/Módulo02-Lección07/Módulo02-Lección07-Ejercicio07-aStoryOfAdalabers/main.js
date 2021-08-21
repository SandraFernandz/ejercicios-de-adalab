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

//una función que devuelve el nombre de adalaber más joven

let j =0;
function theYoungest(){
    let youngest = adalabers[j].edad;
    let adalabersName = adalabers[j].nombre;
    for (let j = 0; j < adalabers.length; j++){

    }

}