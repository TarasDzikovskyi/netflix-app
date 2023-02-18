import React, {useState} from 'react';
import './resetPass.scss';
import {Link, useNavigate, useParams} from "react-router-dom";
import logo from '../../content/logo.png';
import 'react-phone-input-2/lib/style.css';
import Footer from "../../components/footer/Footer";
import axios from "axios";

export default function ResetPass() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const params = useParams();


    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (password !== confirmPassword) {
                const text = document.getElementById('password');
                text.style.display = 'block'

            } else {
                const text = document.getElementById('password');
                text.style.display = 'none'

                const res = await axios.post('/auth/reset', {
                    password: confirmPassword,
                    action_token: params.token
                });

                if(res.data === false){
                    const text = document.getElementById('token');
                    text.style.display = 'block'
                }

                if(res.data === true) navigate('/login')
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>
            <div className="reset">
                <div className="nav">
                    <div className="left">
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div className="right">
                        <Link to='/login'>Sign In</Link>
                    </div>

                </div>

                <div className="wrapper">
                    <div className="container">
                        <h1>Reset Your Password</h1>

                        <form action="" className="actions">
                            <p>Please create new password and confirm it.</p>

                            <input
                                className='email_input'
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                className='email_input'
                                type="password"
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button onClick={handleSubmit}>Reset</button>
                        </form>

                        <p id='token' className='attention' style={{display: 'none'}}>Token is expired!</p>
                        <p id='password' className='attention' style={{display: 'none'}}>Passwords don`t match. Try again!</p>

                        <Link to='#'>I don`t remember my email or phone.</Link>
                    </div>
                    <div className="text">
                        This page is protected by Google reCAPTCHA to ensure you`re not a bot. <span>Learn more.</span>
                    </div>
                </div>

            </div>
            <div style={{background: '#0b0b0b'}}>
                <Footer/>
            </div>
        </>
    )
}
