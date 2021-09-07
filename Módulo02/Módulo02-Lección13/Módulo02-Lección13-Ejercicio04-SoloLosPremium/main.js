"use script";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const onlyPremiumUsers = users.map((user) => {
  if (user.isPremium === false) {
    return `Bienvenida ${user.name}`;
  } else {
    return `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
  }
});

console.log(onlyPremiumUsers);
