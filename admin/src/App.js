import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Switch, Routes, Route, Redirect, Navigate} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useContext, useEffect, useMemo, useState } from "react";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
  const {user} = useContext(AuthContext)
  // const user = true
    console.log(user)
 

  
  return (
    <Router>
        {user && <Topbar /> }
        {user && <Sidebar /> }

        <div className="container">

        <Routes>
          <Route path='/login' element={!user && <Login/>}/>

          {/*<Route path="/login">{user ? <Redirect to="/"/> : <Login />}</Route>*/}
        {/*{user && (*/}
        {/*  <>*/}

                <Route exact path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>

                <Route path='/users' element={user ? <UserList/> : <Navigate to='/login'/>}/>

                <Route path='/user/:userId' element={user ? <User/> : <Navigate to='/login'/>}/>

                <Route path='/newUser' element={user ? <NewUser/> : <Navigate to='/login'/>}/>

                <Route path='/movies' element={user ? <ProductList/> : <Navigate to='/login'/>}/>

                <Route path='/product/:productId' element={user ? <Product/> : <Navigate to='/login'/>}/>

                <Route path='/newProduct' element={user ? <NewProduct/> : <Navigate to='/login'/>}/>

                <Route path='/lists' element={user ? <ListList/> : <Navigate to='/login'/>}/>

                <Route path='/list/:listId' element={user ? <List/> : <Navigate to='/login'/>}/>

                <Route path='/newList' element={user ? <NewList/> : <Navigate to='/login'/>}/>

          {/*</>*/}
        // )}
      </Routes>
        </div>

    </Router>
  );
}


export default App;
