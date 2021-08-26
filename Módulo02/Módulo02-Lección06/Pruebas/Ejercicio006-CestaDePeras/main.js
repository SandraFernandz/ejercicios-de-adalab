'use strict';

const pearsInBasket = {};

pearsInBasket.maxQuantity = 10;
pearsInBasket.minQuantity = 1;
pearsInBasket.currently = 5;
pearsInBasket.initially = 0;

pearsInBasket.add = function(){
    return pearsInBasket.currently + 3;
}
pearsInBasket.takeAway = function(){
    return pearsInBasket.maxQuantity - 2;
}

console.log(`There are ${pearsInBasket.add()} pears in the basket now after adding 3 to currently number 5`);
console.log(`There are ${pearsInBasket.takeAway()} pears in the basket now after taking 2 away from 10`);