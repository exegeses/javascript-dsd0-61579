//ubicar elemento dentro del DOM
const caja = document.getElementById('caja');

//declaramos función/es de control
function ocultar()
{
    caja.style.display = 'none';
}

function mostrar()
{
    caja.style.display = 'block';
}

function mostrarOcultar()
{
    //si no se ve
    if ( caja.style.display == 'none' ){
        mostrar();
    }
    else{  //si se ve
        ocultar();
    }
}