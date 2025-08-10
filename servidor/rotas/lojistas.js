//lojistas.js
const express = require('express');
const router = express.Router();

// Corrigido para carregar o controlador com o nome certo
const lojistaControlador = require('../controladores/lojistaControlador');

// Corrigido para chamar a função com o nome certo
router.get('/', lojistaControlador.buscarTodosOsLojistas);

module.exports = router;
