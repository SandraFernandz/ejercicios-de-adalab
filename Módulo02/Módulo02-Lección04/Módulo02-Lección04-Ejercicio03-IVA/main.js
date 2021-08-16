'use strict';

const calcIva = (a) => {
    let priceIva = a * 0.21;
    return `Precio sin IVA: ${a}, IVA: ${priceIva} y Total: ${a + priceIva}`;
}

console.log(calcIva(4));