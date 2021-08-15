'use strict';

let style = document.querySelector(".js_style");
let kindOfMessage = document.querySelector(".js_kindOfMessage");
let message = document.querySelector(".js_message");

if (style.classList.contains('warning')){
    kindOfMessage.innerHTML = 'AVISO';
    message.innerHTML ='Tenga cuidado';

} else if(style.classList.contains('error')){
    kindOfMessage.innerHTML = 'ERROR';
    message.innerHTML ='Ha surgido un error';

    } else{
    kindOfMessage.innerHTML = 'CORRECTO';
    message.innerHTML ='Los datos son correctos';
    }

