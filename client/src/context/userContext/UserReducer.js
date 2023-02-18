const UserReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_START':
            return {
                user: JSON.parse(localStorage.getItem("user")),
                isFetching: true,
                error: false
            };
        case 'UPDATE_SUCCESS':
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case 'UPDATE_FAILURE':
            return {
                user: null,
                isFetching: false,
                error: true
            };
        default:
            return {...state}
    }
}

export default UserReducer