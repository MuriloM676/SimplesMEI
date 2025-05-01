const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

// Rotas de autenticação
router.post('/login', login);
router.post('/register', register);

module.exports = router;