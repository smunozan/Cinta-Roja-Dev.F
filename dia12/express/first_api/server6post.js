const express = require ("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

app.post("/v1/api/post", (req,res) => {
	const data = typeof req.body == 'string' ? JSON.parse(req.body) : req.body;
	var suma = req.body.num1 + req.body.num2
	res.send("La suma es "+suma);
});

app.listen(3000, () => {
	console.log('Port 3000');
});