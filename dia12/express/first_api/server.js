const express = require ("express");
const app = express();

app.get("/",(request,response) => {
	response.send("Hola mundo");
});

app.get("/saludo/:name/", (req,res) => {
	res.send("Hola "+req.params.name);
});

app.get("/buscar", (req,res) =>{
	// si se usaba if en lugar de "?"
	// if(req.query.q){
	// 	mensaje = "Estas buscando "+req.query.q
	// }else{
	// 	mensaje = "No hay nada"}
	var mensaje = req.query.q ? "Estas buscando: "+req.query.q: "No hay nada"
	res.send(mensaje)
})

app.listen(3000, () => {
	console.log('Port 3000');
});