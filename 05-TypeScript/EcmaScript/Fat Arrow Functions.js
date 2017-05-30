/**
 * Created by sanie on 29/5/2017.
 */
function holaMundo() {
    console.log("Hola Mundo");
}
var holaMundo2 = function () {
    console.log("Hola Mundo 2");
};
// Fat arrow function
var holaMundo3 = function () {
    console.log("Hola Mundo 3");
};
// Omitiendo llaves
var holaMundo4 = function () { return console.log("Hola Mundo 3"); };
//
var holaMundo5 = function () {
    return 5;
};
// Implicitamente hace que devuelva el #5
var holaMundo6 = function () { return 5; };
// Bloque de codigo
var holaMundo7 = function () {
    var a = 2;
    return a + 3;
};
// con un parametro se puede omitir los parentesis, retorna un String
var saludar = function (nombre) { return "Hola " + nombre; };
// con 2 parametros se debe usar parentesis
var saludarConApellido = function (nombre, apellido) { return "Hola " + nombre + " " + apellido; };
//
console.log(saludarConApellido("Santiago", "Loya"));
