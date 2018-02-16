class Animal{

	constructor(name,especie){
		this.name = name
		this.especie = especie
	}

	getName(){
		return this.name
	}

	getEspecie(){
		return this.especie
	}

	setName(newName){
		this.name = newName
	}

	comer(comida){
		return 'El ' + this.name + ' esta comiendo ' + comida
	}

}

module.exports.Animal = Animal