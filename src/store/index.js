import { createStore } from 'vuex';
import signup from './modules/signup/index'
import usersList from './modules/usersList/index'
// import counterModule from './modules/counterModule/index'
// import todosModule from './modules/todosModule/index'

const store = createStore({
    modules : {
        signup : signup,
        usersList : usersList,
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