'use strict';

function getEl (selector) {
    const element = document.querySelector(selector);
    return element;
}

const btnEl = getEl('.js_btn');
console.log(btnEl);