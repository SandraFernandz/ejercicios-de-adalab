'use strict';

const list = document.querySelector('.js_task1');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

//bucle para pintar 

  for(let task of tasks){
  const html =`<li>${task.name}</li>`;
  list.innerHTML += html;

}

  // if(tasks[0].completed === true){
  //   list.classList.add('task1');
  // }else{
  //     list.classList.remove('task1')
  // }


