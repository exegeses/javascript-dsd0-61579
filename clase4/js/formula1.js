//ubicar elemento/s dentro del DOM
const redbull = document.getElementById('redbull');
const ferrari = document.getElementById('ferrari');
const mercedes = document.getElementById('mercedes');
const mclaren = document.getElementById('mclaren');

/* estado inicial */
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//declaramos función/es de control
function mostrarOcultar( escuderia )
{
    if ( escuderia == 'redbull' ){
        ferrari.style.display = 'none';
        redbull.style.display = 'flex';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'ferrari' ){
        ferrari.style.display = 'flex';
        redbull.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'mercedes' ){
        ferrari.style.display = 'none';
        redbull.style.display = 'none';
        mercedes.style.display = 'flex';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'mclaren' ){
        ferrari.style.display = 'none';
        redbull.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'flex';
    }
}