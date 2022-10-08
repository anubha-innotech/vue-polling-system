import axios from 'axios'
export default {
    // Function when user signs in and create the account 
    async signup(context, payload) {
        console.log("signup actions");
        // Email and password from signup page as a payload 
        // let postData = {
        //     email: payload.email,
        //     password: payload.password,
        // };
        let response = '';
        context.commit('showLoaderMutation', true, {root:true});
        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/add_user?username=${payload.username}&password=${payload.password}&role=admin`
            // postData,
        );
        let responseData = response.data;
        if (response.data.error === 0) {
            console.log(responseData);
            context.commit('setUserTokenData', {
                // email: responseData.email,
                password: responseData.data.password,
                token: responseData.data.id,
                username: responseData.data.username,
            })
            context.commit('setLocalStorage', {
                    // email: responseData.email,
                    password: responseData.data.password,
                    token: responseData.data.id,
                    username: responseData.data.username,
            })
            context.commit('showLoaderMutation', false, {root:true});
            return true;
        }
        else if (response.data.error === 1) {
            context.commit('setError', {
                error: 1,
                errorMessage: responseData.message,
            })
            context.commit('showLoaderMutation', false, {root:true});
            return false;
        }
    }
}