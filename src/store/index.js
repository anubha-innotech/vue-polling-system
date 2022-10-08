import { createStore } from 'vuex';
import signup from './modules/signup/index'
// import counterModule from './modules/counterModule/index'
// import todosModule from './modules/todosModule/index'

const store = createStore({
    modules : {
        signup : signup,
        // todosModule : todosModule,
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