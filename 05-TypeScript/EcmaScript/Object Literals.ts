/**
 * Created by sanie on 29/5/2017.
 */

function multiplicarX2(n1, n2){

    let resultado = {
        n1: n1,
        n2: n2
    };

    resultado.n1 = resultado.n1*2;
    resultado.n2 = resultado.n2*2;

    return resultado;
}
// Con object literals, los nombres de los atributos del objeto
// deben ser los mismos que los nombres de los parametros
function multiplicarX2V2(n1, n2){

    let resultado = {
        n1,
        n2
    };

    resultado.n1 = resultado.n1*2;
    resultado.n2 = resultado.n2*2;

    return resultado;
}