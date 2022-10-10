export default{
    setUserData(state,payload) {
        state.role = payload.role;
        state.password = payload.password
        state.id = payload.id;
        state.username = payload.username;
    },

    setError(state,payload) {
        state.error = payload.error;
        state.errorMessage = payload.errorMessage
    },

    setLocalStorage(_, payload){
        let user = {
            'name' : payload.username,
            'role' : payload.role,
            'id' : payload.id,
            'password' : payload.password,
        }
        localStorage.setItem('user', JSON.stringify(user));
    }
}