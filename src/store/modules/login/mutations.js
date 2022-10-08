export default{
    setUserToken(state,payload) {
        state.token = payload.token;
        // state.role = payload.role;
        // state.password = payload.password
        // state.token = payload.token;
        // state.username = payload.username;
    },

    setError(state,payload) {
        state.error = payload.error;
        state.errorMessage = payload.errorMessage
    },

    setLocalStorage(payload){
        // let user = {
            let token = payload.token;
            // 'name' : payload.username,
            // 'role' : payload.role,
            // 'token' : payload.token,
            // 'password' : payload.password,
        // }
        localStorage.setItem('token', JSON.stringify(token));
    }
}