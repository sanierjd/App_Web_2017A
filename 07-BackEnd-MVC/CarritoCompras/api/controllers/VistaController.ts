/**
 * Created by sanie on 1/7/2017.
 */
declare var module;

// Vista/vistaOculta ???????
module.exports = {

  vistaOculta:(req,res)=>{
    return res.view('Oculto/sorpresa')
  },
  homepage:(req,res)=>{
    let parametros = req.allParams();

    sails.log.info("Parametros",parametros);

    if(!parametros.busqueda){
      parametros.busqueda ='';
    }

    //let where = {};

    Usuario
      .find()
      .where({
        or:[
          {
            nombres:{
              contains:parametros.busqueda
            }
          },
          {
            apellidos: {
              contains: parametros.busqueda
            }
          }]
      })
      .exec((err,usuarios)=>{
        if(err) return res.negotiate(err);
        let cookies = req.cookies;
        if(cookies.arregloUsuarios) {
          let arregloUsuarios = cookies.arregloUsuarios.idsCliente;
          return res.view('homepage',{
            usuarios:usuarios,
            arregloUsuarios: arregloUsuarios
          })
        } else {
          return res.view('homepage',{
            usuarios:usuarios
          })
        }
        //sails.log.info("Usuarios",usuarios);
      })
  },
  crearUsuario:(req,res)=>{
    return res.view('crearusuario')
  },
  editarUsuario:(req,res)=>{
    let parametros = req.allParams();
    //sails.log.info(parametros);
    if(parametros.id){
      //sails.log.info("entro con id");
      Usuario.findOne({
        id:parametros.id
      })
      .exec((err, usuarioEncontrado)=>{
        if(err) return res.serverError(err);

        if(usuarioEncontrado){
          //Si encontró
          return res.view('editarusuario', {
            usuario:usuarioEncontrado
          });
        } else {
          // No encontró
          return res.redirect('/crearusuario');
        }
      })

    } else {
      //sails.log.info("no entra con id");
      return res.redirect('/crearusuario');
    }
  }

};
