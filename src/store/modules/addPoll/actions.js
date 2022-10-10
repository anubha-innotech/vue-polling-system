import axios from 'axios'
export default {
    // Function when user add a poll
    async addPoll(context, payload) {
        console.log("add poll actions");
        let response = '';
        context.commit('showLoaderMutation', true, {root:true});
        if (payload.option3 === '' ) {
            response = await axios.post(
                `https://secure-refuge-14993.herokuapp.com/add_poll?title=${payload.pollTitle}%20polll&options=${payload.option1}____${payload.option2}`
            );           
        }
        else if(payload.option4 === ''){
            response = await axios.post(
                `https://secure-refuge-14993.herokuapp.com/add_poll?title=${payload.pollTitle}%20polll&options=${payload.option1}____${payload.option2}____${payload.option3}`
            );
        }
        else {
            response = await axios.post(
                `https://secure-refuge-14993.herokuapp.com/add_poll?title=${payload.pollTitle}%20polll&options=${payload.option1}____${payload.option2}____${payload.option3}____${payload.option4}`
            );
        }
        console.log(response);
        let responseData = response.data;
        if(response.status === 200){
            console.log("status200");
            context.commit('setAddPollData',{
                title : responseData.data.title,
                option1 : responseData.data.options[0],
                option2 : responseData.data.options[1],
                option3 : responseData.data.options[2],
                option4 : responseData.data.options[3],
            })
            context.commit('showLoaderMutation', false, {root:true});
            return true
        }
        // let responseData = response.data;
        // if (response.data.error === 0) {
        //     console.log(responseData);
        //     context.commit('setUserTokenData', {
        //         password: responseData.data.password,
        //         token: responseData.data.id,
        //         username: responseData.data.username,
        //     })
        //     context.commit('setLocalStorage', {
        //             password: responseData.data.password,
        //             token: responseData.data.id,
        //             username: responseData.data.username,
        //     })
        //     context.commit('showLoaderMutation', false, {root:true});
        //     return true;
        // }
        // else if (response.data.error === 1) {
        //     context.commit('setError', {
        //         error: 1,
        //         errorMessage: responseData.message,
        //     })
        //     context.commit('showLoaderMutation', false, {root:true});
        //     return false;
        // }
    }
}