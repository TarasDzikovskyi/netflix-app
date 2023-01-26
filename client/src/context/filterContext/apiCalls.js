import axios from 'axios';
import {FilterStart, FilterSuccess, FilterFailure} from './FilterActions';

export const filterObjects = async (data, dispatch) => {
    dispatch(FilterStart());
    try {
        const res = await axios.get(`/movies/random${data}`);

        dispatch(FilterSuccess(res.data))
    } catch (e) {
        dispatch(FilterFailure())
    }
};
