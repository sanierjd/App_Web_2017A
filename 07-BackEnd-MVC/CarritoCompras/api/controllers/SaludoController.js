/**
 * Created by sanie on 19/6/2017.
 */
module.exports = {
    welcome: function (req, res) {
        // POST
        //req.method; // Metodo: GET, POST, PUT, DELETE
        // Metodo: req.method
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en metodo");
        }
        // return res.send("Error en metodo")
        //return res.json({saludo:"hola"})
    },
    bienvenido: function (req, res) {
        // PUT
        if (req.method == "PUT") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error en metodo");
        }
        //return res.send("Hola")
    },
    // url /Saludo/crearUsuarioQuemado
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevoUsuario = {
            nombres: parametros.nombres,
            apellidos: parametros.apellidos,
            password: parametros.password,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        /*
        let nuevoUsuario = {
          nombre: "Santiago",
          apellido: "Loya",
          password: "1234",
          correo: "sanierjd@live.com",
          fechaNacimiento: new Date()
        }
        */
        // nombreModelo.metodo(parametros).exec
        Usuario.create(nuevoUsuario).exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
    /*
      reqaccepted:(req, res)=>{
        return res.json({mensaje: req.accepted});
      },
      reqacceptedCharsets:(req, res)=>{
        return res.send(req.acceptedCharsets);
      },
      reqacceptedLanguages:(req, res)=>{
        return res.json({mensaje:req.acceptedLanguages});
      },
      reqbody:(req, res)=>{
        return res.send(req.body);
      },
      reqcookies:(req, res)=>{
        return res.send(req.cookies);
      },
      reqfresh:(req, res)=>{
        return res.send(req.fresh);
      },
      reqheaders:(req, res)=>{
        console.log(req.headers);
      },
      reqhost:(req, res)=>{
        return res.send(req.host);
      },
      reqip:(req, res)=>{
        return res.send(req.ip);
      },
      reqips:(req, res)=>{
        return res.send(req.ips);
      },
      reqisSocket:(req, res)=>{
        if (req.isSocket){
          return res.send("You're a socket.  Do cool socket stuff.");
        }
        else {
          return res.send("Just another HTTP request.");
        }
      },
      reqmethod:(req, res)=>{
        return res.send(req.method);
      },
      reqoptions:(req, res)=>{
        return res.send(req.options);
      },
      reqparams:(req, res)=>{
        return res.send(req.params);
      },
      reqpath:(req, res)=>{
        return res.send(req.path);
      },
      reqprotocol:(req, res)=>{
        return res.send(req.protocol);
      },
      reqquery:(req, res)=>{
        return res.send(req.query);
      },
      reqsecure:(req, res)=>{
        return res.send(req.secure);
      },
    */
};
