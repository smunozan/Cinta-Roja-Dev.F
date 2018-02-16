function miFuncion(a,b){
	return a*b
};

var x = miFuncion(4,3);
var y = miFuncion(10,8);

console.log(x);
console.log(y);

// --------------

function saludar(a){
	console.log("hola, "+a)
}

var x = prompt("Nombre")
saludar(x)

// ------------
function suma(a,b){
	return a+b
}
var x = suma(4,3);
console.log(x);

// ------------

var array = [1,2,3.12312,2.1231,2,2.112,4323,932]
var suma = 0
function cont(a){
	suma = suma+a
}

for (var i = 0; i < array.length; i++) {
	if (array[i]%1==0) {
		cont(array[i])
	}
}

console.log(suma)

// -----------

var x = parseInt(prompt("N1"))
var y = parseInt(prompt("N2"))

var numMayor

function mayor(a,b){
	if (a>b) {
		numMayor=a
	} else if (b>a) {
		numMayor=b
	} else{
		numMayor="Son iguales"
	}
}

mayor(x,y)
console.log(numMayor)

// -------------

var x = prompt("Palabra")
x = x.split("")

function ordenar(a){
	a.sort()
	console.log(a)
}

ordenar(x)

//--------------
var desordenado = "que se duerme lleva se lo corriente la camaron"
var ordenado = "camaron que se duerme se lo lleva la corriente"
var desorCorrecto= ""

desordenado=desordenado.split(" ")
ordenado=ordenado.split(" ")

for (var i = 0; i < ordenado.length; i++) {
	for (var m= 0; m < desordenado.length; m++) {
		if (ordenado[i] == desordenado[m]) {
			desorCorrecto=desorCorrecto+" "+desordenado[m]
			m=desordenado.length
		}
	}
}

console.log(desorCorrecto)


// ---------



