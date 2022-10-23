import React, {useContext, useState} from 'react'
import './navbar.scss'
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons'
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from '../../context/authContext/AuthContext';
import {logout} from '../../context/authContext/AuthAction';
import iconProfile from '../../content/icon_profile.png';
import logo from '../../content/logo.png';
import axios from "axios";
import {CartContext} from '../../context/cartContext/CartContext';
import {useEffect} from 'react';
// import {useSelector} from 'react-redux'


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [value, setValue] = useState('');
    const [filteredMovie, setFilteredMovie] = useState([]);
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate();
    const {cart} = useContext(CartContext)
    const user = JSON.parse(localStorage.getItem("user"))

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }

    console.log(filteredMovie)

    const logout_user = async () => {
        await axios.post('auth/logout')
    }


    useEffect(() => {
        if (value.length > 0) {
            const filter = async () => {
                const res = await axios.get(`/movies/random?search=${value}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                    }
                })
                setFilteredMovie(res.data)
            }
            filter()
        } else setFilteredMovie([])

    }, [value])

    return (
        <>
            <div className={isScrolled ? "navbar scrolled" : "navbar"}>
                <div className="container">
                    <div className="left">
                        <img src={logo} alt="logo"/>
                        <Link to='/' className='link'><span className='navbarMainLinks'>Homepage</span></Link>
                        <Link to='/series' className='link'><span className='navbarMainLinks'>Series</span></Link>
                        <Link to='/movies' className='link'><span className='navbarMainLinks'>Movies</span></Link>
                        <span>New and Popular</span>
                        <Link to='/personal' className='link'><span className='navbarMainLinks'>My List
                            {cart && cart.user ? (
                                <small>{cart.user.cart.length}</small>
                            ) : (
                                <small>{user.user.cart.length}</small>
                            )}
                        </span>
                        </Link>

                    </div>
                    <div className="right">
                        {/*<Search className="icon"/>*/}
                        <div className="search_icon">

                            <div className="span3 widget-span widget-type-raw_html custom-search"
                                 data-widget-type="raw_html" data-x="4" data-w="3">
                                <div className="cell-wrapper layout-widget-wrapper">
                                    <span id="hs_cos_wrapper_module_14308928327274411"
                                          className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_raw_html"
                                          data-hs-cos-general-type="widget" data-hs-cos-type="raw_html">
                                            <form role="search" className="navbar-form navbar-left ng-pristine ng-valid"
                                                  id="express-form" noValidate="">
                                                <input required="" name="search" className="form-control tt-input"
                                                       id="express-form-typeahead" autoComplete="off" spellCheck="false"
                                                    // onClick={(event) => setValue(event.target.value)}
                                                       onChange={(e) => setValue(e.target.value)}
                                                       dir="auto" type="text"/>
                                                <button className="search-btn"><span className="icon"></span></button>
                                            </form>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <span>Kids</span>
                        <Notifications className="icon"/>
                        <img src={iconProfile} alt="profile"/>
                        <div className="profile_menu">
                            <ArrowDropDown className="icon"/>
                            <div className="options">
                                <Link to='/profile' className='link'><span
                                    className='navbarMainLinks'>Settings</span></Link>
                                <span onClick={() => {
                                    logout_user()
                                    dispatch(logout())
                                    navigate('login')
                                }}>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {filteredMovie.length > 0 && (
                <div className="search">
                    {filteredMovie.map((item) => (
                        <div className='filter_item'>
                            {item.title}
                        </div>
                    ))}
                </div>
            )}

        </>

    )
}
