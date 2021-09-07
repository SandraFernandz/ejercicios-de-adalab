"use strict";
const select = document.querySelector(".js-select");
let inputName = document.querySelector(".js-name");
let inputLastName = document.querySelector(".js-lastname");
let inputPhone = document.querySelector(".js-phone");
const info = [
  {
    name: "Thor",
    lastName: "De Asgard",
    telephone: 3829384723,
  },
  {
    name: "Wanda",
    lastName: "Escarlata",
    telephone: 265849273,
  },
  {
    name: "Natasha",
    lastName: "Romanoff",
    telephone: 474826392,
  },
];

function handleClickOption() {
  for (let i = 0; 0 < info.length; i++) {
    select[i].value = data[i].info;
  }
  //funciona si lo descomento
  //   if (select.value === "Thor") {
  //     inputName.value = info[0].name;
  //     inputLastName.value = info[0].lastName;
  //     inputPhone.value = info[0].telephone;
  //   } else if (select.value === "Wanda") {
  //     inputName.value = info[1].name;
  //     inputLastName.value = info[1].lastName;
  //     inputPhone.value = info[1].telephone;
  //   } else if (select.value === "Natasha") {
  //     inputName.value = info[2].name;
  //     inputLastName.value = info[2].lastName;
  //     inputPhone.value = info[2].telephone;
  //   }
}

select.addEventListener("change", handleClickOption);
function paintInfo() {
  handleClickOption();
}

//otra opción:
// const data = [arrayName1, arrayName2, arrayName3]

// const yourName = document.querySelector('#name');
// const names = document.querySelector('.js_name');
// const yourLastName = document.querySelector('.lastName');
// const yourPhone = document.querySelector('.phone')

// function autocomplete() {
//     if (yourName.value === 'Julia') {
//         yourLastName.setAttribute('value', data[0].lastName);
//         yourPhone.setAttribute('value', data[0].phone);
//     } else if (yourName.value === 'Esther') {
//         yourLastName.setAttribute('value', data[1].lastName);
//         yourPhone.setAttribute('value', data[1].phone);
//     } else if (yourName.value === data[2].name) {
//         yourLastName.setAttribute('value', data[2].lastName);
//         yourPhone.setAttribute('value', data[2].phone);
//     }
// }
// console.log(yourName);

// yourName.addEventListener('change', autocomplete);
