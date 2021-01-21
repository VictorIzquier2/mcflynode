'use strict'

// Modulos
const mongoose = require('mongoose');

// Variable
const Schema = mongoose.Schema;

// Estructura del modelo
const NotaSchema = Schema({
  titulo: {type: String, required: true},
  subtitulo: {type: String, required: true},
  contenido: {type: String, required: true},
  date: {type: Date, required: true, default: Date.now()},
  favorita: {type: Boolean, default: false},
  imagen: {type: String}
})

const Nota = mongoose.model('Nota', NotaSchema);
module.exports = Nota;