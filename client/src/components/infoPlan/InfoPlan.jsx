import {ArrowBackOutlined, Done} from '@material-ui/icons'
import React, {useState} from 'react'
import './infoPlan.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';
import Table from '../../components/table/Table';
import axios from "axios";
import Footer from "../../components/footer/Footer";


export default function InfoPlan() {
    const [selectedPlan, setSelectedPlan] = useState(2)
    let plan

    // const user = JSON.parse(localStorage.getItem("user"))
    // const user = false
    const usera = true
    // console.log(user._doc._id);



    // console.log(selectedPlan)

    const handleClick = async (selectedPlan) => {
       
    }


    return (
        <div className="info-plan">
            <div className="nav">
                <div className="left">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="right">
                    <Link to='/register'>Sign Out</Link>
                </div>
            </div>
            <div className="divider"></div>


            <div className="wrapper-info">
                <div className="container">
                    <div className="img-box"></div>

                    <div className="step">STEP <b>2</b> OF <b>3</b></div>

                    <div className="header"><p>Choose your plan.</p></div>

                    <div className="conditions">
                        <ul>
                            <li><Done className='icon'/>No commitments, cancel anytime.</li>
                            <li><Done className='icon'/>Everything on Netflix for one low price.</li>
                            <li><Done className='icon'/>Unlimited viewing on all your devices.</li>
                        </ul>
                    </div>



                    <button className='next-btn' onClick={() => handleClick(selectedPlan)}>Next</button>

                </div>
            </div>

            <div className='footer'>
                <div className="divider"></div>
                <Footer/>
            </div>

        </div>
    )
}
