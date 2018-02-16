var request = require ("request");

var url = "https://swapi.co/api/people/1/"

console.log("1")
var name

request.get(url, function(error,status,response){
	response = JSON.parse(response);
	name = response.name
	console.log(status.statusCode)
	console.log("dentro " + name)
})

console.log(name)
console.log("2")