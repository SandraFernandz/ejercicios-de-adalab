"use strict";

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = '';

// const imageAvatar=document.querySelector(".js_image");

let newAvatar = document.querySelector(".js_image");
newAvatar.src = userAvatar || DEFAULT_AVATAR;

