
const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'FILTER_START':
            return {
                movies: [],
                isFetching: true,
                error: false
            };
        case 'FILTER_SUCCESS':
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            };
        case 'FILTER_FAILURE':
            return {
                movies: [],
                isFetching: false,
                error: true
            };
        default:
            return {...state}
    }
};

export default FilterReducer;