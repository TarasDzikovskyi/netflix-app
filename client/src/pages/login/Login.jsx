import React, {useContext, useRef, useState} from 'react';
import {login} from '../../context/authContext/apiCalls';
import {AuthContext} from '../../context/authContext/AuthContext';
import './login.scss';
import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/footer/Footer";
import logo from '../../content/logo.png';
import Intro from "../../components/intro/Intro";
import {motion} from "framer-motion";
import {Visibility} from '@material-ui/icons';

function timeout(el) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(el);
        }, 4000);
    });
    return promise;
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {dispatch} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('password');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await timeout(true);
        if (res) {
            login({email, password}, dispatch);
            navigate('/watching');
        }
    }

    const seePass = () => {
        if (type === 'text') setType('password');
        else if (type === 'password') setType('text');
    }

    return (
        <>
            {loading === true ? (
                <Intro/>
            ) : (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <div className="login">
                        <div className="top">
                            <div className="wrapper">
                                <img
                                    className="logo"
                                    src={logo}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="container">
                            <form>
                                <h1>Sign In</h1>

                                <label className="field field_v2">

                                    <input
                                        type="email"
                                        className="field__input input"
                                        placeholder=" "
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="field__label-wrap">
                                    <span className="field__label">Email or phone number</span>
                                </span>
                                </label>

                                <label className="field field_v2">
                                    <input
                                        type={type}
                                        className="field__input input"
                                        placeholder=" "
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="field__label-wrap">
                                    <span className="field__label">Password</span>
                                </span>
                                    <div className='icon_eye' onClick={seePass}><Visibility/></div>
                                </label>
                                <button className="loginButton" onClick={handleLogin}>
                                    Sign In
                                </button>

                                <div className="login-help">
                                    <div className="checker">
                                        <input type="checkbox" name='remember'/>
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <div className="help">
                                        <Link to='/forgot'>Need help?</Link>
                                    </div>
                                </div>

                                <span className='sign-text'>
                        New to Netflix? <b><Link to="/register">Sign up now.</Link></b>
                        </span>
                                <small>
                                    This page is protected by Google reCAPTCHA to ensure you're not a
                                    bot. <span>Learn more</span>.
                                </small>
                            </form>
                        </div>
                        <div className='footer'>
                            <Footer/>
                        </div>
                    </div>
                    <div className="slice"></div>
                </motion.div>
            )}
        </>
    );
}
