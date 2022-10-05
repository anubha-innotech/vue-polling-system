export default{
    setUserTokenData(state,payload) {
        // state.email = payload.email;
        state.password = payload.password
        state.token = payload.token;
        state.username = payload.username;
    },

    setError(state,payload) {
        state.error = payload.error;
        state.errorMessage = payload.errorMessage
    },

    setLocalStorage(_, payload){
        let user = {
            'name' : payload.username,
            // 'email' : payload.email,
            'token' : payload.token,
            'password' : payload.password,
        }
        localStorage.setItem('user', JSON.stringify(user));
    }
}