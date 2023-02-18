import axios from 'axios';
import {loginStart, loginSuccess, logoutSuccess} from './AuthAction';

export const login = async (user, dispatch) => {
    dispatch(loginStart());

    try{
        const res = await axios.post('auth/login', user);
        // res.data.isAdmin && dispatch(loginSuccess(res.data));
        dispatch(loginSuccess(res.data));
        return res.data
    } catch(e){
        console.log(e);
    }
}

export const logout = async (dispatch) => {
    try{
        await axios.post('auth/logout');
        // res.data.isAdmin && dispatch(loginSuccess(res.data));
        dispatch(logoutSuccess());
    } catch(e){
        console.log(e);
    }
}
