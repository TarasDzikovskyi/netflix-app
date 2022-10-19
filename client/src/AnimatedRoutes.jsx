import React, {useState} from 'react'
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Plans from "./pages/plans/Plans";
import Loading from "./components/loading/Loading";
import ForgotPass from "./pages/forgotPass/ForgotPass";
import InfoPlan from "./components/infoPlan/InfoPlan";
import SetPass from "./components/setPass/SetPass";
import PassLoader from "./components/passLoader/PassLoader";
import ResetPass from "./pages/forgotPass/ResetPass";
import Faq from "./components/differents/faq/Faq";
import Help from "./components/differents/Help/Help";
import CurrentHome from "./pages/home/CurrentHome";
import PersonalList from "./pages/personalList/PersonalList";
import {AnimatePresence} from "framer-motion";

export default function AnimatedRoutes({user}) {
    const location = useLocation()
    
    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
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

                        <Route path="/select/:movie_id"><CurrentHome/></Route>

                        <Route path="/profile"><Profile/></Route>

                        <Route path="/loading"><Loading/></Route>

                        <Route path="/personal"><PersonalList/></Route>

                        <Route path="/watch/:movie_id"><Watch/></Route>
                    </>
                )}

                <Route path="/plans"><Plans/></Route>

                <Route path="/forgot"><ForgotPass/></Route>

                <Route path="/reset/:token"><ResetPass/></Route>

                <Route path="/loader"><PassLoader/></Route>

                <Route path="/pass"><SetPass/></Route>

                <Route path="/info"><InfoPlan/></Route>

                <Route path='/faq'><Faq/></Route>

                <Route path='/help'><Help/></Route>
            </Switch>
        </AnimatePresence>
    )
}
