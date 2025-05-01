const cron = require('node-cron');
const User = require('../models/User');
const emailService = require('./emailService');

const scheduleAlerts = () => {
  cron.schedule('0 9 * * *', async () => {
    console.log('Verificando vencimentos do DAS...');
    const users = await User.find(); // Buscar usuários (melhorar com filtros reais)

    users.forEach((user) => {
      // Simulação: Enviar alerta se o DAS vencer em 3 dias
      const dasDueDate = new Date(); // Substituir pela lógica real
      dasDueDate.setDate(dasDueDate.getDate() + 3);

      emailService.sendEmail(user.email, 'Alerta de Vencimento do DAS', `
        Olá ${user.name}, o seu DAS vence em 3 dias. Não se esqueça de pagar!
      `);
    });
  });
};

module.exports = scheduleAlerts;