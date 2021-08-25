'use strict';

const button = document.querySelector('.js_button');
const paragraph = document.querySelector('.js_paragraph');
const list = document.querySelector('.js_list');

function writeFilmHandler (event){
    
    if(event.target === button){
        //paragraph.removeAttribute('hidden');
        list.removeAttribute('hidden');
    }else{
        //paragraph.addAttribute('hidden');
        list.addAttribute('hidden');
    }
}

function consoleLogHandler(event){
    if(event.target === list){
        //para que aparezca pelis tengo que hacer click arriba a la izq de la lista
        console.log('Pelis')
    }else{
        console.log('nada');

    }
}

button.addEventListener('click', writeFilmHandler);
list.addEventListener('click', consoleLogHandler);