const request = require("request");
const url = "https://graph.facebook.com/v2.12/me?fields=id,name,likes,email&access_token=EAACEdEose0cBAJT409tNXj7l0X8ZCpGm0LbwFp16XaFJoiny5oXfCNCt8uEobFygIxGvFIYF15ysS9Ls0Y0IJ1PrKK7JZB2FtcZCmPNKDupXyg9ZCB8ueXRDptsyFg8LYiXZApZCPoV8PlH39ifgPZB2QZCXgYLSaRZCf1IGbrwEE5XZCwFLGWT5KnYpFHlbBo97cBDekx7fN6rntvtKq2rqLl61BPqF1mZCbYZD";

request.get(url, (error, response, body) => {
	let json = JSON.parse(body)
	console.log(json.likes.data);
	for (var i = 0; i < json.likes.data.length; i++) {
		console.log(`Pagina # ${i+1} es: ${json.likes.data[i].name} `)
	}
		
})