'use strict';

const buttonElement = document.querySelector('.button');

function handleButtonClick(event) {
  console.log(event.currentTarget);
}

buttonElement.addEventListener('click', handleButtonClick);

// nos da
// <button class="button">Haz Click</button>