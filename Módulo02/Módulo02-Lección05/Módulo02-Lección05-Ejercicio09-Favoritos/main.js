'use strict';

// Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().
// Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector().


const teacher1 = document.querySelector('.teacher1');
const teacher2 = document.querySelector('.teacher2');
const teacher3 = document.querySelector('.teacher3');

const choice1 = document.querySelector('.favorite');
const choice2 = document.querySelector('.favorite');
const choice3 = document.querySelector('.favorite');

function selectTeacher (event){
    const teacherSelected = event.currentTarget;
    teacherSelected.classList.toggle('selected1');

    const fav = teacherSelected.querySelector('.favorite');

    if (fav.innerHTML === 'Remove'){
         fav.innerHTML = 'Add';
    } 
    else{
         fav.innerHTML = 'Remove';
    }
}

teacher1.addEventListener('click',selectTeacher);
teacher2.addEventListener('click',selectTeacher);
teacher3.addEventListener('click',selectTeacher);
