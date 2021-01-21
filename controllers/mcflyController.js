'use strict'

// Modulos
const Nota = require('../models/nota');
const fs = require('fs');
const path = require('path');
const { exists } = require ('../models/nota');

const mcflyController = {
  test: (req, res) => {
    return res
      .status(200)
      .send({
        status: 'success',
        message: 'La conexion a la API McFly se ha realizado correctamente'
      })
  },

  crear: (req, res) => {
    // 1. Recoger parámetros por POST
    const params = req.body;

    // 2. Validar datos
    if(!params.titulo || !params.subtitulo || !params.contenido){
      return res
        .status(500)
        .send({
          status: 'error',
          message: 'Faltan datos por enviar'
        })
    }else{
      // 3. Crear objeto a guardar(instanciación)
      const nota = new Nota();
  
      // 4. Asignar valores al objeto
      nota.titulo = params.titulo;
      nota.subtitulo = params.subtitulo;
      nota.contenido = params.contenido;
      nota.image = null;
  
      // 5. Guardar el teléfono
      nota.save((err, notaStored) => {
        if(err || !notaStored){
          return res
            .status(404)
            .send({
              status: 'error',
              message: 'La nota no se ha guardado en la base de datos', err
            });
        }else{
          // 6. Devolver una respuesta
          return res
            .status(200)
            .send({
              status: 'success',
              message: 'validacion correcta',
              notaStored
            })
        }
      })
    }

  },

  notas: (req, res) => {
    let query;

    // limitar los resultados a favoritos
    const favorite = req.params.favorite;
    if(favorite && favorite === 'favoritas'){
      query = Nota.find({favorita: true})
    }else{
      query = Nota.find({})
    }

    //Obtener las notas de la base de datos con el método find ordenadas de más nuevas a más viejas
    query
      .sort('-_id')
      .exec((err, notasFromDB) =>{
        if(err){
          return res
            .status(500)
            .send({
              status: 'error',
              message: 'Error al cargar las notas desde la base de datos', err
            })
        }
        if(notasFromDB.length < 1){
          return res
            .status(404)
            .send({
              status: 'error',
              message: 'Actualmente no hay notas para mostrar en la base de datos'
            })
        }else{
          return res
            .status(200)
            .send({
              status: 'success',
              message: 'Las notas se han cargado correctamente desde la base de datos',
              notasFromDB
            })
        }
      })
  },

  nota: (req, res) => {

    // Recoger el ID de la URL
    const notaId = req.params.id;

    // Validar el ID
    if(!notaId || notaId == null){
      return res
        .status(404)
        .send({
          status: 'error',
          message: 'La nota no existe en la base de datos'
        })
    }else{
      // Buscar la nota
      Nota.findById(notaId, (err, notaFromDB) => {
        if(err){
          return res
            .status(500)
            .send({
              status: 'error',
              message: 'Error al acceder a la base de datos', err
            })
        }
        if(!notaFromDB){
          return res
            .status(404)
            .send({
              status: 'error',
              message: 'No se ha podido encontrar la nota en la base de datos'
            })
        }else{
          // Devolverlo en un json
          return res
            .status(200)
            .send({
              status: 'success',
              message: 'La nota se ha cargado correctamente desde la base de datos',
              notaFromDB
            })
        }
      })
    }
  },

  marcarFavorita: (req, res) => {
    // recoger el id de la nota por url
    const notaId = req.params.id;

    // utilizar el método Find and Update
    Nota.findOneAndUpdate({_id: notaId}, {favorita: true}, {new: true}, (err, notaUpdated) => {
      if(err){
        return res
          .status(500)
          .send({
            status: 'error',
            message: 'No se ha podido conectar con la base de datos, hubo un error', err
          })
      }
      if(!notaUpdated){
        return res
          .status(404)
          .send({
            message: 'No se ha encontrado la nota en la base de datos'
          })
      }else{
        return res
          .status(200)
          .send({
            status: 'success',
            message: 'La nota se ha marcado como favorita con éxito',
            notaUpdated
          })
      }
    })
  }

}
module.exports = mcflyController;