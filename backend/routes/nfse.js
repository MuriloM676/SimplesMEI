const express = require('express');
const router = express.Router();
const { createNFSe, getNFSe } = require('../controllers/nfseController');
const authMiddleware = require('../middleware/authMiddleware');

// Rota para criar uma nova NFSe
router.post('/', authMiddleware, createNFSe);

// Rota para listar as NFSes do usuário
router.get('/', authMiddleware, getNFSe);

module.exports = router;