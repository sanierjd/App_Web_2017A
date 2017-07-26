/**
 * Created by sanie on 22/7/2017.
 */
declare var module;
declare var sails;
declare var Usuario;

//    localhost:1337/Usuario/metodos

module.exports = {

  eliminarUsuario:(req,res)=>{

    let params = req.allParams();
    sails.log.info("Parametros",params);

    if(req.method=="POST"&&params.id){

      Usuario.destroy({
        id:params.id
      }).exec((err,usuarioBorrado)=>{
        if(err) return res.serverError(err);
        return res.redirect("/")
      })

    }else{
      return res.badRequest();
    }


  },

  editarUsuario:(req,res)=>{
    let parametros = req.allParams();
    if(parametros.nombres &&
       parametros.apellidos &&
       parametros.correo &&
       parametros.id){
      Usuario.update({
        id:parametros.id
      },{nombres:parametros.nombres,
         apellidos:parametros.apellidos,
         correo:parametros.correo
      })
      .exec((err, usuarioEditado)=>{
        if(err) return res.serverError(err);
        if(usuarioEditado){
          // Si encontró
          return res.redirect("/");
        } else {
          // No encontró
          return res.notFound();
        }
      })
    } else {
      return res.badRequest();
    }
  }

};
