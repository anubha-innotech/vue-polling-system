export default{
    setUserTokenData(state,payload) {
        state.email = payload.email;
        state.password = payload.password
        state.token = payload.token;
        state.userrname = payload.uesrname;
    }
}