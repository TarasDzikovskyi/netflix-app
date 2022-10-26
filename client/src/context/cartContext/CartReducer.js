
const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART_START':
            return {
                user: [],
                isFetching: true,
                error: false
            };
        case 'ADD_CART_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case 'ADD_CART_FAILURE':
            return {
                user: [],
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
                user: action.payload,
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