'use strict';

function calcIva(price){
    let IvaPrice = price * 0.21 + price;
    return `Precio sin IVA: ${price}, IVA: ${price*0.21} y Total: ${IvaPrice}`;
}

console.log(calcIva(10));

