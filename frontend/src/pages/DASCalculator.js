import React, { useState } from 'react';
import axios from 'axios';

const DASCalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [dasValue, setDasValue] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/das/calculate', {
        monthlyRevenue: parseFloat(monthlyRevenue),
      });
      setDasValue(response.data.dasValue);
    } catch (error) {
      console.error('Erro ao calcular DAS:', error);
    }
  };

  const handlePayment = async (method) => {
    try {
      const response = await axios.post('http://localhost:5000/api/das/payment', {
        dasValue,
        paymentMethod: method,
      });
      setPaymentDetails(response.data.paymentDetails);
    } catch (error) {
      console.error('Erro ao gerar pagamento:', error);
    }
  };

  return (
    <div>
      <h1>Calculadora de DAS</h1>
      <label>
        Faturamento Mensal:
        <input
          type="number"
          value={monthlyRevenue}
          onChange={(e) => setMonthlyRevenue(e.target.value)}
        />
      </label>
      <button onClick={handleCalculate}>Calcular DAS</button>

      {dasValue && (
        <div>
          <h2>Valor do DAS: R$ {dasValue.toFixed(2)}</h2>
          <button onClick={() => handlePayment('boleto')}>Gerar Boleto</button>
          <button onClick={() => handlePayment('pix')}>Gerar Pix</button>
        </div>
      )}

      {paymentDetails && (
        <div>
          <h3>Detalhes do Pagamento</h3>
          <p>Método: {paymentDetails.method}</p>
          <p>Valor: R$ {paymentDetails.value.toFixed(2)}</p>
          <a href={paymentDetails.paymentLink} target="_blank" rel="noopener noreferrer">
            Clique aqui para pagar
          </a>
        </div>
      )}
    </div>
  );
};

export default DASCalculator;