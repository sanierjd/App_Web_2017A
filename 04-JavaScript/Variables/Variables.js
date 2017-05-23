/**
 * Created by sanie on 22/5/2017.
 */
var texto = "";
var texto2 = '';
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {};

texto = decimal;

/*
* Comentarios
* en
* bloque
* */

// Arreglos
var arregloNumeros = [1,2,3,4,5];
var arregloStrings = ["a","b","c"];
var arregloBooleanos = [true,false,true];

arregloNumeros = [1, "a", true, [1, "b"], {}];

var matriz = [[1,2],[3,4]];
//      0   1
//  0   1   2
//  1   3   4

// Objeto JSON

var objetoNotacion = {}

var objeto2 = {
    llave: "valor",
    llave2: "valor",
    llave3: "valor"
}

objeto2.llave;
objeto2.llave2;
objeto2.llave3;

var objetoComplejo = {
    nombre:"",
    apellido:"",
    fechaNacimiento: new Date(),
    mayorEdad: true,
    peso: 70.2,
    altura: 127,
    saltar: function(){
        console.log("Saltar");
    },
    correr:function () {
        console.log("Correr")
    },
    sumar: function (a,b) {
        return a+b;
    },
    imprimirNombre: function () {
        // return objetoComplejo.nombre + " " + objetoComplejo.apellido;
        return this.nombre + " " + this.apellido;
    }
}

objetoComplejo.altura; // 127
objetoComplejo.nombre; // ""
objetoComplejo.apellido; // ""

objetoComplejo.nombre = "Santiago";
objetoComplejo.nombre; // "Santiago"

objetoComplejo.apellido = "Loya";
objetoComplejo.apellido; // ""

objetoComplejo.titulo = "Ingeniero"

// Error: no ir mas alla dentro de las propiedades permitidas
// no hacer -> objetoComplejo.titulo.fechaExpedicio = "";

// Borrar propiedades
delete objetoComplejo.nombre;

var arregloStrings2 = ["1","2"];
arregloStrings2.push("3"); // ["1","2","3"] aumenta al final del arreglo
arregloStrings2.pop(); // ["1","2"] elimina del final del arreglo

arregloStrings2.splice(1,0,"3");
