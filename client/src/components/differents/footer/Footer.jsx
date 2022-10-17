import React from 'react'
import './footer.scss'

export default function Footer() {

    return (
        <div className="footer-faq">
            <div className="container">
                <div className="contact-block">
                    <h3>Need more help?</h3>
                    <button className='btn-contact'>Contact Us</button>

                </div>
                <div className="informator">

                    <div className="switcher-wrapper">
                        <select name="" id="">
                            <option value="en">English</option>
                            <option value="ua">Ukraine</option>
                        </select>
                    </div>

                    <ul>
                        <li><p>Terms of Use</p></li>
                        <li>Privacy</li>
                        <li>Cookie Preferences</li>
                        <li>Corporate Information</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}