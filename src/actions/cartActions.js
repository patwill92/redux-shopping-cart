 export function addToCart(book) {
    return {
      type: 'ADD_TO_CART',
      payload: book
    }
  }

  export function deleteItem(id) {
    return {
      type: 'DELETE_ITEM',
      payload: id
    }
  }

  export function updateCart(_id, unit) {
    return {
      type: 'UPDATE_CART',
      _id,
      unit
    }
  }
