import './app.scss'
import Home from './pages/home/Home';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {AuthContext} from './authContext/AuthContext'
import { useContext } from "react";


function App() {
  const {user} = useContext(AuthContext)
    // const user = true;

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {user ? <Home/> : <Redirect to='/register'/>}
                    {/*<Home/>*/}
                </Route>
                <Route to='/register'>
                    {!user ? <Register/> : <Redirect to='/'/>}
                </Route>
                <Route to='/login'>
                    {!user ? <Login/> : <Redirect to='/'/>}
                </Route>
                {user && (
                    <>
                        <Route path='/movies'>
                            <Home type='movie'/>
                        </Route>
                        <Route path='/series'>
                            <Home type='series'/>
                        </Route>
                        <Route path='/watch'>
                            <Watch/>
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    );
}

export default App;
