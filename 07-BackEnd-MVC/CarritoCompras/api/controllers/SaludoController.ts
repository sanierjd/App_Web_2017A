/**
 * Created by sanie on 19/6/2017.
 */

declare var module;
declare var sails;
module.exports = {
  welcome:(req, res)=>{
    // POST
    //req.method; // Metodo: GET, POST, PUT, DELETE
    // Metodo: req.method

    sails.log.info(req.method);
    if (req.method=="POST") {
      return res.json({saludo:"hola"})
    } else {
      return res.send("Error en metodo")
    }

    // return res.send("Error en metodo")
    //return res.json({saludo:"hola"})

  },

  bienvenido:(req, res)=>{
    // PUT
    if (req.method=="PUT") {
      return res.json({saludo:"hola"})
    } else {
      return res.send("Error en metodo")
    }
    //return res.send("Hola")
  }
}
