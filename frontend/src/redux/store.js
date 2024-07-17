import { createStore } from 'redux';

const initialState = {
  data: [],
  symbol: 'bitcoin'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.data };
    case 'SET_SYMBOL':
      return { ...state, symbol: action.symbol };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
