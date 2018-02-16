var animal = require('./animal')

class Maritimo extends animal.Animal{
	constructor(name, especie, caracteristica){
		super(name,especie)
		this.caracteristica = caracteristica
		console.log(`${this.name} es un animal maritimo`)
	}
	caracteristica(){
		this.caracteristica = caracteristica
		return `El ${this.name} tiene ${this.caracteristica}`
	}

	actividad(){
		return `El animal ${this.name} nada`
	}
}

module.exports.Maritimo = Maritimo