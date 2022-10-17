export const addToCartStart = () => ({
    type: "ADD_CART_START"
})

export const addToCartSuccess = (item) => ({
    type: "ADD_CART_SUCCESS",
    payload: item
})

export const addToCartFailure = () => ({
    type: "ADD_CART_FAILURE"
})

export const removeFromCartStart = () => ({
    type: "REMOVE_FROM_CART_START"
})

export const removeFromCartSuccess = (item) => ({
    type: "REMOVE_FROM_CART_SUCCESS",
    payload: item
})

export const removeFromCartFailure = () => ({
    type: "REMOVE_FROM_CART_FAILURE"
})