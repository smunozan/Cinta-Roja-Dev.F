const express = require ("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

app.post("/v1/api/post", (req,res) => {
	// const data = typeof req.body == 'string' ? JSON.parse(req.body) : req.body;
	var data;

	if (typeof req.body == 'string') {
		data = JSON.parse(req.body)
	}else{
		data = req.body
	}

	var num1 = data.num1
	var num2 = data.num2
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