/**
 * Created by sanie on 3/6/2017.
 */

class UsuarioClass {
    public nombre:string,
    private apellido:string

    constructor(
        public nombre:string,
        private apellido?:string){ // parametros opcionales deben ir al final
        this.nombre = nombre;
        this.apellido = apellido;
    }

    ImprimirNombre(saludo:string, titulo?:string):string{
            return `
                ${saludo}, ${titulo}
                ${this.nombre}, ${this.apellido}
            `;
    }
}

let santiago:UsuarioClass = new UsuarioClass(
    "Santiago", "Loya"
);

console.log(santiago.ImprimirNombre("Hi", "Sr"));