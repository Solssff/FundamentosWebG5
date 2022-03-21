$(document).ready(function() {
    $('#button').on('click', function(e) {
        event.preventDefault();

        let superHero = $('#numero').val();

        function elegirSuperHeroe() {
            let validacion = /[0-9]/gim;
            if (validacion.test(superHero) == true) {
                if ((superHero > 0) || (superHero < 732)) {
                    buscar();
                } else {
                    alert('Ingrese un número entre cero y 732');
                }
            }
        }

        function buscar() {
            $.ajax({
                type: "GET",
                url: `https://superheroapi.com/api.php/10223747585892120/${superHero}`,
                dataType: "json",
                success: function(data) {
                    console.log(data);

                    $('#info').html(`<div class="card d-flex flex-row ms-0 ">
                                            <div>
                                                <img width=200rem height=200rem src="${data.image.url}">
                                            </div>
                                            <div>
                                                <div class="card-body">
                                                    <h3 class="card-title">${data.name}</h3>
                                                </div>
                                                <ul class="list-group list-group-flush">  
                                                    <li class="list-group-item"><p>Lugar de Nacimiento: </p>${data.biography['place-of-birth']}</li>
                                                    <li class="list-group-item"><p>Primera Aparicion: </p>${data.biography['first-appearance']}</li>
                                                    <li class="list-group-item"><p>Aliados: </p>${data.biography.aliases}</li>
                                                    <li class="list-group-item"><p>Altura: </p>${data.appearance.height}</li>
                                                    <li class="list-group-item"><p>Peso: </p>${data.appearance.weight}</li>
                                                    <li class="list-group-item"><p>Ocupacion: </p>${data.work.occupation}</li>
                                                    <li class="list-group-item"><p>Grupo de Afiliación: </p>${data.connections['group-affiliation']}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    `);

                    let propiedades = {
                        exportEnable: true,
                        animationEnabled: true,
                        title: {
                            text: "Estadisticas de poder del SuperHeroe"
                        },
                        data: [{
                            type: "pie",
                            showInLegend: true,
                            startAngle: 240,
                            yValueFormatString: "##0.00\"%\"",
                            indexLabel: "{label} {y}",
                            dataPoints: [{
                                y: data.powerstats.intelligence,
                                label: "Inteligencia"
                            }, {
                                y: data.powerstats.strength,
                                label: "Fuerza"
                            }, {
                                y: data.powerstats.speed,
                                label: "Velocidad"
                            }, {
                                y: data.powerstats.durability,
                                label: "Durabilidad"
                            }, {
                                y: data.powerstats.power,
                                label: "Poder"
                            }, {
                                y: data.powerstats.combat,
                                label: "Combate"
                            }]
                        }]
                    };

                    $("#graficoTorta").CanvasJSChart(propiedades);
                }
            });
        }
        elegirSuperHeroe();
    });
});