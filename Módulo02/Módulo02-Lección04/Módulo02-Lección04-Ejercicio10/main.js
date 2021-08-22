'use strict';

function calcDimensions(isBorderBox, width, padding, borderSize){

    if(isBorderBox === true){
        console.log(`El elemento es border-box y el ancho del contenido es ${width}px  y el ancho total de la caja es de ${width} también.`);
    } else{
        console.log (`El elemento es content-box, el ancho de su contenido es ${width} px y el ancho total es ${width + 2 * padding + 2 * borderSize} px.`);
    }

    console.log(calcDimensions(true, 200, 55, 8));
    console.log(calcDimensions(false, 200, 55, 8));
    
}