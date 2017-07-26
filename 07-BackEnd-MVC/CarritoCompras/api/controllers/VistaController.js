// Vista/vistaOculta ???????
module.exports = {
    vistaOculta: function (req, res) {
        return res.view('Oculto/sorpresa');
    },
    homepage: function (req, res) {
        var parametros = req.allParams();
        sails.log.info("Parametros", parametros);
        if (!parametros.busqueda) {
            parametros.busqueda = '';
        }
        //let where = {};
        Usuario
            .find()
            .where({
            or: [
                {
                    nombres: {
                        contains: parametros.busqueda
                    }
                },
                {
                    apellidos: {
                        contains: parametros.busqueda
                    }
                }
            ]
        })
            .exec(function (err, usuarios) {
            if (err)
                return res.negotiate(err);
            sails.log.info("Usuarios", usuarios);
            return res.view('homepage', {
                usuarios: usuarios
            });
        });
    },
    crearUsuario: function (req, res) {
        return res.view('crearusuario');
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        //sails.log.info(parametros);
        if (parametros.id) {
            //sails.log.info("entro con id");
            Usuario.findOne({
                id: parametros.id
            })
                .exec(function (err, usuarioEncontrado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEncontrado) {
                    //Si encontró
                    return res.view('editarusuario', {
                        usuario: usuarioEncontrado
                    });
                }
                else {
                    // No encontró
                    return res.redirect('/crearusuario');
                }
            });
        }
        else {
            //sails.log.info("no entra con id");
            return res.redirect('/crearusuario');
        }
    }
};
