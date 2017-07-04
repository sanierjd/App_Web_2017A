/**
 * Created by sanie on 3/7/2017.
 */
module.exports = function(req, res, next) {
  console.log(req.headers.authorization);
  if(req.headers.authorization) {
    return next(); // Tienes permiso
  } else {
    return res.forbidden("No tiene cabecera de Autorizacion"); // Redirige al error 403
  }
};
