import React from 'react'
import './profile.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';
import Footer from "../../components/footer/Footer";
import {motion} from "framer-motion";

export default function Profile() {
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className="profile">
                <Link to='/'><img className="logo" src={logo} alt="logo"/></Link>
                <div className="profile_wrapper">
                    <div className="profile_box">
                        <p className='header'>Edit Profile</p>
                        <div className="email_box">
                            <hr/>
                            <img src={iconProfile} alt=""/>
                            <button className='img-button'>Edit</button>

                            <div className=''></div>
                            <label className="file">
                                <input type="file" id="file" aria-label="File browser example"/>
                                    <span className="file-custom"></span>
                            </label>

                            <div className="input">
                                <input type="email" placeholder={user.user.email} className='input_email'/>
                                <button className='email_button'>Edit</button>
                            </div>
                            <h3>Current Plan: {user.user.plan}</h3>
                        </div>
                        <div className="plans_box">
                            <hr/>
                            <p className='date'>Renewal date: 01/10/2022</p>
                            <div className="container">
                                <p>Netflix Standard <br/> 1080p</p>
                                {user.user.plan === "Standard" ? (
                                    <button className='button_package'>Current Package</button>) : (
                                    <button>Subscribe</button>)}
                            </div>
                            <div className="container">
                                <p>Netflix Basic <br/> 480p</p>
                                {user.user.plan === "Basic" ? (
                                    <button className='button_package'>Current Package</button>) : (
                                    <button>Subscribe</button>)}
                            </div>
                            <div className="container">
                                <p>Netflix Premium <br/> 4K+HDR</p>
                                {user.user.plan === "Premium" ? (
                                    <button className='button_package'>Current Package</button>) : (
                                    <button>Subscribe</button>)}
                            </div>
                            <button className='sign-button'>Sign out</button>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        </motion.div>
    )
}
