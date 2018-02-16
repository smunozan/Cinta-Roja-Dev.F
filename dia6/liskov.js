class Animal{

	constructor(name,peso=0){
		this.name = name
		this.peso = peso
	
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
		
	}
	setRaza(newRaza){
		this.raza = newRaza
		return `El perro ${this.raza}`
	}

	correr(){
		return `El perro ${this.name} esta corriendo y pesa ${this.peso}`
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

var perro = new Perro("husky",10,"pipe")
var pajaro = new Pajaro("negro", "quique", 10)

function comerComida(x){
	console.log(x.comer("pescado"))
}

comerComida(pajaro)