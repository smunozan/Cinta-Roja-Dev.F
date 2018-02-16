var animal = require('./animal')

class Terrestre extends animal.Animal{
	constructor(name, especie, caracteristica){
		super(name,especie)
		this.caracteristica = caracteristica
		console.log(`${this.name} es un animal terrestre`)
	}
	caracteristica(){
		this.caracteristica = caracteristica
		return `El ${this.name} tiene ${this.caracteristica}`
	}

	actividad(){
		return `El animal ${this.name} corre`
	}
}

module.exports.Terrestre = Terrestre

