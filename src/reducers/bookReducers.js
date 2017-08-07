import _ from 'lodash';

export const booksReducer = (state = {
  books: []
}, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {books: [...action.payload]};
      break;
    case 'POST_BOOK':
      return {books: [...state.books, ...action.payload]};
      break;
    case 'DELETE_BOOK':
      // return {books: _.dropWhile(state.books, ['_id', action.payload._id])};
      let i = _.findIndex(state.books, ['_id', action.payload]);
      return {books: [...state.books.slice(0, i),
        ...state.books.slice(i + 1)]};
      break;
    case 'UPDATE_BOOK':
      let index = _.findIndex(state.books, ['_id', action.payload._id]);
      let copy = Object.assign({}, state.books[index]);
      copy.title = action.payload.title;
      let bookArr = [...state.books];
      return {books: [...bookArr.slice(0, index), copy, ...bookArr.slice(index + 1)]};
      break;
  }
  return state;
};

