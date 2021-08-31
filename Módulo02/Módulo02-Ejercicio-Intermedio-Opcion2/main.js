'use strict';
const update = document.querySelector(".js-update");
const container = document.querySelector(".container");
const selectEl = document.querySelector(".js-select");
const faceEl = document.querySelector(".js-face");

//esta función genera un número aleatorio. podríamos dividir esta función en dos funciones una para crear el num y otra para ver si es par. sería mejor, más elegante. una tarea por función es un concepto más elegante.
function getRandomNumber() {
  let randomNumber = Math.round(Math.random() * 100);

  if (randomNumber % 2 === 0) {
    container.classList.add("background-Y");
    container.classList.remove("background-X");
  }
  else {
    container.classList.add("background-X");
    container.classList.remove("background-Y");
  }
}
//esta función cambia la carita central según sea el input del select
function updateFace() {
  const selectValue = selectEl.value;
  faceEl.innerHTML = selectValue;
}

//esta función llama a las dos funciones y es posible englobarlas en una función porque el evento que las pone en marcha es el mismo: click
function handleUpdateBtn() {
  // console.log(":)");
  //proceso a ejecutar al hacer click en el boton update
  getRandomNumber();
  updateFace();
}
//procurar que la función manejadora tenga handle en su nombre como a continuación
update.addEventListener("click", handleUpdateBtn);
