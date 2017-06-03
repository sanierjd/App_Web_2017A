/**
 * Created by sanie on 3/6/2017.
 */
var UsuarioClass = (function () {
    function UsuarioClass(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    UsuarioClass.prototype.ImprimirNombre = function (saludo, titulo) {
        return "\n                " + saludo + ", " + titulo + "\n                " + this.nombre + ", " + this.apellido + "\n            ";
    };
    return UsuarioClass;
}());
var santiago = new UsuarioClass("Santiago", "Loya");
console.log(santiago.ImprimirNombre("Hi", "Sr"));
