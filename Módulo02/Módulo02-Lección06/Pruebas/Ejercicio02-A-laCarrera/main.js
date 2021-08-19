'use strict';

const adalaber1 = {
    nombre: 'Susana',
    edad: 34,
    profesión: 'periodista',
    run: function(){
        return 'Estoy corriendo';
    },
    runAMarathon: function(){
        const distance = 3;
        console.log(`${run} una marathon de ${this.runAMarathon} kilometros`)
    }
}
