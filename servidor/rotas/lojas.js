const express = require('express');
const router = express.Router();
const lojaControlador = require('../controladores/lojaControlador');

// Rota para buscar todas as lojas
// GET /api/lojas/
router.get('/', lojaControlador.buscarTodasAsLojas);

// Futuramente você pode adicionar outras rotas aqui:
// router.get('/:id', lojaControlador.buscarLojaPorId);
// router.post('/', lojaControlador.criarLoja);

module.exports = router;