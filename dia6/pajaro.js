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

class Pajaro extends Animal{
	constructor(color, name, peso){
		super(name,peso)
		this.color = color
	}

	volar(){
		return `El pajaro ${this.name} vuela `
	}

	setName(newName){
		this.name = newName
		return `El pajaro ${this.name} es ${this.color}`
	}
}

var pajaro = new Pajaro("negro", "quique", 10)
console.log(pajaro.setName("paco"))