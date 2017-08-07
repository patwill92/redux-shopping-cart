import axios from 'axios';

export const bookFunctions = {
  postBooks(book) {
    return (dispatch) => {
      axios.post('/api/books', book)
        .then((res) => {
        dispatch({type: 'POST_BOOK', payload: res.data})
        })
        .catch((err) => {
          dispatch({type: 'POST_BOOK_REJECTED', payload: err})
        })
    }
  },
  deleteBooks(id) {
    return (dispatch) => {
      axios.delete('/api/books/' + id._id)
        .then((res) => {
          dispatch({type: 'DELETE_BOOK', payload: id._id})
        })
        .catch((err) => {
          dispatch({type: 'DELETE_BOOK_REJECTED', payload: err})
        })
    }
  },
  updateBooks(book) {
    return {
      type: 'UPDATE_BOOK',
      payload: book
    }
  },
  getBooks() {
    return (dispatch) => {
      axios.get('/api/books')
        .then((res) => {
          dispatch({type: 'GET_BOOKS', payload: res.data})
        })
        .catch((err) => {
          dispatch({type: 'GET_BOOKS_REJECTED', payload: err})
        })
    }
  }
};