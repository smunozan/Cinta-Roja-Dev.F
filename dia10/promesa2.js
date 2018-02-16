var request = require ("request");

var url = "https://swapi.co/api/people/1/"

// Ejemplo
// const promise = new Promise(function(resolve,reject){
// 		request.get(url,function(error,status,response){
// 			if (status.statusCode == 200) {
// 				resolve(JSON.parse(response))
// 			}else{
// 				reject("Error")
// 			}
// 		});
// 	});

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

promesa()
	.then(function(body){
		console.log(body)
	}).catch(function(error){
		console.log(error)
	})	