const adalaber1 = {
    name: "Susana",
    age:  34,
    job: "periodista"
};

const mensaje = document.querySelector(".js_mensaje");

const mostrarMensaje = function() {
    return `Hola mi nombre es ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job}`;
    
}

mensaje.innerHTML = mostrarMensaje;