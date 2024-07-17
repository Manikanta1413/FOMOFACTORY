const app = require('./app');
const axios = require('axios');
const Data = require('./models/data.model');
require('dotenv').config();
const SYMBOLS=['ETH','BTC','USDT','BNB']

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Polling function to fetch data and store in MongoDB
const fetchData = async () => {
  try {

    for (let symbol of SYMBOLS){
      const response = await axios.post(
        process.env.API_URL,
        {
          currency: 'USD',
          code: symbol
        },
        {
          headers: {
            'content-type': 'application/json',
            'x-api-key': process.env.API_KEY
          }
        }
      );
      const price = response.data.rate;
      
      const data = new Data({ symbol, price });
      await data.save();
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Poll data for every 5 seconds
setInterval(fetchData, 5000);
