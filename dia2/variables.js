// -------------

var moneda = prompt("Cuantos pesos quieres cambiar?")
var cambio = 18.69

alert(moneda/cambio)

// ------------

var farenheit = prompt("Cuantos grados farenheit?")

alert((farenheit - 32) * 5/9)

// -----------

var monto = prompt("Cuanto gastas?")

if (monto <= 100) {
	alert("Pagas con efectivo")
}else if (monto <= 300) {
	alert("Pagas con tarjeta de debito")
}else{
	alert("Pagas con tarjeta de credito")
}

// -----------

var num1 = prompt("numero 1")
var num2 = prompt("numero 2")

if (num1%num2 == 0){
	alert("exacto")
}else	{
	alert("no exacto")
}

// --------------

var n1 = prompt("numero 1")
var n2 = prompt("numero 2")

var num1 = parseInt(n1)
var num2 = parseInt(n2)

if (num1<num2){
	alert(num1 + " es menor que " + num2)
}else if (num1>num2){
	alert(num1 + " es mayor que " + num2)
}else {
	alert(num1 + " es igual que " + num2)
}

// ---------------

var n1 = prompt("año actual")
var n2 = prompt("año cualquiera")

var num1 = parseInt(n1)
var num2 = parseInt(n2)

var anio

if (num1<=num2){
	anio = num2 - num1
	alert("faltan " + anio +" años para llegar a " + num2)
}else {
	anio = num1 - num2
	alert("han pasado " + anio +" años desde " + num2)
}

// -------------

var n1 = prompt("numero 1")
var n2 = prompt("numero 2")
var n3 = prompt("numero 3")

var num1 = parseInt(n1)
var num2 = parseInt(n2)
var num3 = parseInt(n3)

if (num1==num2==num3){
	alert("Todos son iguales")
}else if (num1==num2 || num1==num3 || num2==num3) {
	alert("2 numeros son iguales")
}else{
	alert("los tres son distintos")
}

// -------------

var n1 = prompt("numero 1")
var n2 = prompt("numero 2")
var n3 = prompt("numero 3")

var num1 = parseInt(n1)
var num2 = parseInt(n2)
var num3 = parseInt(n3)

if (num1>num2 && num1>num3) {
	alert(num1)
}else if (num2>num1 && num2>num3) {
	alert(num2)
}else{
	alert(num3)
}

// ------------------
var contador = 0
for (var i = 0; i <= 5; i++) {
	if (i%2 == 0) {
		contador = contador+1
	}
}
console.log(contador)