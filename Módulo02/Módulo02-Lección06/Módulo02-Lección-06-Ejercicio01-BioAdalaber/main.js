const adalaber1 = {
    name: "Susana",
    age:  34,
    job: "periodista"
};

const mensaje = document.querySelector(".js_mensaje");



mensaje.innerHTML = "Hola me llamo" + adalaber1.nombre;

// otra opción
//mensaje.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;