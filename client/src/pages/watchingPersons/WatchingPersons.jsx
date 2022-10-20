import React, { useEffect, useContext, useState } from 'react'
import './watchingPersons.scss'
import logo from '../../content/logo.png';
import img from '../../content/icon_profile.png'
import {login} from '../../context/authContext/apiCalls'
import {AuthContext} from '../../context/authContext/AuthContext'
import CryptoJS from 'crypto-js'

function setCookie( name, value, maxAge, path, domain, secure ) {
	document.cookie = name + "=" +JSON.stringify(value) +
		((maxAge)  ?  "; maxAge=" + maxAge :   "") + 
		((path)  ?  "; path=" + path   :   "")   + 
		((domain)  ?  "; domain="   +  domain :   "")   + 
		((secure)  ?  ";   secure"  :   "");
}


function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
      {
      var c = ca[i].trim();
      if (c.indexOf(name)===0) return c.substring(name.length,c.length);
      }
    return "";
}


export default function WatchingPersons() {
    const [users, setUsers] = useState([])
    const {dispatch} = useContext(AuthContext)

    let user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        let cookies = getCookie('users')

        if(cookies.length == 0) setCookie('users', [],  365*24*60*60*1000, 'localhost:3000')
        else {
            let array = JSON.parse(cookies)
            let isIncluded = array.find(item => item._id == user.user._id) && true || false
            if(isIncluded === false) array.push(user.user)

            setCookie('users', array, 365*24*60*60*1000, 'localhost:3000')
            setUsers(array)
        }

    },[user])

    const handleClick = (id, email, password) => {
        if(user.user._id === id) console.log('qwerty')//navigate('/')
        else{
            const bytes = CryptoJS.AES.decrypt(password, 'otsocity');
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            console.log(originalPassword)
            login({email, originalPassword}, dispatch)
            //navigate('/')
        }
    }



    return (
        <div className='watching'>
            <div className="nav">
                <img src={logo} height={45}/>
            </div>

            <div className="wrapper">
                <div className="block">
                    <h2>Who`s Watching?</h2>
                    <div className="users">
                        {users.map((user) => (
                            <div className="item" key={user._id} onClick={() => handleClick(user._id, user.email, user.password)}>
                                <img src={img} alt="" height={125} />
                                <p>{user.username}</p>
                    
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
