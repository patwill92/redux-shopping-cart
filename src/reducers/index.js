import {combineReducers} from 'redux';

import {booksReducer} from "./bookReducers"
import {cartReducer} from "./cartReducers"

export default combineReducers({
  books: booksReducer,
  cart: cartReducer
})