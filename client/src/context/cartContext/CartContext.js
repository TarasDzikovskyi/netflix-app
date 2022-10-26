import {createContext,useEffect, useReducer} from 'react'
import CartReducer from './CartReducer';

const INITIAL_STATE = {
    user: [],
    isFetching: false,
    error: false
};

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE)

    useEffect(() => {
    if(state.user && state.user.user && state.user.access_token)
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])

    return(
        <CartContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}

