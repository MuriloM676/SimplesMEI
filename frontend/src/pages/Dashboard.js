import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../services/authService';

const Dashboard = () => {
  const [nfses, setNfses] = useState([]);
  const [dasStatus, setDasStatus] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      if (!token) {
        console.error('Usuário não autenticado.');
        return;
      }

      try {
        const headers = { Authorization: `Bearer ${token}` };

        const nfseResponse = await axios.get('http://localhost:5000/api/nfse', { headers });
        setNfses(nfseResponse.data);

        const dasResponse = await axios.get('http://localhost:5000/api/das/status', { headers });
        setDasStatus(dasResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchAlerts = async () => {
      const token = getToken();
      if (!token) return;

      try {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get('http://localhost:5000/api/alerts', { headers });
        setAlerts(response.data);
      } catch (error) {
        console.error('Erro ao buscar alertas:', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Alertas</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.message}</li>
        ))}
      </ul>
      <h2>Status do DAS</h2>
      {dasStatus ? (
        <p>{dasStatus.message}</p>
      ) : (
        <p>Carregando status do DAS...</p>
      )}
      <h2>Notas Fiscais Emitidas</h2>
      <ul>
        {nfses.map((nfse) => (
          <li key={nfse._id}>
            {nfse.clientName} - R$ {nfse.value} - {nfse.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;