var request = require ("request");

var URL = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"

function promesaGET(){
	return new Promise(function(resolve,reject){
		request.get({url: URL},function(error, response, body){
		resolve(JSON.parse(body))
		});
	});
}

function promesaDELETE(urlID){
	return new Promise(function(resolve,reject){
		request.delete({url: urlID},function(error, response, body){
		});
	});
}

promesaGET()
	.then(function(body){
		for (var i = 0 ; i < 100; i++) {
			// if (body[i].name == "Enríque") {
				var urlID = URL + body[i].id + "/"
				promesaDELETE(urlID)
				.then(function(body){
				}).catch(function(error){
				console.log(error)
				})
			// }	
		}
		console.log("listo")	
	}).catch(function(error){
		console.log(error)
	})	