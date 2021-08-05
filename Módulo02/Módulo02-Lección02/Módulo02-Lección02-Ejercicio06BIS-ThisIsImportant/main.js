"use strict";

const element = document.querySelector('#element');
const textToShow = 'Hey, this is important.';



// ES6 importante prestar atención a los acentos abiertos que abren y cierran después de element.innerHTML
element.innerHTML = `
<div class="popup">
  <span>${textToShow}</span>
</div>`;