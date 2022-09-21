import { useState } from "react";
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye, faEnvelope, faLocationDot, faUser, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import './auth.css'

export default function SingUp() {
    const [type, setType] = useState('text');
    const onClick = () => {
        if (type === 'text') setType('password');
        else if (type === 'password') setType('text');
    }

    return (
        <div className='auth_wrapper'>
            <div className="auth_logo">
                <div className="auth_point">
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <h2>Seet and go</h2>
            </div>
            <div className="auth_info" >
                < div className="auth_container" >
                    <div className="auth_head" >
                        <span>Welcome</span>
                        <p > Do you already have an account? <Link  to={'/signin'} style={{ textDecoration: 'none'}}><i>Login now</i></Link></p>
                    </div>

                    <div >
                        <form className="auth_form">
                            <label className="field field_v2">
                                <i className="fa">
                                    <FontAwesomeIcon icon={faUser} />
                                </i>
                                <input
                                    id="username"
                                    className="field__input"
                                    placeholder="Name Surname"
                                />
                                <span className="field__label-wrap">
                                    <span className="field__label">Full Name</span>
                                </span>
                            </label>
                            <label className="field field_v2">
                                <i className="fa">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </i>
                                <input
                                    id="username"
                                    className="field__input"
                                    placeholder="email.address@gmail.com"
                                />
                                <span className="field__label-wrap">
                                    <span className="field__label">Email</span>
                                </span>
                            </label>
                            <label className="field field_v2">
                                <i className="fa">
                                    <FontAwesomeIcon icon={faCalendarCheck} />
                                </i>
                                <input
                                    id="username"
                                    className="field__input"
                                    placeholder="26.09.1998"
                                />
                                <span className="field__label-wrap">
                                    <span className="field__label">Birth Date</span>
                                </span>
                            </label>

                            <label className="field field_v2">
                                <i onClick={onClick} className="fa">
                                    <FontAwesomeIcon icon={faEye} />
                                </i>
                                <input
                                    id="password"
                                    className="field__input"
                                    type={type}
                                    placeholder="************" />
                                <span className="field__label-wrap">
                                    <span className="field__label">Password</span>
                                </span>
                            </label>

                            <button className="auth_btn" style={{ marginTop: "0px" }}>Register</button>
                        </form>


                        <div className="auth_center auth_p">
                            <p>or Login with</p>
                        </div>

                        <div className="auth_center jc_se mt">
                            <div className="logo_brand f_bg auth_center">
                                <Link to="/" style={{ textDecoration: 'none' }} >
                                    <FontAwesomeIcon icon={faFacebookF} className='fab' /></Link>
                            </div>

                            <div className="logo_brand gt_bg auth_center">
                                <Link to="/" style={{ textDecoration: 'none' }} >
                                    <FontAwesomeIcon icon={faGithub} className='fab' /></Link>
                            </div>

                            <div className="logo_brand g_bg auth_center">
                                <Link to="/" style={{ textDecoration: 'none' }} >
                                    <FontAwesomeIcon icon={faGoogle} className='fab' /></Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}