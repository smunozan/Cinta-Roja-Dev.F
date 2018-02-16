var request = require("request");

request({
	uri: "http://www.sitepoint.com",
	method: "GET",
	timeout: 10000,
	followRedirects: true,
	masRedirects: 10
}, function(error, response, body){

	console.log(error)
	console.log(response)
	console.log(body)
})