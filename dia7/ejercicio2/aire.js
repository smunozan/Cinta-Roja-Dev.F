var animal = require('./animal')

class Aereo extends animal.Animal{
	constructor(name, especie, caracteristica){
		super(name,especie)
		this.caracteristica = caracteristica
		console.log(`${this.name} es un animal aereo`)
	}
	caracteristica(){
		this.caracteristica = caracteristica
		return `El ${this.name} tiene ${this.caracteristica}`
	}

	actividad(){
		return `El animal ${this.name} vuela`
	}
}

module.exports.Aereo = Aereo