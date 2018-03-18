const express = require ("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('./mongoClient')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/create/estado/',(req,res) => {
	const {estado,sexo,rubro} = req.body
	MongoClient.saveRubro(estado,sexo,rubro).then(function(estado){
		res.send(estado)	
	})
	console.log(estado,sexo,rubro)
})

// app.post('/find/user/',(req,res) => {
// 	const {username,password} = req.body
// 	MongoClient.findUser(username).then(function(user){
// 		console.log(user[0].password)
// 		console.log(password)

// 		if(password == user[0].password){
// 			res.send("Contrasena correcta")
// 			console.log(user)

// 		}else{
// 			res.send("Contrasena incorrecta")
// 		}
// 	})

// });

app.listen(3000, () => {
	console.log('Port 3000')
})