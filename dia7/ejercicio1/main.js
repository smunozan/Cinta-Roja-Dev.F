var perro = require('./Perro')

var perrito = new perro.Perro("husky",10,"pipe")
console.log(perrito.comer("carne"))
console.log(perrito.setRaza("Husky"))