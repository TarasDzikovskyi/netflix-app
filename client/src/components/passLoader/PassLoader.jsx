import {ArrowBackOutlined, Done} from '@material-ui/icons'
import React, {useState} from 'react'
import './passLoader.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';
import Table from '../../components/table/Table';
import axios from "axios";
import Footer from "../../components/footer/Footer";
import {useHistory} from "react-router-dom";


export default function PassLoader() {
    const history = useHistory();

    // const user = JSON.parse(localStorage.getItem("user"))
    // const user = false
    const usera = true
    // console.log(user._doc._id);



    // console.log(selectedPlan)

    const handleClick = async () => {
       history.push('/setpass')
    }


    return (
        <div className="pass-loader">
            <div className="nav">
                <div className="left">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="right">
                    <Link to='/login'>Sign In</Link>
                </div>
            </div>
            <div className="divider"></div>


            <div className="loader">
                    <div className="wrapper-loader">
                        <div className="img-loader"></div>
                        <div className="step-loader">STEP <b>1</b> OF <b>3</b></div>
                        <div className="header-loader">Finish setting up your account</div>
                        <div className="text-loader">Netflix is personalized for you.<br/> Create a password to watch on any device at any time.</div>

                        <button className="btn-loader" onClick={handleClick}>Next</button>

                    </div>
                </div>

            <div className='footer'>
                <div className="divider"></div>
                <Footer/>
            </div>

        </div>
    )
}
