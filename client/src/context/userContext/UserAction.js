export const updateStart = () => ({
    type: "UPDATE_START"
});

export const updateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user
});

export const updateFailure = () => ({
    type: "UPDATE_FAILURE"
});
