const express = require ("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

var arreglo = [1,2,3,4,5,6,7,8,9,10]

app.post("/v1/api/post", (req,res) => {
	const data = typeof req.body == 'string' ? JSON.parse(req.body) : req.body;

	var num1 = req.body.num1
	var resultado

	for (var i = 0; i < arreglo.length; i++) {
		if (num1 == arreglo[i]) {
			resultado = "si esta en el arreglo"
			// i = arreglo.length
			break
		} else {
			resultado = "no esta en el arreglo"
		}
	}
	res.send("Tu numero " + resultado);
});

app.listen(3000, () => {
	console.log('Port 3000');
});