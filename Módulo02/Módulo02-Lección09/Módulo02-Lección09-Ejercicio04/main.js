'use strict';

const task1 = document.querySelector('.js_task1');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

  if(tasks[0].completed === true){
    task1.classList.add('task1');
  }else{
      task1.classList.remove('task1')
  }

task1.innerHTML = tasks[0].name;
