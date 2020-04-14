import { ADD_TO_CART, CHANGE_TOTAL, REMOVE_FROM_CART } from './action-types'

export const addToCart = item => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: item
    })
}

export const changeTotal = (qty, itemid) => dispatch => {
    dispatch({
        type: CHANGE_TOTAL,
        payload: {
          qty: qty,
          id: itemid
        }
      })
}

export const removeFromCart = itemid => dispatch => {
    dispatch({
        type:REMOVE_FROM_CART,
        payload: itemid
    })
}