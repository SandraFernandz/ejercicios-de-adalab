'use strict';

const adalaber = {};
    adalaber.nombre= 'Susana',
    adalaber.edad= 34,
    adalaber.profession= 'periodista',
    adalaber.run= (doing) => `Estoy ${doing}`;
    
    console.log(adalaber.run('corriendo'));

    adalaber.runMarathon = (distance) => `un marathon de ${distance} kilómetros`;

    console.log(adalaber.run('corriendo') + " " +adalaber.runMarathon(50));

   


