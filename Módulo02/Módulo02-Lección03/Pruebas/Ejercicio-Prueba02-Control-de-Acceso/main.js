'use strict';

const myName = "Rosaz Rose";


let visibleMessage = document.querySelector(".js_message");

if(myName === "Rosa Rose"){
    visibleMessage.innerHTML = `Bienvenida ${myName}`;
} else {
    visibleMessage.innerHTML = "Lo siento pero el usuario que has introducido no está registrado";
};