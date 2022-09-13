//ubicamos elemento deontro del DOM
const form = document.querySelector('#form');
const campoNombre = document.querySelector('#campoNombre');
const errNombre = document.querySelector('#errNombre');

//addEventListener()
form.addEventListener( 
                    'submit', 
                     function( evento )
                     {
                        console.log( evento );
                        //evitamos que se envé el formulario
                        evento.preventDefault();
                        
                        //obtenemos dato escrito en el campoNombre
                        let nombre = campoNombre.value;
                        if( nombre == '' || nombre == null ){
                            let imagen = '<img src="imgs/warning-24.png" style="vertical-align:middle">';
                            errNombre.innerHTML = imagen + ' Complete el campo <b>Nombre</b>';
                            return false;
                        }

                        //si llegamos hasta acá, ya podemos enviar el formulario
                        form.submit();

                     }
                    );