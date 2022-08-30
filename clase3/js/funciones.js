//ubicar elemento deontro del DOM
const caja = document.getElementById('caja');

/**
 * modificamos atributos SIN interactividad
 * caja.style.backgroundColor = 'purple';
    caja.innerText = 'Púrpura';
    caja.style.color = '#fff';
 */

//declaración
/*function purpleBox()
{
    caja.style.backgroundColor = 'purple';
    caja.innerText = 'Púrpura';
    caja.style.color = '#fff';
}
function greenBox()
{
    caja.style.backgroundColor = '#0a2';
    caja.innerText = 'Verde';
    caja.style.color = '#fff';
}*/
function colorear( color, nombreColor )
{
    caja.style.backgroundColor = color;
    caja.innerText = nombreColor;
    caja.style.color = '#fff';
}