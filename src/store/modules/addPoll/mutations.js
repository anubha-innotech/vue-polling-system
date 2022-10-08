export default{
    setAddPollData(state,payload) {
        state.title = payload.title;
        state.option1 = payload.option1
        state.option2 = payload.option2;
        state.option3 = payload.option3;
        state.option4 = payload.option4;
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