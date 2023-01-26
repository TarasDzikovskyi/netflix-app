export const FilterStart = () => ({
    type: "FILTER_START"
});

export const FilterSuccess = (item) => ({
    type: "FILTER_SUCCESS",
    payload: item
});

export const FilterFailure = () => ({
    type: "FILTER_FAILURE"
});
