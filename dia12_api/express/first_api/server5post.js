const express = require ("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

app.get("/api/:uuid/", (req,res) => {
	const {uuid} = req.params
	res.send({uuid});
});

app.post("/v1/api/post", (req,res) => {
	const data = typeof req.body == 'string' ? JSON.parse(req.body) : req.body;
	console.log(data)
	res.send(data);
});

app.listen(3000, () => {
	console.log('Port 3000');
});