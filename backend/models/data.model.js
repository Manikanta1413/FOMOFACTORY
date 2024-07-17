const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', dataSchema);
