const mongoose = require('mongoose');

const NFSeSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  value: { type: Number, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NFSe', NFSeSchema);