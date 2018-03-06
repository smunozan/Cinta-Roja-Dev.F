//programa que identifica si dos numeros son multiplos
const express = require ("express");
const app = express();

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

app.get("/multiplos/:num1/:num2/", (req,res) => {
	var num1 = parseInt(req.params.num1)
	var num2 = parseInt(req.params.num2)
	var resultado

	if (num1%num2==0) {
		resultado = "son multiplos"
	} else {
		resultado = "no son multiplos"
	}


	res.send("Tus numeros " + resultado);
});

app.listen(3000, () => {
	console.log('Port 3000');
});