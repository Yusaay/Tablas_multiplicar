const fs=require('fs');
const {crearArchivo}=require('./helpers/multiplicar');
console.clear();
const [,,arg3 = 'base=7'] = process.argv;
const[,base]=arg3.split('=');

//console.log(process.argv);
console.log(base);

//const base = 4;
crearArchivo(base)
    .then(nombreArchivo=>console.log(nombreArchivo, 'creado'))
    .catch(err=>console.log(err))


