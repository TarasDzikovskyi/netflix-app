import React, {useContext, useState} from 'react'
import './personalList.scss'
import {ArrowDropDown, Notifications, Search, ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons'
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/authContext/AuthContext';
import {logout} from '../../context/authContext/AuthAction';
import iconProfile from '../../content/icon_profile.png';
import logo from '../../content/logo.png';
import axios from "axios";
import {useHistory} from "react-router-dom";
import { CartContext } from '../../context/cartContext/CartContext';
import { useEffect } from 'react';
import Footer from "../../components/footer/Footer";
import Navbar from '../../components/navbar/Navbar';
import PersonalItem from '../personalItem/PersonalItem';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function PersonalList() {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    
    let qwe = [1,2,3,4,5,6,7,8,9,10]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <ArrowBackIosOutlined className="sliderArrow left"/>,
        nextArrow: <ArrowForwardIosOutlined className="sliderArrow right"/>
      };

    return (
        <div className='personalList'>
            <Navbar/>
            <div className="qwerty">
                <Slider {...settings}>
                    {qwe.map((item) => (
                        <div className='item'>
                            <h3>{item}</h3>
                        </div>
                    ))}
                    
                </Slider>

            </div>
            {/* <div className="wrapper-list">
                {user.user.cart.length == 0 ? (
                    <h2>No Any Movies In Your List</h2>
                ): (
                    <h2>My Movies List</h2>
                )}

                <div className="block">
                    {user.user.cart.map((movie_id) => (
                        <PersonalItem movie_id={movie_id}/>
                    ))}
                </div>

            </div> */}



            <Footer/>
        </div>
    )
}
