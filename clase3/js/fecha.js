/*
    mostrar fecha actual
    formato:  23/08/2022  (dd/mm/aaaa)

    mejora:   Martes 23/08/2022
*/
//ubicar elemento dentro del DOM
const txt = document.getElementById('txt');

//creamos objeto de fecha
let fecha = new Date();

/* obtenemos el número del día de la SEMANA */
let nDiaSemana = fecha.getDay();  // Dom - 0; Lun - 1;... Sáb - 6
console.log( nDiaSemana );
if ( nDiaSemana == 0 ) {
    //nDiaSemana = 'Domingo';
    diaSemana = 'Domingo';
}
else if ( nDiaSemana == 1 ){
    diaSemana = 'Lunes';
}
else if ( nDiaSemana == 2 ){
    diaSemana = 'Martes';
}
else if ( nDiaSemana == 3 ){
    diaSemana = 'Miércoles';
}
else if ( nDiaSemana == 4 ){
    diaSemana = 'Jueves';
}
else if ( nDiaSemana == 5 ){
    diaSemana = 'Viernes';
}
else if ( nDiaSemana == 6 ){
    diaSemana = 'Sábado';
}


/* obtenemos el número del día del mes */
let diaMes = fecha.getDate();
if ( diaMes < 10 ){
    diaMes = '0'+diaMes;
}
/* obtenemos el número del mes */
let mes = fecha.getMonth()+1;
if( mes < 10 ){
    mes = '0'+mes; 
}

/* obtenemos el número del año */
let anio = fecha.getFullYear();

//imprimimos en el span
txt.innerText = diaSemana +' '+ diaMes +'/'+ mes +'/'+ anio;
