/**
 * Created by sanie on 29/5/2017.
 */
var arreglo = [2, 5, 6, 7, 7, 8];
// transformar el arreglo, iterando
// mutar, cambiar el arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
}).some(function (valor, indice, arreglo) {
    return (valor < 0.2);
});
console.log(resultado);
// And -> si todos cumplen es verdadero y si no es falso
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor >= 7);
});
//console.log(resultado2);
// OR -> si alguno cumple es verdadero
var resultado3 = arreglo.some(function (valor, indice, arreglo) {
    return (valor < 2);
});
//console.log(resultado3); 
