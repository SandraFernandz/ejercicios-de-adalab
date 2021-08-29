'use strict';

const chooseMood = document.querySelector('.js_mood');
const moodButton = document.querySelector('.js_button');
const mainFace = document.querySelector('.js_face');

function changeMood(){
  if(moodButton === ':)'){
        mainFace.innerHTML = ':)'
  } else{
        mainFace.innerHTML = ':('
  }
}


moodButton.addEventListener('click', changeMood);