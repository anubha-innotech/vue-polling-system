import axios from 'axios'
export default {
    // Function when user signs in and create the account 
    async signup(context, payload) {
        console.log("signup actions");
        let response = '';
        context.commit('showLoaderMutation', true, {root:true});
        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/add_user?username=${payload.username}&password=${payload.password}&role=${payload.role}`
        );
        let responseData = response.data;
        if (response.data.error === 0) {
            console.log(responseData);
            context.commit('setUserData', {
                role: responseData.data.role,
                password: responseData.data.password,
                id: responseData.data.id,
                username: responseData.data.username,
            })
            context.commit('setLocalStorage', {
                    role : responseData.data.role,
                    password: responseData.data.password,
                    id: responseData.data.id,
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