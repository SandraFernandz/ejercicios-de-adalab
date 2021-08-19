const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista'
}

adalaber1.showBio = function(){
    return 'Hola, me llamo ' + this.name + " "+'tengo'+ " "+  this.age +" "+ 'años y soy' +" "+
    this.profession;
};

//otra opción
// adalaber1.showBio = function (){
//     console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}`);

}

console.log(adalaber1.showBio());

const adalaber2 = {
    name: 'Rocío',
    age: 42,
    profession: 'traductora'
}