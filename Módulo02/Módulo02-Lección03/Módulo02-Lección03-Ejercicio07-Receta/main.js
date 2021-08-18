'use strict';

// const ingredient = document.querySelector(".js_ingredient");
// const recipe = document.querySelector(".js_recipe");

// const todaysIngredient = ingredient.innerHTML;

// debugger
// if (todaysIngredient === "Tomate"){
//     recipe.innerHTML = "Haz ensalada";
// } else{
//     recipe.innerHTML = `Hoy no comes`;
// }

const userIngredient = 'tomate';

switch (userIngredient) {
    case 'plátano':
        console.log('Puedes hacer un bizcocho');
        break;
    case 'tomate':
    console.log('Puedes hacer gazpacho');
        break;
    case 'mozzarella':
    console.log('Puedes hacer una pizza');
        break;
    default:
        console.log('Si no tienes plátano, tomate ni mozzarella puedes comer fuera');
}