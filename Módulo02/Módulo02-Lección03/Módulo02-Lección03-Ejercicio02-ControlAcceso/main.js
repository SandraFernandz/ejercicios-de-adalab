"use strict";

const welcomMessage = document.querySelector(".js_message");
welcomMessage.innerHTML = "Bienvenida";
const moreThan = "tienes más de 30 años";
const lessThan = "tienes menos de 30 años";

const adalaber = 26;

if (adalaber < 31){
    console.log('${welcomeMessage} ${lessThan}');
} else {
    console.log('${welcomeMessage} ${moreThan}');
}

