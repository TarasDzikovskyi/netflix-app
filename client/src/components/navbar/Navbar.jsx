import React, {useContext, useState} from 'react'
import './navbar.scss'
import {Add, ArrowDropDown, Check, Notifications, Search, StarRate} from '@material-ui/icons'
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from '../../context/authContext/AuthContext';
import {logout} from '../../context/authContext/apiCalls';
import logo from '../../content/logo.png';
import axios from "axios";
import {CartContext} from '../../context/cartContext/CartContext';
import {useEffect} from 'react';
import {addToCart} from "../../context/cartContext/apiCalls";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [value, setValue] = useState('');
    const [filteredMovie, setFilteredMovie] = useState([]);
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate();
    let {user} = useContext(CartContext)
    if(user.length === 0) user = JSON.parse(localStorage.getItem('user'))

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
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

    const handleClickCart = (movie_id) => {
        const user_id = JSON.parse(localStorage.getItem("user")).user.id
        addToCart({user_id, movie_id}, dispatch)
    }


    if(user.user.cart == null) user.user.cart = []

    return (
        <>
            <div className={isScrolled ? "navbar scrolled" : "navbar"}>
                <div className="container">
                    <div className="left">
                        <img src={logo} alt="logo"/>
                        <Link to='/' className='link'><span className='navbarMainLinks'>Homepage</span></Link>
                        <Link to='/series' className='link'><span className='navbarMainLinks'>Series</span></Link>
                        <Link to='/movies' className='link'><span className='navbarMainLinks'>Movies</span></Link>
                        <Link to='/netflix' className='link'><span className='navbarMainLinks'>New and Popular</span></Link>
                        <Link to='/personal' className='link'>
                            <span className='navbarMainLinks'>My List
                                <small>{user.user.cart.length}</small>
                            </span>
                        </Link>

                    </div>
                    <div className="right">
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
                        {/*<Link to='/gpt' className='link'><span className='navbarMainLinks'>ChatGPT</span></Link>*/}

                        <Notifications className="icon"/>
                        {user.user && (
                            <img src={user.user.profilePic} alt="profile"/>
                        )}
                        <div className="profile_menu">
                            <ArrowDropDown className="icon"/>
                            <div className="options">
                                <Link to='/profile' className='link'><span
                                    className='navbarMainLinks'>Settings</span></Link>
                                <span onClick={() => {
                                    // logout_user()
                                    // dispatch(logout())
                                    logout(dispatch)
                                    // navigate('/login')
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
                            <img src={item.imgSm} height={200}/>
                            <div className='search_wrapper'>
                                <span className='title_search' onClick={() => {navigate(`select/${item.id}`)}}>{item.title}</span>
                                <div className="flex">
                                    <p>{item.genre}</p>
                                    {item.isSeries === true ?(
                                        <p>Serial</p>
                                    ) : (
                                        <p>Movie</p>
                                    )}
                                    <p>{item.year} year</p>

                                </div>
                                {/*<hr/>*/}
                                <p className='vote'>{item.vote}<StarRate/></p>
                                <p className='limit'>+{item.limit}</p>
                                {user &&(
                                    user.user.cart.find((item) => item === item.id) ?
                                        <Check className="icon"/>:
                                        <Add className="icon" onClick={() => handleClickCart(item.id)}/>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
