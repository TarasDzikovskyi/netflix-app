import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";
import tv from '../../content/tv.png'
import mobile from '../../content/mobile-0819.jpg'
import devices from '../../content/device-pile.png'
import kids from '../../content/kids.png'
import videoDevices from '../../content/video-devices.m4v'
import videoTV from '../../content/video-tv-0819.m4v'
import Questions from "../../components/questions/Questions";
import Footer from "../../components/footer/Footer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {
        console.log(err);
    }
  };

  const handleClick = () => {
    history.push('/login')
}
  return (
    <>
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' 
              alt=""
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
          {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="username" placeholder="username" ref={usernameRef} />
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
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
            <img src={mobile} height="400px" alt="mobile" />
            
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
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>
          <div className="rightSide">
            <img src={devices} alt="" className="imgDevices"/>
            <video src={videoDevices} className="videoDevices" autoPlay={true} loop/>
          </div>
        </div>


        <div className="slice"></div>
        <div className="content">
          <div className="rightSide">
            <img src={kids} height="400px" className="imgKids" alt="mobile" />
          </div>
          <div className="leftSide">
            <h2>Create profiles for kids.</h2>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>

        <div className="slice"></div>
        <Questions/>

        <div className="slice"></div>
        <Footer/>
      </div>
    </>
  );
}


