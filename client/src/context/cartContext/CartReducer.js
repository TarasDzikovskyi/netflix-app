
const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART_START':
            return {
                cart: [],
                // lists: state.lists.map(list => list._id === action.payload._id && action.payload),
                isFetching: true,
                error: false
            };
        case 'ADD_CART_SUCCESS':
            return {
                cart: action.payload,
                isFetching: false,
                error: false
            };
        case 'ADD_CART_FAILURE':
            return {
                cart: [],
                isFetching: false,
                error: true
            };
        case 'REMOVE_FROM_CART_START':
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case 'REMOVE_FROM_CART_SUCCESS':
            return {
                cart: [...state.cart, action.payload],
                // lists: state.lists.filter(list => list._id !== action.payload),
                isFetching: false,
                error: false
            };
        case 'REMOVE_FROM_CART_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: true
            };
            default:
                return {...state}
    }
}

export default CartReducer;