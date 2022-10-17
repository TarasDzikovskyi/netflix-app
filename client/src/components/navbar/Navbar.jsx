import React, {useContext, useState} from 'react'
import './navbar.scss'
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons'
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/authContext/AuthContext';
import {logout} from '../../context/authContext/AuthAction';
import iconProfile from '../../content/icon_profile.png';
import logo from '../../content/logo.png';
import axios from "axios";
import {useHistory} from "react-router-dom";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext)
    const history = useHistory();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    const logout_user = async () => {
        await axios.post('auth/logout')
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
                    <Link to='/list' className='link'><span>My List</span></Link>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Kids</span>
                    <Notifications className="icon"/>
                    <Link to='/profile'><img src={iconProfile} alt="profile"/></Link>
                    <div className="profile_menu">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => {
                                logout_user()
                                dispatch(logout())
                                history.push('login')
                            }}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
