
export default {
    // Function to get user details from local storage and sava in store state
    getUserDetails(context) {
        if (localStorage.getItem('user') !== null) {
            console.log('user details actions')
            let userDetails = '';
            userDetails = JSON.parse(localStorage.getItem('user'));
            context.commit('setUserDetails', {
                userDetails: userDetails,
            })
            console.log('fetching user details');
            return true
        }      
    },
    emptyUserDetails(context) {
        localStorage.clear();
        context.commit('emptyUserDetails', {
            // userDetails: userDetails,
        })
    }
}