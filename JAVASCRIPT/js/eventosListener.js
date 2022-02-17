var miBoton = document.getElementById("miBoton");
var miBoton2 = document.getElementsByTagName("button");
//listener
miBoton.addEventListener('click', function() {
    miFuncion();
    //alert('Mi Listener')
});



miBoton2[0].addEventListener('click', function() {
    miFuncion();
    alert('Mi Listener')
});



function miFuncion() {
    console.log("Funcion llamada desde el Listener");
}


var miInputNombre = document.getElementById("nombre");
miInputNombre.addEventListener('mouseover', function() {
    console.log('mouseover');
})

miInputNombre.addEventListener('mouseout', function() {
    console.log('mouseout');
})

miInputNombre.addEventListener('change', function() {
    console.log('change');
})

miInputNombre.addEventListener('blur', function() {
    console.log('blur');
})