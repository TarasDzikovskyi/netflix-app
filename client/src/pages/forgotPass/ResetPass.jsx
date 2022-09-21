import {ArrowBackOutlined} from '@material-ui/icons'
import React, {useState} from 'react'
import './forgotPass.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import Footer from "../../components/footer/Footer";


export default function ResetPass() {
    const [value, setValue] = useState()

    console.log(value)

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


                            <p>We will send you an email with instructions on how to reset your password.</p>
                            <input
                                className='email_input'
                                type="email"
                                placeholder='name@example.com'
                                value={valueEmail}
                                onChange={(e) => setValueEmail(e.target.value)}

                            />
                            <button>Email Me</button>


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
