/**
 * Created by sanie on 5/6/2017.
 */
// index.js

let Passwords = require('machinepack-passwords');
// Passwords  se importa todo el paquete en la valiable passwords
exports.calculadoraUdla = {
    sumar: (n1,n2)=>{
        return n1+n2;
    },
    restar: (n1,n2)=>{
        return n1-n2;
    },
    multiplicar: (n1,n2)=>{
        return n1*n2;
    },
    passwords:Passwords
};