const request = require("request");

request({
	uri: "https://pokeapi.co/api/v2/pokemon/100/",
	method: "GET",
	timeout: 10000,
	followRedirects: true,
	masRedirects: 10
}, function(error, response, body){
	var  json = JSON.parse(body)
	console.log("Name: " + json.forms[0].name)
	for (var i = 0; i < json.abilities.length; i++) {
		console.log("Ability "+(i+1)+": "+json.abilities[i].ability.name)
	}
	console.log(`Tipo: ${json.types[0].type.name}`)
	// console.log(json.forms[0].name)

})