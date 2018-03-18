// Instalar mongoDB: npm install mongodb --save
// Instalar Express: npm install express
// Instalar body-parser: npm install body-parser --save

const express = require ("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('./mongoClient')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

app.post('/create/student/',(req,res) => {
	const {name,age,program} = req.body
	MongoClient.saveStudent(name,age,program).then(function(student){
		res.send({student})	
	})
	console.log(name,age,program)
})

app.get("/v1/api/getStudent/:name/",(req,res) => {
	const {name} = req.params
	console.log(name)
	MongoClient.findStudent(name).then(function(student){
		res.send(student)
	})
	
});

app.listen(3000, () => {
	console.log('Port 3000');
});