import axios from 'axios'
import {addToCartStart,addToCartSuccess,addToCartFailure,removeFromCartStart,removeFromCartSuccess,removeFromCartFailure} from './CartActions'

export const addToCart = async (info, dispatch) => {
    dispatch(addToCartStart())
    try{
        const res = await axios.post('/users/cart', info, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
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
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
            }
        })
        dispatch(removeFromCartSuccess(id))
    } catch(e){
        dispatch(removeFromCartFailure())
    }
}