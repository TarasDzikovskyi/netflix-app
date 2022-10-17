import axios from 'axios'
import {addToCartStart,addToCartSuccess,addToCartFailure,removeFromCartStart,removeFromCartSuccess,removeFromCartFailure} from './CartActions'

export const addToCart = async (dispatch) => {
    dispatch(addToCartStart())
    try{
        const res = await axios.get('/users/cart', {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(addToCartSuccess(res.data))
    } catch(e){
        dispatch(addToCartFailure())
    }
}

export const removeFromCart = async (id, dispatch) => {
    dispatch(removeFromCartStart())
    try{
        await axios.delete('/users/cart' + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(removeFromCartSuccess(id))
    } catch(e){
        dispatch(removeFromCartFailure())
    }
}