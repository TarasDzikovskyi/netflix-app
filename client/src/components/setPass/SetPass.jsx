import {ArrowBackOutlined, Done, WarningRounded} from '@material-ui/icons'
import React, {useState} from 'react'
import './setPass.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';
import Table from '../../components/table/Table';
import axios from "axios";
import Footer from "../../components/footer/Footer";
import {useHistory} from "react-router-dom";


export default function SetPass() {
    const [selectedPlan, setSelectedPlan] = useState(2)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    let plan

    const obj = JSON.parse(localStorage.getItem("email"))
    // const user = false
    const email = obj.email;
    // console.log(user._doc._id);



    // console.log(selectedPlan)

    const handleClick = async (username, password) => {
        if(password == ''){
            const input = document.getElementById('warning');

            if (input.style.display = "none")  input.style.display = "flex"

        } else {
            await axios.post('/auth/register', {email, username, password})

            history.push('/login')
        }
    }


    console.log(password);

    // icnorrect password. Please try again


    return (
        <div className="set-pass">
            <div className="nav">
                <div className="left">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="right">
                    <Link to='/login'>Sign In</Link>
                </div>
            </div>
            <div className="divider"></div>

            {obj.new === false ? (
                <div className="container">
                <div className="wrapper">
                    <div id="warning" style={{display: 'none'}}>
                        <div ><WarningRounded className='icon'/></div>
                        <p>Your password must contain between 4 and 40 characters.</p>
                    </div>

                    <div className="step">STEP <b>1</b> OF <b>3</b></div>

                    <div className="header">
                        <p>Welcome back! <br/> Joining Netflix is easy.</p>
                    </div>

                    <div className="row">
                        Enter your password and you'll be watching in no time.
                    </div>

                    <div className="email-field">
                        Email <br /> <b>{email}</b>
                    </div>

                    <div className="input-field">
                        <label className="field field_v2">
                            <input
                                type="password"
                                className="field__input input"
                                placeholder=" "
                                onChange={(e) => setPassword(e.target.value)}
                                minLength='4'
                                maxLength='45'
                            />
                            <span className="field__label-wrap">
                                    <span className="field__label">Enter your password</span>
                                </span>
                        </label>

                        {(password.length <1) && (
                            <div className="error">Password is required!</div>
                        )}

                        {(password.length >= 2 && password.length < 4)  && (
                            <div className="error">Password should be between 4 and 40 characters.</div>
                        )}

                        {password.length >40  && (
                            <div className="error">Please shorten your password to 40 characters or less.</div>
                        )}
                        
                    </div>

                    <div className="help">
                        <Link to='/forgot'>Forgot your password?</Link>
                    </div>

                    <button className='next-btn' onClick={() => handleClick(password)}>Next</button>
                </div>
                </div>
            ) : (
                <div className="container">
                <div className="wrapper">
                    <div id="warning" style={{display: 'none'}}>
                        <div ><WarningRounded className='icon'/></div>
                        <p>Your password must contain between 4 and 40 characters.</p>
                    </div>

                    <div className="step">STEP <b>1</b> OF <b>3</b></div>

                    <div className="header">
                        <p>Create a password to start your membership</p>
                    </div>

                    <div className="row">
                        Just a few more steps and you're done!<br/> <p>We hate paperwork, too.</p>
                    </div>

                    <div className="email-field">
                        Email <br /> <b>{email}</b>
                    </div>

                    <div className="input-field">
                        <label className="field field_v2">
                            <input
                                type="text"
                                className="field__input input"
                                placeholder=" "
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <span className="field__label-wrap">
                                    <span className="field__label">Username</span>
                                </span>
                        </label>

                        <label className="field field_v2">
                            <input
                                type="password"
                                className="field__input input"
                                placeholder=" "
                                onChange={(e) => setPassword(e.target.value)}
                                minLength='4'
                                maxLength='45'
                            />
                            <span className="field__label-wrap">
                                    <span className="field__label">Add a password</span>
                                </span>
                        </label>

                        {(password.length <1) && (
                            <div className="error">Password is required!</div>
                        )}

                        {(password.length >= 1 && password.length < 4)  && (
                            <div className="error">Password should be between 4 and 40 characters.</div>
                        )}

                        {password.length >40  && (
                            <div className="error">Please shorten your password to 40 characters or less.</div>
                        )}
                        
                    </div>

                    <div className="checkbox-block">
                        <input type="checkbox" name='check' />
                        <label htmlFor="check">Please do not email me Netflix special offers.</label>
                    </div>

                    <button className='next-btn' onClick={() => handleClick(password)}>Next</button>
                </div>
                </div>
            )}
            

            <div className='footer'>
                <div className="divider"></div>
                <Footer/>
            </div>

        </div>
    )
}
