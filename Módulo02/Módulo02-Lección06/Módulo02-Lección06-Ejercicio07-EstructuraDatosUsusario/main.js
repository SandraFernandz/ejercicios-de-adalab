'use strict';

const user = {};

const job = 'developer';
user.firstName = 'Carlos';
user.lastName = 'Pérez';
user.age = 45;
user.job = job;

console.log(user);

user.firstName = 'Andrés';
user.age = user.age + 1;

//en el primer console.log se retoman los cambios efectuados a posteriori pero además muestra valores iniciales;

console.log(user);
