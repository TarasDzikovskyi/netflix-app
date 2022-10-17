import {createContext, useReducer} from 'react'
import CartReducer from './CartReducer';

const INITIAL_STATE = {
    cart: [],
    isFetching: false,
    error: false
};

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE)

    return(
        <CartContext.Provider value={{
            cart: state.cart,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}

