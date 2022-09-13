//ubicamos elemento dentro del DOM
    //el formulario
const formulario = document.querySelector('#formulario');
    //los campos de texto
const campoNombre = document.querySelector('input[name="nombre"]');
const campoEmail = document.querySelector('input[name="email"]');
const campoComentarios = document.querySelector('textarea[name="comentarios"]');
    //los span para los mensajes de error
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtComentarios = document.querySelector('#txtComentarios');

//## funciones de validación
formulario.addEventListener( 
                            'submit', 
                            function( evento )
    {
        //evitamos envío del formulario
        evento.preventDefault();

        //borramos mensajes de error
        borrarMensajes();

        let flag = true; //variable para el envío

        //obtenemos el contenido del campo nombre
        let nombre = campoNombre.value;
        if( nombre == '' || nombre == null ){
            txtNombre.innerText = 'Complete el campo nombre';
            flag = false;
        }
        //obtenemos el contenido del campo email
        let email = campoEmail.value;
        if(  !validarEmail( email )  ){
            txtEmail.innerText = 'Complete el campo Email';
            flag = false;
        }

        //obtenemos el contenido del campo comentarios
        let comentarios = campoComentarios.value;
        if( comentarios == '' || comentarios == null || comentarios.length < 5 ){
            txtComentarios.innerText = 'Complete el campo Comentarios con al menos 5 caractéres';
            flag = false;
        }

        if ( flag ){
            //enviamos el formulario
            formulario.submit();
        }

    }
                            
                            );


    function validarEmail( email )
    {
        const expresion = /\S+@\S+\.\S/;
        return expresion.test( email );
    }                            

    function borrarMensajes()
    {
        txtNombre.innerText = '';
        txtEmail.innerText = '';
        txtComentarios.innerText = '';
    }