//Validar el ingreso de datos en un buscador de animales, 

//por lo que solo debe aceptar las palabras “perro” y “gato”. 

//De lo contrario, no puede permitir la búsqueda, 

//generando un mensaje de error en un alert.

var buscar = document.getElementById('buscar');


buscar.addEventListener('click', function() {
    validarBusqueda();
})


function validarBusqueda() {
    var animal0 = document.getElementById('animal');
    var animal1 = document.getElementsByClassName('animal');
    var animal2 = document.querySelector('.animal');
    console.log(animal0.value, animal1[0].value, animal2.value);
    //alert('Validar busqueda');

    if (animal0.value.match(/gato/i)) {
        console.log("contiene la palabra gato 1");
    }
    if (animal1[0].value.match(/gato/i)) {
        console.log("contiene la palabra gato 2");
    }
    if (animal2.value.match(/gato/i)) {
        console.log("contiene la palabra gato 3");
    }

    var correo = document.getElementById('correo').value;
    if (correo.match(/[a-z]+@[a-z]+.com/i)) {
        alert("formato correcto");
    } else {
        alert("falto el @ o el .");
    }

}