'use strict';

const adalabers = [
    {
        name: 'María',
        age: 29,
        profession: 'journalist'
    },
    {
        name: 'Gillian',
        age: 45,
        profession:'actress'
    },
    {
        name: 'Suze',
        age: 34,
        profession: 'dancer'
    },
    {
        name: 'Nella',
        age: 40,
        profession: 'designer'
    }
];

// función que cuenta el número de adalabers
function countAdalabers(){
    const numAdalabers = adalabers.length;
    console.log(numAdalabers);
}
countAdalabers();

//función que devuelve media de edad de adalabers
let calcAge = 0;
function averageAge(){
    for(let i = 0; i < adalabers.length; i++){
        calcAge += adalabers[i].age;
    }

   let obtainAge = calcAge / adalabers.length;
   return obtainAge;
}

console.log(`La edad media de las Adalabers es de ${averageAge()}`);

//función para obtener nombre de la Adalaber más joven
function theYoungest(){
    // * Inicializar variables: 
  //Posición inicial para comenzar el ciclo for, 1er objeto a comparar
  let youngest = adalabers[0].age;
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

  




