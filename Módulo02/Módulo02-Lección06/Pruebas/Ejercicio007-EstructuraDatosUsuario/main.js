'use strict';

const user = {};
user.firstName = 'Bob';
user.lastName = 'Brown';
user.age = 50;
user.job = 'developer';

console.log(user);

user.firstName = 'Barry';
user.age = user.age + 1;
user.job = 'dentist';


const job = 'developer'; 