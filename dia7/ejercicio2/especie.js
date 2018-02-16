var animal = require('./Animal')

class Perro extends animal.Animal{
	constructor(raza, peso, name){
		super(name,peso)
		this.raza = raza
		console.log("perro listo")
	}
	setRaza(newRaza){
		this.raza = newRaza
		return `El perro ${this.raza}`
	}

	correr(){
		return `El perro ${this.name} esta corriendo y pesa ${this.peso}`
	}
}

module.exports.Perro = Perro
