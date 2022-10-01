import axios from 'axios'
export default{
    async signup(context,payload){
        console.log("signup actions");
        let postData = {
            email : payload.email,
            password : payload.password,
        };
       let response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/add_user?username=${payload.username}&password=${payload.password}&role=admin`,
            postData
        )
        console.log(response);
        if(response.status === 200){
            console.log("seccessful 200");
            context.commit('setUserTokenData', {
                email: response.data.email,
                password: response.data.password,
                token: response.data.id,
                username: response.data.username,
            })
        }else{
            console.log('already exists')
        }
    }
}