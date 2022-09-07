let n = 1;

while ( n < 15 )
{
    //código a iterar
    document.write( n + '<br>');
    n++;// n = n + 1;
}

document.write('<hr>');

let marcas = [
    'Hermes', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Hollister'
 ];

let i = 0;
 while( i < 6 )
 {
    document.write(marcas[ i ] + '<br>');
    i++;
}

document.write('<hr>');

document.write('<ul>');
i = 0; // reseteamos i a 0
const cantidad = marcas.length;
 while( i < cantidad )
 {
    document.write('<li>');
    document.write(marcas[ i ]);
    document.write('</li>');
    i++;
}
document.write('</ul>');