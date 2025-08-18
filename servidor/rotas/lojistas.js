//lojistas.js

const express = require('express');
const router = express.Router();

const lojistaControlador = require('../controladores/lojistaControlador');

router.get('/', lojistaControlador.buscarTodosOsLojistas);

module.exports = router;
