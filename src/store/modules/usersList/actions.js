import axios from 'axios'
export default {
    async getUsersList(context) {
        console.log("users list actions");
        let response = '';

        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/list_users`
        );
        let responseData = response.data;
        console.log(response.status);
        console.log(responseData.data);
        if(response.status === 200){
            context.commit('setUsersList',{
                usersList : responseData.data,
            })
            // context.commit('showLoaderMutation', false, {root:true});
            return true
        } 
    }
}