/**
 * JWTController
 *
 * @description :: Server-side logic for managing JWTS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt = require('jsonwebtoken');

module.exports = {
	Emitir:function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      // Tiempo de validez
      // Posiblemente datos -> Token, id
      // El secreto ->

      var token = jwt.sign({
          exp: 1500000000,
          data: {
            id: parametros.id
          }
      }, 'mi mama me mima');
      return res.ok(token);
    } else {
      return res.badRequest("No envía ID");
    }
  },

  Validar:function (req, res) {
    var parametros = req.allParams();
    if(parametros.token) {
      var decodificado = jwt.verify(parametros.token, 'mi mama me mima');
      return res.ok(decodifocado);
    } else {
      return res.badRequest("No envía Token");
    }
  },

  ValidarSecret:function (req, res) {
    var parametros = req.allParams();
    if(parametros.token) {
      var decodificado = jwt.verify(parametros.token, 'secreto');
      return res.ok(decodifocado);
    } else {
      return res.badRequest("No envía Token");
    }
  }
};

