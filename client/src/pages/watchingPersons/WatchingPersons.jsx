import React, {useEffect, useContext, useState} from 'react'
import './watchingPersons.scss'
import logo from '../../content/logo.png';
import img from '../../content/icon_profile.png'
import {login} from '../../context/authContext/apiCalls'
import {AuthContext} from '../../context/authContext/AuthContext'
import CryptoJS from 'crypto-js'
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import Intro from "../../components/intro/Intro";

function setCookie(name, value, maxAge, path, domain, secure) {
    document.cookie = name + "=" + JSON.stringify(value) +
        ((maxAge) ? "; maxAge=" + maxAge : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? ";   secure" : "");
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}


function timeout(el) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(el);
        }, 4000);
    });
    return promise;
}


export default function WatchingPersons({user}) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        const intro = async() => {
            const res = await timeout(false);
            setLoading(res)
        }
        intro()

        let cookies = getCookie('users');

        if (cookies.length === 0) setCookie('users', [], 365 * 24 * 60 * 60 * 1000, 'localhost:3000');
        else {
            let array = JSON.parse(cookies);
            let isIncluded = array.find(item => item.id === user.user.id) && true || false;
            if (isIncluded === false) array.push(user.user);

            setCookie('users', array, 365 * 24 * 60 * 60 * 1000, 'localhost:3000');
            setUsers(array);
        }
    }, [])

    const handleClick = async (id, email, password) => {
        if (user.user.id === id) navigate('/')
        else {
            const bytes = CryptoJS.AES.decrypt(password, 'otsocity');
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            await login({email, originalPassword}, dispatch);
            navigate('/');
        }
    }

    return (
        <>
            {loading === true ? (
                <Intro/>
            ) : (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <div className='watching'>
                        <div className="nav">
                            <img src={logo} height={45}/>
                        </div>

                        <div className="wrapper">
                            <div className="block">
                                <h2>Who`s Watching?</h2>
                                <div className="users">
                                    {users.map((user) => (
                                        <div className="item" key={user.id}
                                             onClick={() => handleClick(user.id, user.email, user.password)}>
                                            <img src={user.profilePic} alt="" height={125}/>
                                            <p>{user.username}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}
