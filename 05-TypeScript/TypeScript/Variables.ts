/**
 * Created by sanie on 3/6/2017.
 */

// no se puede guardar strings en tipo numbre
let numero:number=2;
//numero = "Santiago";
numero = 18;

// no se puede igualar a un elemento que no sea un booleano
let verdad:boolean = true;
//verdad = 0;
verdad = null;
verdad = undefined;
verdad = false;

//
let nombre: string = "Santiago";
nombre = `Yo no soy ${verdad}`;

//
let arregloNumeros1:number[] = [1,2];
arregloNumeros1 = [3,4,5];

//
let arregloNumeros2:Array <number> = [1,2];

interface UsuarioInt{
    nombre:string,
    apellido:string,
    nota?:number, // Con ? se indica que es un dato opcional
    id:number
}

let santiago:UsuarioInt={
    nombre:"Santiago",
    apellido:"Loya",
    nota:3,
    id:1
};


var juego = {};
juego = 2;
//juego =

let juego:any = 2;
juego = "Nombre";
juego = {};

const amigo = "amigo";
// amigo = "referendum";  // Error