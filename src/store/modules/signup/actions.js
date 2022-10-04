import axios from 'axios'
export default{
    async signup(context,payload){
        console.log("signup actions");
        let postData = {
            email : payload.email,
            password : payload.password,
        };
        let response = '';
        response = await axios.post(
                 `https://secure-refuge-14993.herokuapp.com/add_user?username=${payload.username}&password=${payload.password}&role=admin`,
                 postData,
                );
        let responseData = response.data;
        // console.log(response);
        // console.log(res);
        if(response.data.error === 0){
            console.log("no error");
            console.log(responseData);
            console.log(responseData.data.username);
                context.commit('setUserTokenData', {
                    // email: response.data.data.email,
                    password: responseData.data.password,
                    token: responseData.data.id,
                    username: responseData.data.username,
                })
        }
        else if(response.data.error === 1){
            console.log(response);
            console.log("error"+ response.data.message);
            context.commit('setError',{
                error:1,
                errorMessage:responseData.message,
            })
                }
        // if(response.status === 200){
        //     console.log("seccessful 200");
        // }
    }
}