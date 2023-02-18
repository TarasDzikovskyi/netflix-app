import {useContext, useEffect} from "react";
import jwt_decode from 'jwt-decode';
import {AuthContext} from "./context/authContext/AuthContext";
import {logout} from "./context/authContext/apiCalls";

const AuthVerify = ({ location}) => {
    const {dispatch} = useContext(AuthContext);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if(user !== null && user.access_token){
            const decoded = jwt_decode(user.access_token);

            if(decoded.exp * 1000 < Date.now()){
                logout(dispatch);
                localStorage.setItem('user', null);
            }
            // else console.log( decoded.exp*1000 - Date.now() )
        }
    },[location.pathname])


    return(
        <div></div>
    )
}

export default AuthVerify;