import axios from 'axios'
export default {
    async getAllPolls(context) {
        console.log("dispatch");
        let response = '';

        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/list_polls`
        );
        console.log(response);
        let responseData = response.data;

        // console.log(response.status);
        console.log(responseData.data);
        if(response.status === 200){
            context.commit('setAllPolls',{
                allPolls : responseData.data,
            })
            return true
        } 
    }
}