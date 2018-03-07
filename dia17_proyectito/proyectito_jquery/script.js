// Botones de inicio

$("#verEventos").click(function(){
	window.open("vereventos.html");
    return false;
})

$("#crearEventos").click(function(){
	$("#registrarEvento").css("display","flex")
})

	var organizadorEvento 
	var nombreEvento
	var descripcionEvento
	var lugarEvento
	var imagenEvento
	var capacidadEvento
	var fechaEvento
	var horaEvento

$("#vistaNuevoEvento").click(function(){
	organizadorEvento = $("#organizadorEvento").val();
	nombreEvento = $("#nombreEvento").val();
	descripcionEvento = $("#descripcionEvento").val();
	lugarEvento = $("#lugarEvento").val();
	imagenEvento = $("#imagenEvento").val();
	capacidadEvento = $("#capacidadEvento").val();
	fechaEvento = $("#fechaEvento").val();
	horaEvento = $("#horaEvento").val();


	$("#confirmarEvento").css("display","flex")
	$("#imagenNuevoEvento").attr("src", imagenEvento)
	$("#confFechaEvento").html(fechaEvento)
	$("#confHoraEvento").html(horaEvento)
	$("#confNombreEvento").html(nombreEvento)
	$("#confDescripcionEvento").html(descripcionEvento)
	$("#confCapacidadEvento").html(capacidadEvento)
	$("#confOrganizadorEvento").html(organizadorEvento)
	$("#confLugarEvento").html(lugarEvento)

})

	var informacionEventos
	var jsonInformacionEventos

$("#confirmarNuevoEvento").click(function(){
	$("#registrarEvento").css("display","none")

	informacionEventos = {
		"organizadorEvento":organizadorEvento, 
		"nombreEvento":nombreEvento,
		"descripcionEvento":descripcionEvento,
		"lugarEvento":lugarEvento,
		"imagenEvento":imagenEvento,
		"capacidadEvento":capacidadEvento,
		"fechaEvento":fechaEvento,
		"horaEvento":horaEvento
	}

	console.log(informacionEventos)

	jsonInformacionEventos = JSON.stringify(informacionEventos)
	console.log(jsonInformacionEventos)

	$.ajax({
                url: 'https://d994a9ef.ngrok.io/create/event/',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: jsonInformacionEventos,
                success: function( data, textStatus, jQxhr ){
                    $('#response pre').html( data );
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown );
                }
            });
})