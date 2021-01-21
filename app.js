'use strict'

// 1. Cargar módulos de Node para crear el servidor
const express = require('express');
const bodyParser = require('body-parser');

// 2. Ejecutar Express (HTTP)
const app = express();

// 3. Cargar fichero para las rutas
const mcflyRoutes = require('./routes/mcflyRoutes');

// 4. Configuramos los midlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 5. CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// 6. Añadir prefijos a las rutas / Cargar rutas
app.use('/api', mcflyRoutes)

module.exports = app;