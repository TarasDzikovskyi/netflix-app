import React, {useState} from 'react'
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
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
import NotFound from "./components/notFound/NotFound";
import WatchingPersons from "./pages/watchingPersons/WatchingPersons";

export default function AnimatedRoutes({user}) {
    const location = useLocation()
    
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={user ? <Home/> : <Register/>}/>

                <Route path='/watching' element={user && <WatchingPersons/>}/>

                <Route path='/login' element={!user && <Login/>}/>

                <Route path='/register' element={user ? <Navigate to='/' replace/> : <Register/>}/>

                <Route path='/movies' element={user && <Home type="movie"/>}/>

                <Route path='/series' element={user && <Home type="series"/>}/>

                <Route path='/select/:movie_id' element={user && <CurrentHome/>}/>

                <Route path='/profile' element={user && <Profile/>}/>

                <Route path='/personal' element={user && <PersonalList/>}/>

                <Route path='/watch/:movie_id' element={user && <Watch/>}/>

                <Route path='/plans' element={!user && <Plans/>}/>

                <Route path='/forgot' element={!user && <ForgotPass/>}/>

                <Route path='/reset/:token' element={!user && <ResetPass/>}/>

                <Route path='/loader' element={!user && <PassLoader/>}/>

                <Route path='/pass' element={!user && <SetPass/>}/>

                <Route path='/info' element={!user && <InfoPlan/>}/>

                <Route path='/faq' element={<Faq/>}/>

                <Route path='*' element={<NotFound/>}/>

            </Routes>



            {/*<Switch location={location} key={location.pathname}>*/}
            {/*    <Route exact path="/">*/}
            {/*        {user ? <Home/> : <Redirect to="/register"/>}*/}
            {/*        /!*<Home/>*!/*/}
            {/*    </Route>*/}
            {/*    <Route path="/register">*/}
            {/*        {!user ? <Register/> : <Redirect to="/"/>}*/}
            {/*        /!*<Register/>*!/*/}
            {/*    </Route>*/}
            {/*    <Route path="/login">*/}
            {/*        {!user ? <Login/> : <Redirect to="/"/>}*/}
            {/*        /!*<Login/>*!/*/}
            {/*    </Route>*/}
            {/*    {user ? (*/}
            {/*        <>*/}
            {/*            <Route path="/movies"><Home type="movie"/></Route>*/}

            {/*            <Route path="/series"><Home type="series"/></Route>*/}

            {/*            <Route path="/select/:movie_id"><CurrentHome/></Route>*/}

            {/*            <Route path="/profile"><Profile/></Route>*/}

            {/*            <Route path="/loading"><Loading/></Route>*/}

            {/*            <Route path="/personal"><PersonalList/></Route>*/}

            {/*            <Route path="/watch/:movie_id"><Watch/></Route>*/}

            {/*            <Route path='/notFound'><NotFound/></Route>*/}

            {/*            <Redirect to='/notFound'/>*/}

            {/*        </>*/}
            {/*    ) : (*/}
            {/*        <>*/}
            {/*            <Route path="/plans"><Plans/></Route>*/}

            {/*            <Route path="/forgot"><ForgotPass/></Route>*/}

            {/*            <Route path="/reset/:token"><ResetPass/></Route>*/}

            {/*            <Route path="/loader"><PassLoader/></Route>*/}

            {/*            <Route path="/pass"><SetPass/></Route>*/}

            {/*            <Route path="/info"><InfoPlan/></Route>*/}

            {/*            <Route path='/faq'><Faq/></Route>*/}

            {/*            <Route path='/help'><Help/></Route>*/}

            {/*            <Route path='/notFound'><NotFound/></Route>*/}

            {/*            <Redirect to='/notFound'/>*/}
            {/*        </>*/}
            {/*    )}*/}



            {/*</Switch>*/}
        </AnimatePresence>
    )
}
