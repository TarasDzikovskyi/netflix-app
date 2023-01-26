import React from 'react'
import './notFound.scss'
import logo from '../../content/logo.png';
import {Link} from "react-router-dom";


export default function NotFound() {
    return (
        <div className='notFound'>
            <div className="nav">
                <img src={logo} height={25}/>
            </div>

            <div className="wrapper">
                <div className="block">
                    <h1>Lost your way?</h1>
                    <p>Sorry, we can`t find that page. You`ll find lots of explore on the home page.</p>

                    <Link to={"/"} style={{textDecoration: 'none'}}><button>Netflix Home</button></Link>
                    <div className='error'>Error Code <strong>NSES-404</strong></div>
                    <div className='source'>FROM <strong>LOST IN SPACE</strong></div>
                </div>
            </div>
        </div>
    )
}
