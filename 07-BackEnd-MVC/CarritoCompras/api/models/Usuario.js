module.exports = {
    attributes: {
        nombres: {
            type: "string"
        },
        apellidos: {
            type: "string"
        },
        password: {
            type: "string"
        },
        correo: {
            type: "email"
        },
        fechaNacimiento: {
            type: "date"
        },

        matriculas: {
          collection: 'Matricula',
          via: 'fkIdUsuario'
        }


    }
};
