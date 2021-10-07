const fs = require('fs');

const handleFile = (err, fileContent) =>{
    if(err !== null){
        console.log('error:', err);
    }else{
        console.log('El contenido del fichero es:', fileContent);
        console.log('La longitud del contenido es:', fileContent.length);
    }
};

fs.readFile('./input.foo', 'utf8', handleFile); //callback

