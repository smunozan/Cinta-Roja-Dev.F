class Animal{

	constructor(name,peso=0){
		this.name = name
		this.peso = peso
		console.log("se creo un animal")
	}

	getName(){
		return this.name
	}

	setName(newName){
		this.name = newName
	}

	comer(comida){
		return 'El ' + this.name + ' esta comiendo ' + comida
	}

}

class Perro extends Animal{
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

var perro = new Perro("husky",10,"pipe")
console.log(perro.comer("carne"))
console.log(perro.setRaza("Husky"))