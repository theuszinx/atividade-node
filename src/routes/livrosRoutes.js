const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

// GET /produtos/categoria/:categoria
router.get('/categoria/:categoria', livrosController.listarPorCategoria);

// GET /produtos/preco?max=VALOR (deve vir antes de /:id para não ser capturada)
router.get('/preco', livrosController.listarPorPrecoMax);

// GET /produtos/:id (deve vir por último, pois captura qualquer string)
router.get('/:id', livrosController.detalhesPorId);

module.exports = router;
