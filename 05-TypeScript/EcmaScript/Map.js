/**
 * Created by sanie on 29/5/2017.
 */
var arreglo = [4, 5, 6, 7, 7, 8];
// transformar el arreglo, iterando
// mutar, cambiar el arreglo
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return (valor * 2) / 10;
});
console.log(resultado);
