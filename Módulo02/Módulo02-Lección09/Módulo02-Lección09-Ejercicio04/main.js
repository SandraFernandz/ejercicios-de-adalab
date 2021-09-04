'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

const main = document.querySelector('.js-main');

//pintar una tarea en el html
//main.innerHTML = `<li>${tasks[0].name}</li>`;

//pintar todas las tareas
//    for(const tarea of tasks){
//      const html = `<li>${tarea.name}</li>`;
//      main.innerHTML += html;
//}

 //hemos creado un estilo completed en css para tachar tareas en las que la propiedad booleana completed === true

 for(const tarea of tasks){
     if(tarea.completed === true){
        const html = `<li class="completed">${tarea.name}</li>`;
        main.innerHTML += html;
     }else{
        const html = `<li>${tarea.name}</li>`;
        main.innerHTML += html;
     }
}

//añadimos input tipo checkbox al final de cada tarea. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
// la tarea debe mostrarse como completada (tachada)
// debemos modificar su estado (propiedad completed) en el array tasks.
