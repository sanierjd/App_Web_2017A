/**
 * Created by sanie on 29/5/2017.
 */
// Funciones aplicables solo para arreglos
// ayuda a iterar todos los elementos de un arreglo
var arregloNumeros = [1, 2, 3, 4, 5];
var resultado = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log("El valor es: " + valor);
    console.log("El indice es: " + indice);
    console.log("El arreglo es: " + arreglo);
});
console.log("El resultado es " + resultado);
