const sol = document.getElementById('sol');
const cuerpo = document.getElementById('cuerpo');

let grados = 0;
let posY = 200;

function rotar()
{
    sol.style.transform = 'rotate( '+ grados +'deg )';
    grados++;
}

function subeBaja()
{
    cuerpo.style.backgroundPositionY = posY+'px';
    if( posY > 50 ){
        posY--;
    }
}

setInterval( rotar, 50 );
setInterval( subeBaja, 150 );
