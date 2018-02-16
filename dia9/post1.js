var request = require('request');

request({
	uri: "http://www.cjihrig.com/development/php/hello_form.php",
	method: "POST",
	form: {
		name: "Sebastian"
	}
},function(error,response,body){
	console.log(body);
})