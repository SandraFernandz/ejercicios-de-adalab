'use strict';
function getEl (selector) {
    const element = document.querySelector(selector);
    if(!element){
        return `No existe ningún elemento con clase, id o tag llamado ${selector}`;

        //tb se puede aquí usar en lugar del return de la línea 5
        //console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }else{
        return element;
    }
}

const btnEl = getEl('.js_title');
console.log(btnEl);