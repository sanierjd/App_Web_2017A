/**
 * Created by sanie on 29/5/2017.
 */

// TypeScript

var a = 1;
let a1 = 1;
let html = "<h1>HOLA</h1>>"+
        "<p>Hola amigos</p>"+
        "<img src='algunURL'>"+
        "<a href='google'>Ir a google</a>";

let nombreUsuario = "Santiago Loya";

let htmlConTemplateString = `
<h1>HOLA</h1>>
<p>${nombreUsuario}</p>
`;

console.log(htmlConTemplateString);