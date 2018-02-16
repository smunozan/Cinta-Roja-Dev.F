var maritimo = require('./maritimo')
var aereos = require('./aire')
var terrestre = require('./terrestre')

var pez = new maritimo.Maritimo("pez","maritimo","tiene aletas")
var delfin = new maritimo.Maritimo("delfin","maritimo","es inteligente")
var marmota = new maritimo.Maritimo("marmota","maritimo","es negra y gorda")

var perro = new terrestre.Terrestre("perro","terrestre","es peludo")
var gato = new terrestre.Terrestre("gato","terrestre","es cafe")
var leon = new terrestre.Terrestre("leon","terrestre","es el rey de la selva")

var aguila = new aereos.Aereo("aguila","aereo","tiene plumas")
var perico = new aereos.Aereo("perico","aereo","habla")
var loro = new aereos.Aereo("loro","aereo","es de colores")

var zoo = [pez,delfin,marmota,perro,gato,leon,aguila,perico,loro]
var jaulaTerrestre = []
var jaulaMaritima = []
var jaulaAerea = []


for (var i = 0; i < zoo.length; i++) {
	if (zoo[i].getEspecie() == "terrestre") {
		jaulaTerrestre.push(zoo[i].name)
	}else if (zoo[i].getEspecie() == "maritimo") {
		jaulaMaritima.push(zoo[i].name)
	}else{
		jaulaAerea.push(zoo[i].name)
	}
}

console.log("En la jaula terrestre estan: " +jaulaTerrestre)
console.log("En la jaula maritima estan: " +jaulaMaritima)
console.log("En la jaula aerea estan: " +jaulaAerea)
