/**
 * Created by sanie on 22/5/2017.
 */

var arregloStrings2 = ["1","2"];
//arregloStrings2.push("3"); // ["1","2","3"] aumenta al final del arreglo
console.log(arregloStrings2);

//arregloStrings2.pop(); // ["1","2"] elimina del final del arreglo
//console.log(arregloStrings2);

arregloStrings2.splice(1,0,"3");
console.log(arregloStrings2);

arregloStrings2.splice(0,1);
console.log(arregloStrings2);