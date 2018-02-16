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

request.post({url: URL,form: json_send}, function(error, response, body){
	console.log("body: ", body)
})