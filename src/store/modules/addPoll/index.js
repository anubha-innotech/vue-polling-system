import actions from "./actions";
import mutations from "./mutations";
// import getters from "./getters";

export default {
    namespaced : true,
    state() {
        return {           
            title: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
        }
    },
    getters: {},
    mutations: mutations,
    actions: actions,
};