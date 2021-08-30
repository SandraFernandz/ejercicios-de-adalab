'use strict';

//variables
const chooseMood = document.querySelector('.js_mood');
const updateButton = document.querySelector('.js_button');
const mainFace = document.querySelector('.js_face');
const happyFace = document.querySelector('.js_happy');
const unhappyFace = document.querySelector('.js_unhappy');

//muy importante crear esta variable para usarla después en relación con classList.add y classList.remove
const body = document.querySelector('.body');

// función para cambiar de carita feliz a carita triste pero he optado por una manera más sencilla

// function changeMood(){
//   if(chooseMood.value === 'happy'){
//         mainFace.innerHTML = ':)'
//   } else if(chooseMood.value === 'unhappy'){
//         mainFace.innerHTML = ':('
//   }
// }

// updateButton.addEventListener('click', changeMood);

//función que cambia el color de fondo. muy imp crear const body con querySelector para usar en classList.add/remove
function createRandomNum (){
      //cambiar carita centro según botón input
      //pregunta: porqué no funciona con chooseMood.innerHTML en lugar de chooseMood.value?
      mainFace.innerHTML = chooseMood.value;

      let randomNum = Math.floor(Math.random() * 101);
      if(randomNum %2 !== 0){
            body.classList.remove('happy_body');
            body.classList.add('unhappy_body');
      }else{
            body.classList.remove('unhappy_body');
            body.classList.add('happy_body');
    
      }
      console.log(randomNum);
}
// function getRandomInt(max){
//       return Math.floor(Math.random() * max);
// }
updateButton.addEventListener('click', createRandomNum);


// Opciones de Cris:
// const button =document.querySelector('.js_button');
// const happy = document.querySelector('.js_happy');
// const sad = document.querySelector('.js_sad');
// const list = document.querySelector('.js_select');
// const title = document.querySelector('.js_face');

// function handlerButton(){
//     if(list.value === happy.value){
  
//         title.innerHTML=happy.value;
//     }
//     else if(list.value !=happy.value){

//         title.innerHTML=sad.value
//     }
// }


// button.addEventListener('click', handlerButton);

// y también funciona:
// function handlerButton(){
//       if(list.value === happy.innerHTML){
    
//           title.innerHTML=happy.innerHTML;
//       }
//       else {
  
//           title.innerHTML=sad.innerHTML;
//       }
  
//   }
//   button.addEventListener('click', handlerButton);