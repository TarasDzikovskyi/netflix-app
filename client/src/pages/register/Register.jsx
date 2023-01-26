import axios from "axios";
import {useRef} from "react";
import {useState} from "react";
import { useNavigate} from "react-router-dom";
import "./register.scss";
import tv from '../../content/tv.png'
import mobile from '../../content/mobile-0819.jpg'
import devices from '../../content/device-pile.png'
import kids from '../../content/kids.png'
import videoDevices from '../../content/video-devices.m4v'
import videoTV from '../../content/video-tv-0819.m4v'
import Questions from "../../components/questions/Questions";
import FooterRegister from "../../components/footer/FooterRegister";
import {ArrowForwardIos} from "@material-ui/icons";
import logo from '../../content/logo.png';


export default function Register() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleStart = async (e) => {
        try {
            const res = await axios.post("auth/test");
            console.log(res)



        } catch (e) {
            console.log(e)
        }
    }

    const handleStartz = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/check", {email});

            console.log(res.data);

            if(res.data === 'new') {
                let obj = {email: email, new: true}
                localStorage.setItem('email', JSON.stringify(obj))

                navigate('/loader')
            } else {
                let obj = {email: email, new: false}
                localStorage.setItem('email', JSON.stringify(obj))

                navigate('/loader')
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = () => {
        navigate('/login')
    }
    return (
        <>
            <div className="register">
                <div className="top">
                    <div className="wrapper">
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                        />
                        <button className="loginButton" onClick={handleClick}>Sign In</button>
                    </div>
                </div>
                <div className="container">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    <div className="input-box">
                        <div className="input-field">

                    <label className="field field_v2" htmlFor='email'>
                            <input
                                id='email'
                                type="email"
                                className="field__input input"
                                placeholder=" "
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="field__label-wrap">
                                    <span className="field__label">Email address</span>
                                </span>
                        </label>
                        </div>

                        {/* <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/> */}
                        <button className="registerButton" onClick={handleStart}>
                            Get Started
                            <ArrowForwardIos/>
                        </button>
                    </div>

                </div>
            </div>
            <div className="body-register">
                <div className="slice"></div>
                <div className="content">

                    <div className="leftSide">
                        <h2>Enjoy on your TV.</h2>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="rightSide">
                        <img src={tv} alt="" className="imgTV"/>
                        <video src={videoTV} className="videoTV" autoPlay={true} loop/>
                    </div>
                </div>
                <div className="slice"></div>
                <div className="content">
                    <div className="rightSide">
                        <img src={mobile} height="400px" alt="mobile"/>

                    </div>
                    <div className="leftSide">
                        <h2>Download your shows to watch offline.</h2>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                </div>


                <div className="slice"></div>
                <div className="content">
                    <div className="leftSide">
                        <h2>Watch everywhere.</h2>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying
                            more.</p>
                    </div>
                    <div className="rightSide">
                        <img src={devices} alt="" className="imgDevices"/>
                        <video src={videoDevices} className="videoDevices" autoPlay={true} loop/>
                    </div>
                </div>


                <div className="slice"></div>
                <div className="content">
                    <div className="rightSide">
                        <img src={kids} height="400px" className="imgKids" alt="mobile"/>
                    </div>
                    <div className="leftSide">
                        <h2>Create profiles for kids.</h2>
                        <p>Send kids on adventures with their favorite characters in a space made just for them—free
                            with your membership.</p>
                    </div>
                </div>

                <div className="slice"></div>
                <Questions/>

                <div className="slice"></div>
                <FooterRegister/>
            </div>
        </>
    );
}


