'use strict';

const paragraph = document.querySelector('.js_paragraph');

function addLoremHandler (){
    paragraph.innerHTML += paragraph.innerHTML;
}


paragraph.addEventListener('mouseover', addLoremHandler);