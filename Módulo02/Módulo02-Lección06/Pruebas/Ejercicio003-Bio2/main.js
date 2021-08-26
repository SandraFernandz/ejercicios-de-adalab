'use strict';

const adalaber = {};
    adalaber.nombre= 'Susana',
    adalaber.edad= 34,
    adalaber.profession= 'periodista';
    adalaber.showBio = function (){
       return `Mi nombre es ${this.nombre} tengo ${this.edad} y soy ${this.profession}.`;
    } 

console.log(adalaber.showBio());

const adalaberina = {};
    adalaberina.nombre= 'Salud',
    adalaberina.edad= 38,
    adalaberina.profession= 'restauradora',
    adalaberina.showBio = function (){
        return `Mi nombre es ${this.nombre} tengo ${this.edad} y soy ${this.profession}.`;
     } 
 
 console.log(adalaberina.showBio());