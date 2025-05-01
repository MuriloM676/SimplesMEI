const express = require('express');
const router = express.Router();
const { calculateDAS, generatePayment } = require('../controllers/dasController');

// Rota para calcular o valor do DAS
router.post('/calculate', calculateDAS);

// Rota para gerar boleto ou Pix para pagamento do DAS
router.post('/payment', generatePayment);

module.exports = router;