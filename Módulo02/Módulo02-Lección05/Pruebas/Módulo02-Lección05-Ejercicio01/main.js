'use strict';
const buttonHi = document.querySelector(".js_clicking");

const sayHi = () =>{
    const message= document.querySelector(".js_welcome");
    message.innerHTML = "Mi primer click, ¡olé!";
}

buttonHi.addEventListener("click", sayHi);