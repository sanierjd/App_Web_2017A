/**
 * Created by sanie on 3/6/2017.
 */

const fs = require('fs'); // require significa importar el modulo fs

console.log("Empieza");

// 1. Nombre y ruta del archivo
// 2. Codificacion
// 3. Anonymous function
// error
// callback cuando hace una respuesta que se demora un tiempo

fs.readFile('texto.txt', 'utf8',
    (err, data)=>{
        if (err) throw err;
        console.log(data);
});

console.log("Termina");

/*
 const express = require('express');

 const calculadora = require('aw-a-loya');



 let a=2, b=3, resultado;

 resultado = calculadora.calculadoraUdla.sumar(a,b);

 console.log(`Resultado es: ${resultado}`);

 let passwordAEncriptar = '1234';

 calculadora.calculadoraUdla.passwords.encryptPassword(
 {
 password: passwordAEncriptar,
 }).exec({
 error: (error)=>{
 console.log(`Error: ${error}`);
 },
 success: (resultado)=> {
 console.log(`Resultado: ${resultado}`);
 }
 });
 */