/*
    pedimos al usuario que ingrese su nombre
    almacenamos en una variable
    luego lo imprimimos en el docuemnto
*/
let nombre = prompt('Ingrese su nombre');

//document.write( nombre );
//ubicamos el span "txt" dentro del DOM
const txt =  document.getElementById('txt');

//imprimimos en el span
txt.innerText = nombre;
