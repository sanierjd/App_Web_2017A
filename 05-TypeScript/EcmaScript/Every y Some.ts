/**
 * Created by sanie on 29/5/2017.
 */

let arreglo = [2,5,6,7,7,8];

// transformar el arreglo, iterando
// mutar, cambiar el arreglo

let resultado = arreglo.map((valor, indice, arreglo)=>{
    return (valor*2)/10;
}).some((valor, indice, arreglo)=>{
    return (valor<0.2);
});

console.log(resultado);

// And -> si todos cumplen es verdadero y si no es falso
let resultado2 = arreglo.every((valor, indice, arreglo)=>{
    return (valor>=7);
});

//console.log(resultado2);

// OR -> si alguno cumple es verdadero
let resultado3 = arreglo.some((valor, indice, arreglo)=>{
    return (valor<2);
});

//console.log(resultado3);