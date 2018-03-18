// Instalar firebase: npm install firebase-admin --save
// Instalar Express: npm install express
// Instalar body-parser: npm install body-parser --save

const firebase = require('firebase-admin');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//archivo de clave unica que se descarga de firebase

var serviceAccount = require("./test-devf-firebase-adminsdk-py5r7-ac70808c72.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://test-devf.firebaseio.com"
});


// //base de datos de firebase / se les pone var db y var ref, afuera de la peticion cuando se quiera leer en tiempo real los cambios (siguiente punto)
// 	var db = firebase.database()
// //apuntando a indice de "usuarios"
// 	var ref = db.ref('users')

// //modulo que lee en tiempo real todo los cambios en la base de datos e imprime en consola
// 	ref.on("value", function(snapshot){
// 		console.log(snapshot.val());
// 	}, function(errorObject){
// 		console.log("The read failed: "+ errorObject.code)
// 	});

app.get('/',(req,res)=>{
	res.send("ok")
})

// -----------------
// subir a base de datos, enviando desde aqui
// la ruta a donde hay que enviar la peticion http://localhost:3000/save
// app.get('/save',(req,res)=>{
// 	var db = firebase.database()
// 	// apuntando a indice de "servidor, adentro saving data y adentro fireblog"
// 	var ref = db.ref('server/saving-data/fireblog')
// 	// crear hijo users
// 	var userRef = ref.child('users')

// 	// se le envia desde aqui, lo que se quiere insertar en base de datos
// 	usersRef.set({
// 		alanisawesome:{
// 			date_of_birth:"June 23, 1990",
// 			full_name: "Alan Turing"
// 		},
// 		gracehop:{
// 			date_of_birth: "December 20, 1906",
// 			full_name: "Grace Hopper"
// 		}
// 	})

// 	res.send('listo')
// })

// // ----------------
// // subir ID (como hijo), username y password, enviando desde body
// // la ruta a donde hay que enviar la peticion http://localhost:3000/save
// app.post('/save',(req,res)=>{
// 	// lo que se debe enviar en el body para subir a firebase
// 	var {id, username, password} = req.body

// 	//crea un nuevo hijo de "users", con el ID que envias en el body
// 	var nuevoUsuario = ref.child(id)

// 	//se le setea los dos parametros dentro del ID
// 	nuevoUsuario.set({
// 		"username":username,
//         "password":password
// 	})

// 	//lo que regresa firebase cuando se le inserta datos 
// 	res.send('listo')
// })

//crear usuarios
app.post('/users/new',(req,res) =>{
	var userRef = ref.child('users')
	userRef.update(req.body);

	userRef.on("value",(snapshot)=>{
		res.send(snapshot.val())
	}),(errorObject) =>{
		res.send("error al traer el usuario")
	}
});

//Modificar un usuario en especifico
app.put('/users/update/:search',(req,res)=>{
	let userRef = ref.child('users').child(req.params.search)
	userRef.on("value",(snapshot) =>{
		let obj = snapshot.val()
		if (obj === null) {
			res.status(404).send("No existe el usuario")
		}else{
			userRef.set(req.body);
			res.send(snapshot.val());
		}
	});
});


//Se levanta el servidor http://localhost:3000/
app.listen(3000, () => {
	console.log('Port 3000')
})