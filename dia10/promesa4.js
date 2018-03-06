var request = require ("request");

function promesa(){
	return new Promise(function(resolve,reject){
		request.get(URL,function(error,status,response){
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

for (var i = 1; i <= 10; i++) {

	var URL_BASE = "https://swapi.co/api/people/"
	var URI = i+"/"
	var URL = URL_BASE + URI

	promesa()
		.then(function(body){
			console.log(body.name +" salio en estas peliculas:")
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

	
}

