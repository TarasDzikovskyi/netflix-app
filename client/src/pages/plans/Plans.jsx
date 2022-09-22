import {ArrowBackOutlined, Done} from '@material-ui/icons'
import React, {useState} from 'react'
import './plans.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import logo from '../../content/logo.png';
import iconProfile from '../../content/icon_profile.png';
import Table from '../../components/table/Table';
import axios from "axios";
import Footer from "../../components/footer/Footer";


export default function Plans() {
    const [selectedPlan, setSelectedPlan] = useState(2)
    let plan

    // const user = JSON.parse(localStorage.getItem("user"))
    // const user = false
    const usera = true
    // console.log(user._doc._id);


    const plans = ['Basic', 'Standard', 'Premium']

    // console.log(selectedPlan)

    const handleClick = async (selectedPlan) => {
        if(selectedPlan === 0) plan = 'Basic';
        if(selectedPlan === 1) plan = 'Standard';
        if(selectedPlan === 2) plan = 'Premium';

        // const res = await axios.put(`/users/${user._doc._id}`, {
        //     headers: {
        //         token:
        //             "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        //     },
        //     body:{
        //         plan: plan
        //     }
        // });

        // console.log(res)
    }


    return (
        <div className="plans">
            <div className="nav">
                <div className="left">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="right">
                    <Link to='/register'>Sign Out</Link>
                </div>
            </div>
            <div className="divider"></div>


            <div className="wrapper-plan">
                <div className="conditions">
                <div className="step">STEP <b>3</b> OF <b>3</b></div>

                    <h1>Choose the plan that`s right for you</h1>
                    <ul>
                        <li><Done className='icon'/> Watch all you want. Ad-free.</li>
                        <li><Done className='icon'/> Recommendations just for you.</li>
                        <li><Done className='icon'/> Change or cancel your plan ahytime.</li>
                    </ul>
                </div>

                <div className="planWrapper">
                    {plans.map((item, index) => (
                        <div className={`planBox ${
                            selectedPlan === index ? 'opacity-100' : 'opacity-60'
                        }`}
                             key={index}
                             onClick={() => setSelectedPlan(index)}>
                            <span>{item}</span>
                        </div>
                    ))}

                </div>

                <div className="tableWrapper">
                    <Table selectedPlan={selectedPlan}/>
                </div>

                <div className="text">
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service
                        and device capabilities. Not all content is available in all resolutions.
                        See our <span>Terms of Use</span> for more details.
                        <br/>
                        <br/>
                        Only people who live with you may use your account. Watch on 4 different devices at the same
                        time with Premium, 2 with Standard and 1 with Basic.
                    </p>
                </div>

                <button className='subscribe' onClick={() => handleClick(selectedPlan)}>Subscribe</button>
            </div>

            <div className='footer'>
                <div className="divider"></div>
                <Footer/>
            </div>

        </div>
    )
}
