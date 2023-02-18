import {Done} from '@material-ui/icons';
import React from 'react';
import './infoPlan.scss';
import {Link} from "react-router-dom";
import logo from '../../content/logo.png';
import Footer from "../../components/footer/Footer";
import {useNavigate} from "react-router-dom";

export default function InfoPlan() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/plans')
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

                    <button className='next-btn' onClick={handleClick}>Next</button>
                </div>
            </div>

            <div className='footer'>
                <div className="divider"></div>
                <Footer/>
            </div>
        </div>
    )
}
