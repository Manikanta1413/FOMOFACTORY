const express = require('express');
const Data = require('../models/data.model');
const router = express.Router();

// Get the most recent 20 entries for a specific symbol
router.get('/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const data = await Data.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.json(data);
  } catch (error) {
    console.error(error); 
    res.status(500).send(error);
  }
});

module.exports = router;

