"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];
//elToCompare es cada uno de los objetos, elemento que voy a retornar
//compararemos ambos elementos elToCompare y time
//elToCompare guarda valor que quiero retornar
//dentro de llaves comparamos

const winner = runners.reduce((elToCompare, currentTime) => {
  debugger;
  if (elToCompare.time < currentTime.time) {
    return elToCompare;
  } else {
    return time;
  }
});
console.log(winner);
