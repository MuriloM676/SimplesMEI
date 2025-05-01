import React, { useState } from 'react';
import axios from 'axios';

const NFSeForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    value: '',
    description: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/nfse', {
        ...formData,
        userId: '12345', // Substituir pelo ID do usuário autenticado
      });
      setMessage('NFSe criada com sucesso!');
      console.log(response.data);
    } catch (error) {
      setMessage('Erro ao criar NFSe.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do Cliente:
        <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} />
      </label>
      <label>
        Valor:
        <input type="number" name="value" value={formData.value} onChange={handleChange} />
      </label>
      <label>
        Descrição:
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Emitir NFSe</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default NFSeForm;