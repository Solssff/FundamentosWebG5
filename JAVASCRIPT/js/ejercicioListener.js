var boton = document.getElementById('boton');
var buscador = document.getElementsByName('buscador');
var resultado = document.getElementsByClassName("resultado");

boton.addEventListener('click', function() {
    resultado[0].innerHTML = 'Estas buscando ' + buscador[0].value;
});

var numero = document.getElementById('entrada');
var boton2 = document.getElementById('evento');
var resultado2 = document.getElementsByClassName("resultado");

boton2.addEventListener('Click Aquí', function() {
    resultado2[0].innerHTML = 'El número ingresado fue eL' + numero[0].value;
})