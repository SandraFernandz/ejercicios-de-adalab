'use strict';
//ojo! aquí al coger la api de la pág hay que cambiar el nombre de la raza de may a min
//https://dog.ceo/dog-api/breeds-list
function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un Chihuahua";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

// Nota: Cuando recogemos un elemento de HTML podemos leer y modificar algunos de sus atributos directamente, como src y alt de la etiqueta img ¡Genial!