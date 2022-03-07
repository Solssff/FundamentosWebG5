$(document).ready(function() {
    $('.btn').click(function() {
        $('.text').text('loading . . .');
        $.ajax({
            type: "GET",
            url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
            dataType: "json",
            success: function(respuesta) {
                //si todo sale bien, se agrega la funcionalidad aquí
                console.log(respuesta);
            },
            error: function(respuesta) {
                //esta función se activa si ocurre algún error durante el proceso
            },
            async: true,
        });
    });
})