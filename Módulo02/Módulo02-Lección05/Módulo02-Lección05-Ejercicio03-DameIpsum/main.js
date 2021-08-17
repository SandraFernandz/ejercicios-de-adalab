'use strict';

// Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.

const paragraphEvent = document.querySelector(".js_paragraph");

const addParagraph = () =>{

    const paragpraphContent = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus reprehenderit blanditiis</p>`;

    paragraphEvent.innerHTML += paragpraphContent;    
   
}

paragraphEvent.addEventListener('mouseover', addParagraph);