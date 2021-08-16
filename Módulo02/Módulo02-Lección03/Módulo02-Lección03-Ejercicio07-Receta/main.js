'use strict';

const ingredient = document.querySelector(".js_ingredient");
const recipe = document.querySelector(".js_recipe");

const todaysIngredient = ingredient.innerHTML;

debugger
if (todaysIngredient === "Tomate"){
    recipe.innerHTML = "Haz ensalada";
} else{
    recipe.innerHTML = `Hoy no comes`;
}