//programa que de la suma de dos numeros que se le envia
const express = require ("express");
const app = express();

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

app.get("/suma/:num1/:num2/", (req,res) => {
	var num1 = parseInt(req.params.num1)
	var num2 = parseInt(req.params.num2)
	var suma = num1+num2
	res.send("la suma es "+suma);
});

app.listen(3000, () => {
	console.log('Port 3000');
});