import React, {useState} from 'react';
import './forgotPass.scss';
import {Link} from "react-router-dom";
import logo from '../../content/logo.png';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import Footer from "../../components/footer/Footer";
import axios from "axios";

export default function ForgotPass() {
    const [radioBtn, setRadioBtn] = useState('email')
    const [value, setValue] = useState()
    const [valueEmail, setValueEmail] = useState()

    const handleClick = async (e) => {
        e.preventDefault()
        await axios.post('auth/forgot', {
            email: valueEmail
        })
    }

    return (
        <>
            <div className="forgot">
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
                        <h1>Forgot Email/Password</h1>
                        <p>How would you like to reset your password?</p>

                        <form action="" className="actions">
                            <div className="radio-btn">
                                <input
                                    name='radio'
                                    type="radio"
                                    id='email'
                                    value='email'
                                    defaultChecked
                                    onClick={(e) => setRadioBtn(e.target.value)}
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="radio-btn">
                                <input
                                    name='radio'
                                    type="radio"
                                    id='sms'
                                    value='sms'
                                    onClick={(e) => setRadioBtn(e.target.value)}
                                />
                                <label htmlFor="sms">Text Message (SMS)</label>
                            </div>


                            {radioBtn === 'email' ? (
                                <>
                                    <p>We will send you an email with instructions on how to reset your password.</p>
                                    <input
                                        className='email_input'
                                        type="email"
                                        placeholder='name@example.com'
                                        value={valueEmail}
                                        onChange={(e) => setValueEmail(e.target.value)}

                                    />
                                    <button onClick={handleClick}>Email Me</button>
                                </>
                            ) : (
                                <>
                                    <p>We will text you a verification code to reset your password. Message and data
                                        rates may apply.</p>
                                    <PhoneInput
                                        className='sms_input'
                                        country={'ua'}
                                        placeholder="Enter phone number"
                                        value={value}
                                        onChange={(phone) => setValue(phone)}
                                    />
                                    <button>Text Me</button>
                                </>
                            )}

                        </form>

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
