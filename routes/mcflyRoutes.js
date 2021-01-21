'use strict'

// Modulos
const express = require('express');
const mcflyController = require('../controllers/mcflyController');
const multipart = require('connect-multiparty');

// Variables
const router = express.Router();

// Middlewares
const md_upload = multipart({ uploadDir: './upload/notas'})

// Direcciones
router.get('/test', mcflyController.test);
router.post('/crear', mcflyController.crear);
router.get('/notas/:favorite?', mcflyController.notas);
router.get('/nota/:id', mcflyController.nota);
router.put('/nota/:id', mcflyController.marcarFavorita);
//router.delete('/nota/:id', mcflyController.delete);
//router.post('/upload-image/:id', md_upload, mcflyController.upload);
//router.get('/get-image/:image', mcflyController.getImage);
//router.get('/search/:search', mcflyController.search);

// Exportando las rutas como modelo
module.exports = router;

