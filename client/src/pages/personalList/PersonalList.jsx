import React, {useContext, useState} from 'react'
import './personalList.scss'
import {ArrowDropDown, Notifications, Search} from '@material-ui/icons'
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


export default function PersonalList() {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    
    let qwe = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className='personalList'>
            <Navbar/>
            <div className="wrapper-list">
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

            </div>

            <Footer/>
        </div>
    )
}
