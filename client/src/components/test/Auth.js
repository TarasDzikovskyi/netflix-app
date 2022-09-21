import { useState } from "react";
import { Link } from "react-router-dom";
import './auth.css'

export default function Auth() {

    const [type, setType] = useState('text');
    const onClick = () => {
        if (type === 'text') setType('password');
        else if (type === 'password') setType('text');
    }





    // const googleLogin = async () => {
    //     try {
    //         const provider = new firebase.auth.GoogleAuthProvider()
    //         await auth.signInWithPopup(provider)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const facebookLogin = async () => {
    //     try {
    //         const provider = new firebase.auth.FacebookAuthProvider()
    //         await auth.signInWithPopup(provider)

    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const githubLogin = async () => {
    //     try {
    //         const provider = new firebase.auth.GithubAuthProvider()
    //         await auth.signInWithPopup(provider)

    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const setCookies = (e) => {
        e.preventDefault()
        let u = document.getElementById('username').value
        let p = document.getElementById('password').value

        console.log(u)
        console.log(p)

        localStorage.setItem('my_username', `${u}`);
        localStorage.setItem('my_password', `${p}`);

        // document.cookie = "my_username=" + u + "; path=http://localhost:3000"
        // document.cookie = "my_password=" + p + "; path=http://localhost:3000"

        // let lastname = localStorage.getItem(key);
    }


    const getCookieData = () => {
        let username = localStorage.getItem('my_username')
        let password = localStorage.getItem('my_password')

        console.log(username)
        console.log(password)

        document.getElementById('username').value = username
        document.getElementById('password').value = password
    }



    return (
        <div className='auth_wrapper'>
            <div className="auth_logo">
                <div className="auth_point">
                </div>

                <h2>Seet and go</h2>
            </div>
            <div className="auth_info" >
                < div className="auth_container" >
                    <div className="auth_head" >
                        <span>Welcome</span>
                        <p > Don`t have an account? <Link  to={'/signup'} style={{ textDecoration: 'none'}}><i>Register now</i></Link></p>
                    </div>

                    <div >
                        <form className="auth_form">
                            <label className="field field_v2">

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
                                <input
                                    id="password"
                                    className="field__input"
                                    type={type}
                                    placeholder="************" />
                                <span className="field__label-wrap">
                                    <span className="field__label">Password</span>
                                </span>
                            </label>


                            <div className="d-flex auth_text">
                                <div className="auth_center">
                                    <p>Remember Me</p>
                                </div>

                                <div className="auth_center">
                                    <p>Forgot password?</p>
                                </div>
                            </div>

                            <button className="auth_btn" onClick={setCookies}>Login</button>
                        </form>


                        <div className="auth_center auth_p">
                            <p>or Login with</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}