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
    },
    async deletePoll(_,payload) {
        let response = '';

        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${payload.pollId}`
        );
        console.log(response);
        return true
        
    },
    // async onVotingPoll(_,payload) {
    //     let response = '';

    //     response = await axios.post(
    //         `https://secure-refuge-14993.herokuapp.com/do_vote?id=${payload.pollId}&option_text=${payload.optionText}`
    //     );
    //     console.log(response);
    //     return true
        
    // }
    async deletePollOption(_,payload) {
        let response = '';

        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${payload.pollId}&option_text=${payload.optionText}`
        );
        console.log(response);
        return true
        
    },
    async onUpdateTitle(_,payload) {
        let response = '';

        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${payload.pollId}&title=${payload.updatedTitle}`
        );
        console.log(response);
        return true
        
    },
    async addPollOption(_,payload) {
        let response = '';

        response = await axios.post(
            `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${payload.pollId}&option_text=${payload.newPollOption}`
        );
        console.log(response);
        return true
    }
}