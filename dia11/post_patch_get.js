var request = require ("request");

var URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

function promesaPOST(){
var json_send = {
		"name":"Prueba11",
		"last_name": "prueba12",
		"nacionalidad": "MX",
		"biography": "bio",
		"gender": "M",
		"age": 20,
		}
	return new Promise(function(resolve,reject){
		request.post({url: URL,form: json_send},function(error, response, body){
		resolve(JSON.parse(body))
		});
	});
}

function promesaPATCH(urlID){
var json_send = {
		"name":"Sebastian",
		"last_name": "Munoz",
		"is_alive": false
		}
	return new Promise(function(resolve,reject){
		request.patch({url: urlID,form: json_send},function(error, response, body){
		resolve(JSON.parse(body))
		});
	});
}

function promesaGET(urlID){
	return new Promise(function(resolve,reject){
		request.get({url: urlID},function(error, response, body){
		resolve(JSON.parse(body))
		});
	});
}

promesaPOST()
	.then(function(body){
		console.log(body)
		var urlID = URL + body.id + "/"
		console.log(urlID)

		promesaPATCH(urlID)
			.then(function(body){

				promesaGET(urlID)
				.then(function(body){
				console.log(body)

				}).catch(function(error){
				console.log(error)
				})
			}).catch(function(error){
				console.log(error)
			})		
	}).catch(function(error){
		console.log(error)
	})	