import React from 'react';
import './passLoader.scss';
import {Link, useNavigate} from "react-router-dom";
import logo from '../../content/logo.png';
import Footer from "../../components/footer/Footer";


export default function PassLoader() {
    const navigate = useNavigate();

    const handleClick = async () => {
        navigate('/verify')
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
