import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/authContext/AuthContext";
import Profile from "./pages/profile/Profile";
import Plans from "./pages/plans/Plans";
import Loading from "./components/loading/Loading";
import ForgotPass from "./pages/forgotPass/ForgotPass";
import Auth from "./components/test/Auth";
import InfoPlan from "./components/infoPlan/InfoPlan";
import SetPass from "./components/setPass/SetPass";
import PassLoader from "./components/passLoader/PassLoader";
import ResetPass from "./pages/forgotPass/ResetPass";
import Faq from "./components/differents/faq/Faq";
import Help from "./components/differents/Help/Help";
import CurrentMovie from "./components/featured/CurrentMovie";
import CurrentHome from "./pages/home/CurrentHome";

const App = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    // const user = true

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {user ? <Home/> : <Redirect to="/register"/>}
                    {/*<Home/>*/}
                </Route>
                <Route path="/register">
                    {!user ? <Register/> : <Redirect to="/"/>}
                    {/*<Register/>*/}
                </Route>
                <Route path="/login">
                    {!user ? <Login/> : <Redirect to="/"/>}
                    {/*<Login/>*/}
                </Route>
                {user && (
                    <>
                        <Route path="/movies"><Home type="movie"/></Route>

                        <Route path="/series"><Home type="series"/></Route>

                        <Route path="/:movie_id"><CurrentHome/></Route>

                        <Route path="/profile"><Profile/></Route>

                        <Route path="/plans"><Plans/></Route>

                        <Route path="/loading"><Loading/></Route>

                        <Route path="/forgot"><ForgotPass/></Route>

                        <Route path="/reset/:token"><ResetPass/></Route>

                        <Route path="/loader"><PassLoader/></Route>

                        <Route path="/pass"><SetPass/></Route>

                        <Route path="/info"><InfoPlan/></Route>

                        <Route path="/watch/:movie_id"><Watch/></Route>
                    </>
                )}

                <Route path='/faq'><Faq/></Route>

                <Route path='/help'><Help/></Route>
            </Switch>
        </Router>
    );
};

export default App;