"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

const main = document.querySelector(".js-main");

//pintar una tarea en el html
//main.innerHTML = `<li>${tasks[0].name}</li>`;

//pintar todas las tareas
//    for(const tarea of tasks){
//      const html = `<li>${tarea.name}</li>`;
//      main.innerHTML += html;
//}

//hemos creado un estilo completed en css para tachar tareas en las que la propiedad booleana completed === true
//añadimos input tipo checkbox al lado de cada tarea(en JS):
//añadimos input tipo checkbox al final de cada tarea. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado xq hemos añadido atributo (checked).
//añadimos clase js_input en js para poder trabajar con ellos en un eventListener

//  for(const tarea of tasks){
//      if(tarea.completed === true){
//         const html = `<li class="completed"><input class ="js_input" type="checkbox">${tarea.name}</li>`;
//         main.innerHTML += html;
//      }else{
//         const html = `<li><input class ="js_input" type="checkbox">${tarea.name}</li>`;
//         main.innerHTML += html;
//      }
// }
function render() {
  main.innerHTML = "";
  for (let index = 0; index < tasks.length; index++) {
    //la const data va a decirme por qué elemento de tasks está pasando el índice
    const data = tasks[index];
    //añadimos un id ${index} al input para que actúe como gancho y lo conecte al bucle for clásico que hemos creado aquí
    if (data.completed === true) {
      const html = `<li class="completed"><input id="${index}" class ="js_input" type="checkbox">${data.name}</li>`;
      main.innerHTML += html;
    } else {
      const html = `<li><input id="${index}" class ="js_input" type="checkbox">${data.name}</li>`;
      main.innerHTML += html;
    }
  }
  //  Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
  // la tarea debe mostrarse como completada (tachada)
  // debemos modificar su estado (propiedad completed) en el array tasks.

  const allInput = document.querySelectorAll(".js_input");

  //atención! querySelectorAll ALL xq queremos que seleccione todos los inputs, no solo 1. Escuchamos un evento click en todos los inputs (cualquiera de ellos para que quite haga algo)

  for (const eachInput of allInput) {
    eachInput.addEventListener("click", handleClickTask);
  }
}

//defino la función manejadora del bucle que recorre el array con nuestras tareas.
//como es una función manejadora vinculada a un evento (click) le paso por defecto
//el parámetro ev

function handleClickTask(ev) {
  console.log(ev.target);

  const indexToChange = ev.target.id;
  if (tasks[indexToChange].completed === true) {
    tasks[indexToChange].completed = false;
  } else {
    tasks[indexToChange].completed = true;
  }
}
render();
