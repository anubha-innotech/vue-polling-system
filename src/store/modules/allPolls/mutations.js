export default{
    setAllPolls(state,payload) {
        state.allPolls = payload.allPolls
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