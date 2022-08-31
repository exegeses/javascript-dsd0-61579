//ubicamos elemento/s dentro del DOM
const txt = document.getElementById('txt');

//declaramos función de control
function reloj()
{
    //creamos objeto de fecha
    let fecha = new Date();

    //obtenemos en número de las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas;
    }

    //obtenemos en número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }

    //obtenemos en número de los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //inprimimos dentro del span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//invocamos a la función reloj()
reloj();

//actualizamos el llamado a la función reloj()
setInterval( reloj );