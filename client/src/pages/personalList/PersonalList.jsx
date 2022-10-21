import React, {useContext, useState} from 'react'
import './personalList.scss'
import Footer from "../../components/footer/Footer";
import Navbar from '../../components/navbar/Navbar';
import PersonalItem from '../personalItem/PersonalItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PersonalList() {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className='personalList'>
            <Navbar/>

            <div className="wrapper-list">
                {user.user.cart.length === 0 ? (
                    <h2>No Any Movies In Your List</h2>
                ) : (
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
