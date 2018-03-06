//programa que identifica si un numero esta en un arreglo
const express = require ("express");
const app = express();

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

var arreglo = [1,2,3,4,5,6,7,8,9,10]

app.get("/buscar/:num1/", (req,res) => {
	var num1 = parseInt(req.params.num1)
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