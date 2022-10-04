import actions from "./actions";
import mutations from "./mutations";

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
    getters: {},
    mutations: mutations,
    actions: actions,
};