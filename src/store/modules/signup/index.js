import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
    namespaced : true,
    state() {
        return {           
            email: '',
            password: '',
            token : '',
            username: '',
            error: '',
            errorMessage: '',
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};