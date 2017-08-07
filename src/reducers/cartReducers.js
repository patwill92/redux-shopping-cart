import _ from 'lodash';

export const cartReducer = (state = {cart: []}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        cart: [...state, ...action.payload],
        totalAmount: total(action.payload).amount,
        totalQty: total(action.payload).qty
      };
      break;
    case 'DELETE_ITEM':
      return {
        cart: [...state, ...action.payload],
        totalAmount: total(action.payload).amount,
        totalQty: total(action.payload).qty
      };
      break;
    case 'UPDATE_CART':
      let index = _.findIndex(state.cart, ['_id', action._id]);
      let copy = Object.assign({}, state.cart[index]);
      copy.quantity += action.unit;
      let cartArr = [...state.cart];
      cartArr = [...cartArr.slice(0, index), copy, ...cartArr.slice(index + 1)];
      return {
        cart: [...state, ...cartArr],
        totalAmount: total([...state, ...cartArr]).amount,
        totalQty: total([...state, ...cartArr]).qty
      };
      break;
  }
  return state;
};

export function total(payloadArr) {
  const totalAmount = payloadArr.map((cartArr) => {
    return cartArr.price * cartArr.quantity;
  }).reduce((a, b) => {
    return a + b;
  }, 0);

  const totalQty = payloadArr.map((qty) => {
    return qty.quantity;
  }).reduce((a, b) => {
    return a + b;
  }, 0);
  return {
    amount: totalAmount.toFixed(2),
    qty: totalQty
  }
}