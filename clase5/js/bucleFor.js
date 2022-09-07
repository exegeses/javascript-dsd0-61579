let marcas = [
    'Hermes', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Hollister'
 ];
let cantidad = marcas.length;

 for( let n = 0; n < cantidad; n++ )
 {
    document.write( marcas[n], '<br>' );
 }


document.write('<hr>');

document.write('<ul class="lista" >');
//reseteamos la variable n a 0
//let cantidad = marcas.length;
for( n = 0; n < cantidad; n++ )
{
    document.write('<li>');
    document.write( marcas[n] );
    document.write('</li>');
}


document.write('</ul>');
