var formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function() {
    validarFormulario();
})

//formulario.addEventListener('submit', validarFormualrio())

function validarFormulario() {
    //alert("Funciona el llamado de html");
    var nombre = document.getElementById("nombre").value //para capturar el valor de ese elemento
        //var nombre = document.getElementsByName("nombre").value
        //alert(`su nombre es ${nombre}`)
    var apellido = document.getElementById("apellido").value
    var email = document.getElementById("email").value
    var contrasena = document.getElementById("password").value
    var contrasena_confirmar = document.getElementById("password2").value
    var cumpleanios = document.getElementById("cumple").value

    if (nombre == "") {
        alert("El nombre no puede estar vacio");
        document.getElementById("nombre").select();
    }
    if (apellido == "") {
        alert("El apellido no puede estar vacio");
        document.getElementById("apellido").select();
    }
    if (email == "") {
        alert("El email no puede estar vacio");
        document.getElementById("email").select();
    }
    if (contrasena == "") {
        alert("La contrasena no puede estar vacia");
        document.getElementById("password").select();
    } else {
        validarPassword(contrasena, contrasena_confirmar);
    }
    if (cumpleanios == "") {
        alert("El cumpleaños no puede estar vacio");
        document.getElementById("cumple").select();
    }
}

function validarPassword(contrasena, contrasena_confirmar) {
    if (contrasena !== contrasena_confirmar) {
        alert("Las contrasenas no son iguales");
        //limpiar el input 
        document.getElementById("password").value = "";
        document.getElementById("password2").value = "";
        document.getElementById("password").select();

    }
}

/* function validarCumple(){

 }*/