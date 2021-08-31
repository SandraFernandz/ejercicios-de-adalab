'use strict';
const update = document.querySelector(".js-update");
const container = document.querySelector(".container");
const selectEl = document.querySelector(".js-select");
const faceEl = document.querySelector(".js-face");

//esta función genera un número aleatorio
function getRandomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber;
}
//esta función cambia el color del fondo según si un número es par o impar
function updateBackground() {
  const randomNumber = getRandomNumber();
  console.log(randomNumber)

  //ha creado una clase extra .background-Y{} que es igual en apariencia de background a la clase que carga la página de nombre .container{}

  if (restNumber % 2 === 0) {
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

function handleUpdateBtn() {
  // console.log(":)");
  //proceso a ejecutar al hacer click en el boton update
  updateBackground();
  updateFace();
}

update.addEventListener("click", handleUpdateBtn);
