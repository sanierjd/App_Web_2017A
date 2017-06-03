/**
 * Created by sanie on 3/6/2017.
 */


let arreglo = [
    {
        nombre:"Santiago",
        apellido:"Loya",
        nota:4,
        id:1
    },
    {
        nombre:"Pepe",
        apellido:"Matamoscas",
        nota:8,
        id:2
    },
    {
        nombre:"Juan",
        apellido:"Perez",
        nota:9,
        id:3
    },
    {
        nombre:"Marcelo",
        apellido:"Bermudes",
        nota:7,
        id:4
    },
    {
        nombre:"Alejandro",
        apellido:"Lopez",
        nota:6,
        id:5
    }
];

let resultado = arreglo.filter(
    (valor,indice,arreglo)=>{
        return valor.id>3;
    }
);

console.log(resultado);