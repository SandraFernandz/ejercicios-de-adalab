"use strict";

const input = document.querySelector(".js_input");
const button = document.querySelector(".js_button");

function provideNamesHandle() {}
let character = document.querySelector(".js_input").value;
fetch(`https://swapi.dev/api/people/?search=${character}`)
  .then((response) => response.json())
  .then((data) => {
    let result = document.querySelector(".js_result");

    for (const pepino of data.results) {
      result.innerHTML += `<li>Personaje: ${pepino.name}, Género: ${pepino.gender}</li>`;
    }
  });
//              console.log(data);
//          }
//              ){
//          }
//      )

button.addEventListener("click", provideNamesHandle);
