import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContextProvider} from './context/authContext/AuthContext';
import {CartContextProvider} from './context/cartContext/CartContext';
import {FilterContextProvider} from './context/filterContext/FilterContext';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <CartContextProvider>
                <FilterContextProvider>
                    {/*<BrowserRouter>*/}
                    <App/>
                    {/*</BrowserRouter>*/}
                </FilterContextProvider>
            </CartContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);

