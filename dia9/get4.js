var request = require('request');

var URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1"
var URI = "/authors/"
var URL = URL_BASE + URI

var json_send = {
	"name":"Prueba",
	"last_name": "prueba",
	"nacionalidad": "MX",
	"biography": "bio",
	"gender": "M",
	"age": 20,
	"is_alive": true
}

request.get({url: URL}, function(error, response, body){
	var json = JSON.parse(body)
	for (var i = 0; i < json.length; i++) {
		if (json[i].id == 104) {
			console.log(json[i].name)
		}
	}
})