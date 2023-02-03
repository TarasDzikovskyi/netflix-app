import React, {useState} from 'react'
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Plans from "./pages/plans/Plans";
import ForgotPass from "./pages/forgotPass/ForgotPass";
import InfoPlan from "./components/infoPlan/InfoPlan";
import SetPass from "./components/setPass/SetPass";
import PassLoader from "./components/passLoader/PassLoader";
import ResetPass from "./pages/forgotPass/ResetPass";
import Faq from "./components/differents/faq/Faq";
import CurrentHome from "./pages/home/CurrentHome";
import PersonalList from "./pages/personalList/PersonalList";
import {AnimatePresence} from "framer-motion";
import NotFound from "./components/notFound/NotFound";
import WatchingPersons from "./pages/watchingPersons/WatchingPersons";
import NetflixPage from "./pages/netflixPage/NetflixPage";
import ChatGPT from "./pages/chatGPT/ChatGPT";
import Test from "./Test";

export default function AnimatedRoutes({user}) {
    const location = useLocation()

    // console.log(user)
    
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={user ? <Home/> : <Navigate to='/register'/>}/>

                <Route path='/watching' element={user && <WatchingPersons user={user}/> }/>

                <Route path='/login' element={!user && <Login/>}/>

                <Route path='/register' element={user ? <Navigate to='/' /> : <Register/>}/>

                <Route path='/movies' element={user ? <Home type="movie"/> : <Navigate to='/register' />}/>

                <Route path='/series' element={user ? <Home type="series"/> : <Navigate to='/register' />}/>

                <Route path='/select/:movie_id' element={user ? <CurrentHome/> : <Navigate to='/register' />}/>

                <Route path='/profile' element={user ? <Profile/> : <Navigate to='/register' />}/>

                <Route path='/personal' element={user ? <PersonalList/> : <Navigate to='/register' />}/>

                <Route path='/watch/:movie_id' element={user ? <Watch/> : <Navigate to='/register' />}/>

                <Route path='/info' element= <InfoPlan/> />

                <Route path='/plans' element={user ? <Plans/> : <Navigate to='/register'/>}/>

                <Route path='/netflix' element={user ? <NetflixPage/> : <Navigate to='/register'/>}/>

                <Route path='/gpt' element={user ? <ChatGPT/> : <Navigate to='/register'/>}/>

                <Route path='/forgot' element={!user && <ForgotPass/>}/>

                <Route path='/reset/:token' element={!user && <ResetPass/>}/>

                <Route path='/loader' element={!user && <PassLoader/>}/>

                <Route path='/pass' element={ <SetPass/>}/>

                <Route path='/faq' element={<Faq/>}/>

                <Route path='/test' element={<Test/>}/>

                <Route path='*' element={<NotFound/>}/>

            </Routes>

        </AnimatePresence>
    )
}
