import React, { useContext, useState } from 'react'
import './navbar.scss'
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons'
import {Link} from "react-router-dom";
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthAction';


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
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="logo"/>
                <span>Homepage</span>
                <Link to='/series' className='link'><span className='navbarMainLinks'>Series</span></Link>
                <Link to='/movies' className='link'><span className='navbarMainLinks'>Movies</span></Link>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="" alt=""/>
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
