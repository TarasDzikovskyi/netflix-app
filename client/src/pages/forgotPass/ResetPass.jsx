import React, {useState} from 'react'
import './resetPass.scss'
import {Link, Redirect} from "react-router-dom";
import logo from '../../content/logo.png';
import 'react-phone-input-2/lib/style.css'
import Footer from "../../components/footer/Footer";
import axios from "axios";

export default function ResetPass(props) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    // console.log(props.match.params.token)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            console.log('herovo')
        } else {
            const res = await axios.post('auth/reset', {
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    password: confirmPassword,
                    action_token: props.match.params.token
                })
            })

            setRedirect(true)
            console.log(res)
        }
    }

    if(redirect) <Redirect to='/login'/>

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
                            <button>Reset</button>


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
