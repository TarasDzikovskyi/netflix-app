import {createContext, useEffect, useReducer} from 'react'
import FilterReducer from './FilterReducer';

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false
};

export const FilterContext = createContext(INITIAL_STATE);

export const FilterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(FilterReducer, INITIAL_STATE);

    // useEffect(() => {
    //     // if (state.user && state.user.user && state.user.access_token)
    //     //     localStorage.setItem("user", JSON.stringify(state.user))
    // }, [state.user]);


    return (
        <FilterContext.Provider value={{
            movies: state.movies,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </FilterContext.Provider>
    )
};

