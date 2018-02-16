const request = require("request");
const url = "http://maps.googleapis.com/maps/api/geocode/json?address=Cumbaya";

request.get(url, (error, response, body) => {
	let json = JSON.parse(body)
	console.log(
			`Ciudad: ${json.results[0].formatted_address} \n`,
			`Latitud: ${json.results[0].geometry.location.lat} \n`,
			`Longitud: ${json.results[0].geometry.location.lng}`
		);
		
})