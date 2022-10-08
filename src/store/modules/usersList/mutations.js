export default{
    setUsersList(state,payload) {
        // state.email = payload.email;
        state.usersList = payload.usersList
    },

    // setLocalStorage(_, payload){
    //     let user = {
    //         'name' : payload.username,
    //         // 'email' : payload.email,
    //         'token' : payload.token,
    //         'password' : payload.password,
    //     }
    //     localStorage.setItem('user', JSON.stringify(user));
    // }
}