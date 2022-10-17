import React from 'react'
import './faq.scss'
import logo from '../../../content/logo.png';
import {Link} from "react-router-dom";
import faq1 from '../diff-content/faq1.png'
import faq2 from '../diff-content/faq2.png'
import faq3 from '../diff-content/faq3.png'
import faq4 from '../diff-content/faq4.png'
import faq5 from '../diff-content/faq5.png'
import {ArrowBack, DescriptionOutlined} from "@material-ui/icons";
import Footer from "../footer/Footer";

export default function Faq() {

    return (
        <div className='faq'>
            <div className="nav-wrapper">
                <div className="nav">
                    <div className="left">
                        <img src={logo} alt="" width='88px' height='28px'/>
                        <div className="line"/>
                        <Link to="#">Help Center</Link>
                    </div>
                    <div className="right">
                        <button className="btn-register">Join netflix</button>
                        <button className="btn-login">Sign in</button>
                    </div>
                </div>
            </div>

            <div className="global-content">
                <div className="container">
                    <div className="href-container">
                        <Link to='#'>
                            <ArrowBack className='icon'/>
                            Back to Help Home
                        </Link>
                    </div>

                    <h1>What is Netflix</h1>

                    <div className="content-container">
                        <div className="left-side">
                            <div className="content-box">
                                <img src={faq1} alt=""/>
                                <p>
                                    Netflix is a subscription-based <span>streaming service</span> that allows our
                                    members
                                    to watch TV shows and movies without commercials on an internet-connected device.
                                </p>
                                <p>
                                    You can also <span>download TV shows and movies</span> to your iOS, Android, or
                                    Windows 10
                                    device and watch without an internet connection.
                                </p>
                                <p>
                                    If you're already a member and would like to learn more about using Netflix,
                                    visit <span>Getting started with Netflix.</span>
                                </p>
                                <div className="line-bottom"/>
                            </div>

                            <div className="content-box">
                                <h2>TV Shows & Movies</h2>
                                <img src={faq2} alt=""/>
                                <p>
                                    Netflix content varies by region and may change over time. You can watch from a wide
                                    variety of <span>award-winning Netflix Originals, TV shows, movies, documentaries, and more.</span>
                                </p>
                                <p>
                                    The more you watch, the better Netflix gets at <span>recommending</span> TV shows
                                    and movies we think you’ll enjoy.
                                </p>

                                <div className="line-bottom"/>
                            </div>

                            <div className="content-box">
                                <h2>Supported Devices</h2>
                                <img src={faq3} alt=""/>
                                <p>
                                    You can watch Netflix through any <span>internet-connected device</span> that offers
                                    the Netflix app,
                                    including smart TVs, game consoles, streaming media players, set-top boxes,
                                    smartphones,
                                    and tablets. You can also watch Netflix on your computer using an internet browser.
                                    You can review the <span>system requirements</span> for web browser compatibility,
                                    and check our
                                    <span>internet speed recommendations</span> to achieve the best performance.
                                </p>
                                <p>Need help getting set up? Search our <span>Help Center</span> for the manufacturer of
                                    the device you're using.</p>

                                <div className="note">
                                    <small>
                                        <b>NOTE:</b> The Netflix app may come pre-loaded on certain devices, or you may
                                        need
                                        to download the Netflix app onto your device. Netflix app functionality may
                                        differ between devices.
                                    </small>
                                </div>
                                <div className="line-bottom"/>
                            </div>

                            <div className="content-box">
                                <h2>Plans and Pricing</h2>
                                <img src={faq4} alt=""/>
                                <p>
                                    Each Netflix plan determines the number of devices you can watch Netflix on <b>at
                                    the
                                    same</b> time and if you prefer to view in Standard Definition (SD), High Definition
                                    (HD), or Ultra High Definition (UHD).
                                </p>
                                <p>
                                    <span>Compare our plans and pricing</span> to decide which one is right for you. You
                                    can
                                    easily <span>change your plan</span> or <span>cancel</span> online at any time.
                                </p>

                                <div className="line-bottom"/>
                            </div>

                            <div className="content-box">
                                <h2>Get Started!</h2>
                                <img src={faq5} alt=""/>
                                <p>Follow these easy steps to start watching Netflix today:</p>

                                <ol>
                                    <li>
                                        <p>Visit <span>netflix.com/signup.</span></p>
                                    </li>
                                    <li>
                                        <p><span>Choose the plan</span> that’s right for you.</p>
                                    </li>
                                    <li>
                                        <p>Create an account by entering your email address and creating a password.</p>
                                    </li>
                                    <li>
                                        <p>Enter a <span>payment method.</span> As a Netflix member, you are charged
                                            once a month on the date you signed up.</p>
                                    </li>
                                </ol>
                                <p>
                                    That's it. Enjoy Netflix!
                                </p>
                                <div className="line-bottom"/>
                            </div>

                            <div className="article">
                                Was this article helpful?
                                <span>Yes</span>
                                <span>No</span>
                            </div>

                        </div>

                        <div className="right-side">
                            <div className="articles-wrapper">
                                <h3>Related Articles</h3>
                                <ul>
                                    <li><DescriptionOutlined/><Link to='#'>Getting started with Netflix</Link></li>
                                    <li><DescriptionOutlined/><Link to='#'>Billing and Payments</Link></li>
                                    <li><DescriptionOutlined/><Link to='#'>Netflix Gift Cards</Link></li>
                                    <li><DescriptionOutlined/><Link to='#'>Can't sign in to Netflix</Link></li>
                                    <li><DescriptionOutlined/><Link to='#'>How to create, change, or delete profiles</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>

        </div>
    )
}