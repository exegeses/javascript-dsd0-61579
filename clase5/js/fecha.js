const txt = document.querySelector('#txt');

//mostrar el día de la semana 

//objeto de fecha
let fecha = new Date();

//obtenemos el NUMERO del día de la semana
let nDiaSemana = fecha.getDay();
/* 0 - Domingo  */
/* 1 - Lunes  */
/* 2 - Martes  */
/* 3 - Miércoles  */
/* 4 - Jueves  */
/* 5 - Viernes  */
/* 6 - Sábado  */
console.log( nDiaSemana );

let diaSemana = '';
/* solución usando if/else if  */
/*if ( nDiaSemana == 0 ) {
    let diaSemana = 'Domingo';
}
else if ( nDiaSemana == 1 ) {
    let diaSemana = 'Lunes';
}
else if ( nDiaSemana == 2 ) {
    let diaSemana = 'Martes';
}
else if ( nDiaSemana == 3 ) {
    let diaSemana = 'Miércoles';
}
else if ( nDiaSemana == 4 ) {
    let diaSemana = 'Jueves';
}
else if ( nDiaSemana == 5 ) {
    let diaSemana = 'Viernes';
}
else if ( nDiaSemana == 6 ) {
    let diaSemana = 'Sábado';
}*/

/* solución usando switch */
/*switch( nDiaSemana ){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}*/

/* solución usando arrays */
const diasDeLaSemana = [
                            'Domingo','Lunes',
                            'Martes','Miércoles',
                            'Jueves', 'Viernes',
                            'Sábado'
                        ]

txt.innerText = diasDeLaSemana[ nDiaSemana ];
