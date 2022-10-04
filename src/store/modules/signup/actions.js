import axios from 'axios'
// import {router} from '../../../main.js'
// import { useRouter } from 'vue-router'
export default {
    async signup(context, payload) {
        console.log("signup actions");
        let postData = {
            email: payload.email,
            password: payload.password,
        };
        let response = '';
        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/add_user?username=${payload.username}&password=${payload.password}&role=admin`,
            postData,
        );
        let responseData = response.data;
        // console.log(response);
        // console.log(res);
        if (response.data.error === 0) {
            console.log("no error");
            console.log(responseData);
            console.log(responseData.data.username);
            context.commit('setUserTokenData', {
                email: responseData.email,
                password: responseData.data.password,
                token: responseData.data.id,
                username: responseData.data.username,
            })
            return true;
            // const router = useRouter();
            // console.log(useRouter);
            // console.log(router);
            // router.push('/')          
        }
        else if (response.data.error === 1) {
            console.log(response);
            console.log("error" + response.data.message);
            context.commit('setError', {
                error: 1,
                errorMessage: responseData.message,
            })
            return false;
        }
        // return responseData
        // if(response.status === 200){
        //     console.log("seccessful 200");
        // }
    }
}