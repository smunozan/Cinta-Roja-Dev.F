var request = require ("request");

var url = "https://swapi.co/api/people/1/"

function promesa(){
	return new Promise(function(resolve,reject){
		request.get(url,function(error,status,response){
			if (status.statusCode == 200) {
				resolve(JSON.parse(response))
			}else{
				reject("Error")
			}
		});
	});
}

function promesa2(urlNueva){
	return new Promise(function(resolve,reject){
		request.get(urlNueva,function(error,status,response){
			if (status.statusCode == 200) {
				resolve(JSON.parse(response))
			}else{
				reject("Error")
			}
		});
	});
}

promesa()
	.then(function(body){
		var urlNueva = body.films
		for (var i = 0; i < urlNueva.length; i++) {
			promesa2(urlNueva[i])
				.then(function(body){
					console.log(body.title)				
				}).catch(function(error){
					console.log(error)
				})
		}
	}).catch(function(error){
		console.log(error)
	})	