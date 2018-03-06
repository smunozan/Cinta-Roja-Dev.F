// Botones de inicio

$("#verEventos").click(function(){
	
})

$("#crearEventos").click(function(){
	$("#registrarEvento").css("display","flex")
})

$("#crearNuevoEvento").click(function(){
	var organizadorEvento = $("#organizadorEvento").val();
	var nombreEvento = $("#nombreEvento").val();
	var descripcionEvento = $("#descripcionEvento").val();
	var lugarEvento = $("#lugarEvento").val();
	var imagenEvento = $("#imagenEvento").val();
	var fechaEvento = $("#fechaEvento").val();
	var horaEvento = $("#horaEvento").val();

	$("#confirmarEvento").css("display","flex")
	$("#imagenNuevoEvento").attr("src", imagenEvento)
	$("#confNombreEvento").html(nombreEvento)
	$("#confDescripcionEvento").html(descripcionEvento)


})