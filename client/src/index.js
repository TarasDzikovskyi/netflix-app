import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import {CartContextProvider} from './context/cartContext/CartContext'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
          {/*<BrowserRouter>*/}
              <App />
          {/*</BrowserRouter>*/}
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

