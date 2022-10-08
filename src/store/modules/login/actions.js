import axios from 'axios'
export default {
    // Function when user signs in and create the account 
    async onLogin(context, payload) {
        console.log("login actions");
        let response = '';
        context.commit('showLoaderMutation', true, {root:true});
        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/login?username=${payload.username}&password=${payload.password}`
        );
        console.log(response);
        let responseData = response.data;
        console.log(responseData);
        console.log(response.data.token);
        if (response.data.error === 0) {
            context.commit('setUserToken', {
                token: response.data.token,
            })
            context.commit('setLocalStorage', {
                token : response.data.token,
            })
            context.commit('showLoaderMutation', false, {root:true});
            return true;
        }
        else if (response.data.error === 1) {
            context.commit('setError', {
                error: 1,
                errorMessage: responseData.data,
            })
            context.commit('showLoaderMutation', false, {root:true});
            return false;
        }
    }
}