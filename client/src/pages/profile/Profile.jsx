import {ArrowBackOutlined} from '@material-ui/icons'
import React from 'react'
import './profile.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';


export default function Profile() {
    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div className="profile">
            <Link to='/'><img className="logo" src={logo} alt="logo"/></Link>

            <div className="wrapper">
                <div className="profile_box">

                    <p className='header'>Edit Profile</p>

                    <div className="email_box">
                        <hr />
                        <img src={iconProfile} alt="" />
                        <div className="input">
                            <input type="email"/>
                            <button className='email_button'>Edit</button>
                        </div>
                        <h3>Plans (Current Plan: premium)</h3>
                    </div>

                    <div className="plans_box">
                        <hr />
                        <p className='date'>Renewal date: 01/10/2022</p>
                        <div className="container">
                            <p>Netflix Standart <br/> 1080p</p>
                            {user.user.plan === "Standard" ? (<button className='button_package'>Current Package</button>) : (<button>Subscribe</button>)}
                        </div>
                        <div className="container">
                            <p>Netflix Basic <br/> 480p</p>
                            {user.user.plan === "Basic" ? (<button className='button_package'>Current Package</button>) : (<button>Subscribe</button>)}

                        </div>
                        <div className="container">
                            <p>Netflix Premium <br/> 4K+HDR</p>
                            {user.user.plan === "Premium" ? (<button className='button_package'>Current Package</button>) : (<button>Subscribe</button>)}

                        </div>
                        <button className='sign-button'>Sign out</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
