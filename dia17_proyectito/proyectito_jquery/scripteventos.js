var eventos = {
	"evento1":{
		"organizadorEvento":"Dev.F",
		"nombreEvento":"Hacker's night",
		"descripcionEvento":"Explore the history of the classic Lorem Ipsum passage and generate your own text using any number of characters, words, sentences or paragraphs.",
		"lugarEvento":"Impact Hub CDMX",
		"imagenEvento":"http://i.ngenespanol.com/dam/traveler/agenda/17/03/14/imagen.jpg.imgw.1280.1280.jpeg",
		"capacidadEvento":"Maximo 100 personas",
		"fechaEvento":"2018-03-05",
		"horaEvento":"02:00"
	},
	"evento2":{
		"organizadorEvento":"Prueba2",
		"nombreEvento":"Hola2",
		"descripcionEvento":"Hola2",
		"lugarEvento":"Hola2",
		"imagenEvento":"https://www.cinemascomics.com/wp-content/uploads/2017/06/imagen-batman-serie-de-gotham.jpg",
		"capacidadEvento":"100 personas",
		"fechaEvento":"2018-03-05",
		"horaEvento":"02:00"
	},
	"evento3":{
		"organizadorEvento":"Prueba3",
		"nombreEvento":"Hola3",
		"descripcionEvento":"Hola3",
		"lugarEvento":"Hola3",
		"imagenEvento":"https://noticias24pty.com/wp-content/uploads/2017/09/185019-620-282.jpg",
		"capacidadEvento":"100 personas",
		"fechaEvento":"2018-03-05",
		"horaEvento":"02:00"
	}
}

var array = $.map(eventos, function(value, index) {
    return [value];
});


console.log(array[0]);



for (var i = 0; i < array.length; i++) {

var tarjeta = '<div id="confirmarEvento">'+
				'<div class="card" style="width: 18rem;">'+
				  '<img class="card-img-top" src="..." alt="Card image cap" id="imagenNuevoEvento'+i+'">'+
				  '<div class="card-body">'+
				  	'<div class="fechaYhora">'+
				  		'<p class="card-text" id="confFechaEvento'+i+'"></p>'+
				  		'<p class="card-text" id="confHoraEvento'+i+'"></p>'+
				  	'</div>'+
				    '<h5 class="card-title nombreEvento" id="confNombreEvento'+i+'"></h5>'+
				    '<p class="card-text descripcionEvento" id="confDescripcionEvento'+i+'"></p>'+
				    '<p class="card-text capacidadEvento" id="confCapacidadEvento'+i+'"></p>'+
				    '<div class="fechaYhora">'+
				  		'<p class="card-text" id="confOrganizadorEvento'+i+'"></p>'+
				  		'<p class="card-text" id="confLugarEvento'+i+'"></p>'+
				  	'</div>'+
				  	'<div class="botonAsistir">'+
				  		'<button type="button" class="btn btn-secondary btn-lg Asistir" id="crearEventos">Asistir</button>'+
				  	'</div>'+
				  '</div>'+
				'</div>'

	$("#main").append(tarjeta)

	$("#imagenNuevoEvento"+i).attr("src", array[i].imagenEvento)
	$("#confFechaEvento"+i).html(array[i].fechaEvento)
	$("#confHoraEvento"+i).html(array[i].horaEvento)
	$("#confNombreEvento"+i).html(array[i].nombreEvento)
	$("#confDescripcionEvento"+i).html(array[i].descripcionEvento)
	$("#confCapacidadEvento"+i).html(array[i].capacidadEvento)
	$("#confOrganizadorEvento"+i).html(array[i].organizadorEvento)
	$("#confLugarEvento"+i).html(array[i].lugarEvento)
	
}