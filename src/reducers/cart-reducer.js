import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_TOTAL } from '../actions/action-types'

const initialState = {
    cartItems: [],
    orderCount: [],
    total: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:

            // if an item with same id exists, return the state
            // else add new item to the array
            const existingItem = state.cartItems.find(i => i.id === action.payload.id)

            return existingItem === undefined ?
            // This is the initial action of adding a new item to the cart where
            // default qty is always 1
                {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                    orderCount: [...state.orderCount, { id: action.payload.id, price: action.payload.price, qty: 1 }],
                    total: state.total + action.payload.price
                    // total: state.orderCount.forEach(order => state.total += (order.price * order.qty))
                }
                : state

        case CHANGE_TOTAL:
            const index = state.orderCount.findIndex(order => order.id === action.payload.id)
            const newstate = {
                ...state,
                orderCount: [
                    ...state.orderCount.slice(0, index),
                    {
                        ...state.orderCount[index],
                        qty: action.payload.qty
                    },
                    ...state.orderCount.slice(index+1)
                ]
            }
            return {
                ...newstate,
                total: getTotal(newstate.orderCount)
            }

        case REMOVE_FROM_CART:
            const cartIndex = state.cartItems.findIndex(i => i.id === action.payload)
            const orderIndex = state.orderCount.findIndex(i => i.id === action.payload)
            const updatedState = {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, cartIndex),
                    ...state.cartItems.slice(cartIndex + 1)
                ],
                orderCount: [
                    ...state.orderCount.slice(0, orderIndex),
                    ...state.orderCount.slice(orderIndex + 1)
                ]
            }
            return {
                ...updatedState,
                total: getTotal(updatedState.orderCount)
            }
        default:
            return state;
    }

}

const getTotal = (orderCount) =>{
    var total = 0;
    orderCount.forEach(element => {
        total += (element.price * element.qty)
    });
    return total;
}