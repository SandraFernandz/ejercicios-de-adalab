const moment = require('moment');
const configData = require('./config-es.json');

//1o Node imports file
//2o JSON.parse()
//3o lo convierte en un objeto así:
// const configData ={
//    "lang":"es-ES",
//    "dateFormat": "dd/mm/yyyy"
//}

console.log('Configuración del servidor', configData);
console.log(`Idioma del servidor: ${configData.lang}`);
console.log(`Formato de la fech: ${configData.dateFormat}`);
console.log('Hoy es', moment().format(configData.dateFormat));
