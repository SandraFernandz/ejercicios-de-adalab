'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse, para la parte 2 hemos tenido que comentar esta primera variable y vaciarla para la parte 2
//let userAvatar = 'http://www.fillmurray.com/300/300';
let userAvatar = '';

//recogemos image HTML y le aplicamos la imagen del usuario
//como la etiqueta img no tiene innerHTML usamos src en su lugar
let imageUser = document.querySelector(".js_image");
//imageUser.src= 'http://www.fillmurray.com/300/300';

//parte 2 eliminamos lo que hay entre las comillas 
imageUser.src= '';

//parte 3 si existe un avatar elegido (no es el caso xq lo hemos borrado), se mostrará. si no, se mostrará el avatar por defecto (es el caso);
imageUser.src = userAvatar || DEFAULT_AVATAR;