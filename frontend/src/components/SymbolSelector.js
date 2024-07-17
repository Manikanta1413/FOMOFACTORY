import React from 'react';
import { useDispatch } from 'react-redux';

const SymbolSelector = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({ type: 'SET_SYMBOL', symbol: event.target.value });
  };

  return (
    <div>
      <label htmlFor="symbol">Select Symbol:</label>
      <select id="symbol" onChange={handleChange}>
        <option value="BTC">Bitcoin</option>
        <option value="ETH">Ethereum</option>
        <option value="USDT">Tether</option>
        <option value="BNB">Binance Coin</option> 
      </select>
    </div>
  );
};

export default SymbolSelector;
