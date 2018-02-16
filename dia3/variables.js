for (var i = 1; i <= 10000; i++) {
	console.log(i)
}

// -----------
for (var i = 1; i <= 10000; i++) {
	if (i%2 == 0) {
		console.log(i)
	}
}

// -----------
var	x = 0

for (var i = 1; i <=3000; i++) {
	if (i%2 == 0) {
		x=x+i
	}
}

console.log(x)

// -------------
var x = 0
var y = 1

for (var i = 0; i < 10; i++) {
	x = x+y
	y = x-y

}

console.log(x)

// ------------
var x = [0,1,2,3,4,5,6,7,8,9]
console.log(x)

for (var i = 0; i <  x.length-1; i++) {
	x[i]=i+5
	
}
console.log(x)

// ------------
var x = []

for (var i = 0; i < 100; i++) {
	x.push(i)
}

console.log(x)

// -------------
var x = prompt("Numero")
var y = []

for (var i = 0; i < 10; i++) {
	y[i] = x*i
}

console.log(y)

// -------------
var x = [4,76,3,12,65,3]
var y = [234,222,523,65]
var z = 0
var a = 0

for (var i = 0; i < y.length; i++) {
	z=z+y[i]
}

for (var i = 0; i < x.length; i++) {
	x[i] = x[i]+z
}

for (var i = 0; i < x.length; i++) {
	a=a+x[i]
}

console.log(a)

// -------------

var desordenado = "que se duerme lleva se lo corriente la se camaron"
var ordenado = "camaron que se duerme se lo lleva la corriente"
var desorCorrecto

desordenado=desordenado.split(" ")
ordenado=ordenado.split(" ")

console.log(desordenado)
console.log(ordenado)