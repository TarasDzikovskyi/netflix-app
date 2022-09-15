import React, { useContext, useState } from 'react'
import './navbar.scss'
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons'
import {Link} from "react-router-dom";
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthAction';
import iconProfile from '../../content/icon_profile.png';
import logo from '../../content/logo.png';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src={logo} alt="logo"/>
                <Link to='/' className='link'><span className='navbarMainLinks'>Homepage</span></Link>
                <Link to='/series' className='link'><span className='navbarMainLinks'>Series</span></Link>
                <Link to='/movies' className='link'><span className='navbarMainLinks'>Movies</span></Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>Kids</span>
                <Notifications className="icon"/>
                <img src={iconProfile} alt=""/>
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logout())}>Logout</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
