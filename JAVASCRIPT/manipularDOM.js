//Se requiere modificar el texto asociado
//al elemento <p> que posea un “id” con el
//nombre “textoSaludo” a “Hola, este
//párrafo fue modificado”. ,.


var parrafo = document.getElementById("textoSaludo");
console.log(parrafo.innerHTML); //"Soy un parrafo en un documento html"
parrafo.innerHTML = "Hola, este parrafo ha sido modificado";
console.log(parrafo.innerHTML); //""Hola este parrafo ha sido modificado"


//Igualmente,
//modificar los valores del elemento
//<input> con “id” igual a “entradaUno”, por
//el “value” igual a “Clic Aqui”
var input1 = document.getElementById("entradaUno");
input1.value = "Click aqui";

//el id por “clicUno” 

input1.id = "ClicUno";

//el tipo “type” por “button”

input1.type = "button";

//Además, agregar el atributo “style” con
//la propiedad “color: red;
//background-color: green”

input1.style.color = "red";
input1.style.backgroundColor = "green";