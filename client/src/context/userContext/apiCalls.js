import axios from 'axios';
import {updateStart, updateSuccess} from './UserAction';

export const update = async (data, id, dispatch) => {
    // dispatch(updateStart());

    // console.log(id)
    // console.log(data)


    try{
        const res = await axios.patch(`users/${id}`, data);
        // console.log(res)
        // res.data.isAdmin && dispatch(loginSuccess(res.data));
        dispatch(updateSuccess(res.data));
    } catch(e){
        console.log(e);
    }
}
