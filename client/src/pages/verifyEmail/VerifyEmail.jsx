import './verifyEmail.scss';
import {motion} from "framer-motion";
import logo from "../../content/logo.png";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import Footer from "../../components/footer/Footer";
import {WarningRounded} from "@material-ui/icons";
import VerificationInput from "react-verification-input";
import axios from "axios";
import validator from 'validator';

export default function VerifyEmail() {
    // const [email, setEmail] = useState('');
    const [check, setCheck] = useState(false);
    const [code, setCode] = useState(null);
    const [verifyCode, setVerifyCode] = useState(null);
    const navigate = useNavigate();
    const localEmail = JSON.parse(localStorage.getItem("email"));

    const sendCode = async () => {
        if (localEmail.email === '' || validator.isEmail(localEmail.email) === false) {
            const input = document.getElementById('warning');

            if (input.style.display === "none") input.style.display = "flex";

        } else {
            const input = document.getElementById('warning');

            if (input.style.display === "flex") input.style.display = "none";

            const verifyCode = Math.floor(100000 + Math.random() * 900000);
            setVerifyCode(verifyCode);
            setCheck(true);

            await axios.post('/auth/verify', {verifyCode, email: localEmail.email});
        }
    }

    const checkCode = () => {
        if(Number(code) !== Number(verifyCode)){
            const input = document.getElementById('warning-code');

            if (input.style.display === "none") input.style.display = "flex";
        } else {
            const input = document.getElementById('warning-code');

            if (input.style.display === "flex") input.style.display = "none";

            navigate('/pass')
        }
    }

    const getVal = (e) => {
        setCode(e ? e : code)
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className="verify-email">
                <div className="nav">
                    <div className="left">
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div className="right">
                        <Link to='/register'>Sign Out</Link>
                    </div>
                </div>
                <div className="divider"></div>

                <div className="wrapper-verify">
                    <div className="container">
                        <div id="warning" style={{display: 'none'}}>
                            <div><WarningRounded className='icon'/></div>
                            <p>Your email is empty or invalid.</p>
                        </div>

                        <div id="warning-code" style={{display: 'none'}}>
                            <div><WarningRounded className='icon'/></div>
                            <p>Verify code is incorrect.</p>
                        </div>

                        <div className="step">STEP <b>1</b> OF <b>3</b></div>

                        <div className="header">
                            {check === false ? (
                                <p>Please verify your email to continue registration</p>
                            ) : (
                                <p>Check your email and write code here</p>
                            )}
                        </div>

                        <div className="row">
                            Just a few more steps and you're done!<br/> <p>We hate paperwork, too.</p>
                        </div>

                        {check === false ? (
                            <div className="input-field">
                                <label className="field field_v2">
                                    <input
                                        type="text"
                                        value={localEmail.email}
                                        className="field__input input"
                                        placeholder=" "
                                        readOnly={true}
                                        // onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <span className="field__label-wrap">
                                    <span className="field__label">Email</span>
                                </span>
                                </label>
                            </div>
                        ) : (
                            <div className='verification'>
                                <VerificationInput
                                    validChars="0-9"
                                    removeDefaultStyles
                                    placeholder=''
                                    classNames={{
                                        character: "character",
                                        characterInactive: "character-inactive",
                                    }}
                                    onChange={getVal}
                                />
                            </div>
                        )}

                        {check === false ? (
                            <button className='verify-btn' onClick={sendCode}>Verify</button>
                        ) : (
                            <button className='verify-btn' onClick={checkCode}>Check</button>
                        )}
                    </div>
                </div>

                <div className='footer'>
                    <div className="divider"></div>
                    <Footer/>
                </div>
            </div>
        </motion.div>
    )
}