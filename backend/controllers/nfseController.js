const NFSe = require('../models/NFSe');

// Criar uma nova NFSe
exports.createNFSe = async (req, res) => {
  const { clientName, value, description, userId } = req.body;

  try {
    const nfse = new NFSe({ clientName, value, description, userId });
    await nfse.save();
    res.status(201).json({ message: 'NFSe criada com sucesso!', nfse });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar NFSe.' });
  }
};

// Listar NFSes do usuário
exports.getNFSe = async (req, res) => {
  const { userId } = req.query;

  try {
    const nfses = await NFSe.find({ userId });
    res.json(nfses);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar NFSes.' });
  }
};