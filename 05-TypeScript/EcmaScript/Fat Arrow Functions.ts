/**
 * Created by sanie on 29/5/2017.
 */

function holaMundo() {
    console.log("Hola Mundo");
}

let holaMundo2 = function() {
    console.log("Hola Mundo 2");
}

// Fat arrow function
let holaMundo3 = ()=>{
    console.log("Hola Mundo 3");
}

// Omitiendo llaves
let holaMundo4 = ()=>console.log("Hola Mundo 3");

//
let holaMundo5 = function () {
    return 5;
}

// Implicitamente hace que devuelva el #5
let holaMundo6 = ()=> 5;

// Bloque de codigo
let holaMundo7 = ()=> {
    let a = 2;
    return a+3;
}

// con un parametro se puede omitir los parentesis, retorna un String
let saludar = nombre => "Hola " + nombre;

// con 2 parametros se debe usar parentesis
let saludarConApellido = (nombre, apellido) => `Hola ${nombre} ${apellido}`;

//
console.log(saludarConApellido("Santiago", "Loya"));