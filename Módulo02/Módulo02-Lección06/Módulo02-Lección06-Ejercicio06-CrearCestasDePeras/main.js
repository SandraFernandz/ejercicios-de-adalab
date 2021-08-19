'use strict';

const pearBasket = {}

pearBasket.maxAmount = 10;
pearBasket.minAmount = 2;
pearBasket.currentAmount = 4;
pearBasket.startingAmount = 1;

//Método calcula añadir peras
pearBasket.addPears = function() {
    return this.maxAmount + this.currentAmount;
    // const calcAddPears = this.currentAmount + this.startingAmount;
    // return calcAddPears;
};

//Método calcula retirar peras
console.log(pearBasket.addPears());

pearBasket.diminishPears = function(){
    return this.currentAmount - this.minAmount;
};

console.log(pearBasket.diminishPears());

//otras opciones // Método para sacar del cesto una pera:
// pearsBasket.takePear = (nPears) => {
//     nPears=nPears-1;
//     return nPears;
// }

//calcula restablecer peras

// pearBasket.recoverPears = function(){
// }