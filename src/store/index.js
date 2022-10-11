import { createStore } from 'vuex';
import signup from './modules/signup/index'
import login from './modules/login/index'
import usersList from './modules/usersList/index'
import addPoll from './modules/addPoll/index'
import allPolls from './modules/allPolls/index'
import userDetails from './modules/userDetails/index'

const store = createStore({
    modules : {
        signup : signup,
        login : login,
        usersList : usersList,
        addPoll : addPoll,
        allPolls : allPolls,
        userDetails : userDetails,
    },
    state() {
        return {
            showLoader : false,
        };
    },
    getters: {},
    actions: {}, 
    mutations: {
        showLoaderMutation(state, payload) {
            state.showLoader = payload;
        }
    }
})

export default store;