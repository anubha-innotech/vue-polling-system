export default {
    setUserDetails(state,payload) {
        state.userDetails = payload.userDetails;
    },
    emptyUserDetails(state) {
        state.userDetails = '';
    },
}