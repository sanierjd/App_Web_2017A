//    localhost:1337/Usuario/metodos
module.exports = {
    eliminarUsuario: function (req, res) {
        var params = req.allParams();
        sails.log.info("Parametros", params);
        if (req.method == "POST" && params.id) {
            Usuario.destroy({
                id: params.id
            }).exec(function (err, usuarioBorrado) {
                if (err)
                    return res.serverError(err);
                return res.redirect("/");
            });
        }
        else {
            return res.badRequest();
        }
    },
    editarUsuario: function (req, res) {
        var parametros = req.allParams();
        if (parametros.nombres &&
            parametros.apellidos &&
            parametros.correo &&
            parametros.id) {
            Usuario.update({
                id: parametros.id
            }, { nombres: parametros.nombres,
                apellidos: parametros.apellidos,
                correo: parametros.correo
            })
                .exec(function (err, usuarioEditado) {
                if (err)
                    return res.serverError(err);
                if (usuarioEditado) {
                    // Si encontró
                    return res.redirect("/");
                }
                else {
                    // No encontró
                    return res.notFound();
                }
            });
        }
        else {
            return res.badRequest();
        }
    },
    AnadirUsuarioCarrito: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            var cookies = req.cookies;
            console.log(cookies);
            if (cookies.arregloUsuarios) {
                var arregloUsuarios = cookies.arregloUsuarios.idsCliente;
                sails.log.info(arregloUsuarios);
                var existeUsuario = arregloUsuarios.find(function (idUsuario) {
                    return idUsuario == parametros.id;
                });
                /*
                 let existeUsuario;
                 for(let i=0;i<arregloUsuarios.length;i++){
                 if(arregloUsuarios[i]==parametros.id){
                 existeUsuario = parametros.id;
                 }
                 }/////////////////////////
                 */
                console.log(existeUsuario);
                if (existeUsuario) {
                    return res.redirect('/');
                }
                else {
                    arregloUsuarios.push(parametros.id);
                    res.cookie('arregloUsuarios', {
                        idsCliente: arregloUsuarios
                    });
                    return res.redirect('/');
                }
            }
            else {
                var arregloUsuarios = [];
                arregloUsuarios.push(parametros.id);
                res.cookie('arregloUsuarios', {
                    idsCliente: arregloUsuarios
                });
                return res.redirect('/');
            }
        }
        else {
            return res.badRequest('No envia parametros');
        }
    }
};
