import actions from "./actions";
import mutations from "./mutations";

export default {
    namespaced : true,
    state() {
        return {           
            usersList: [],
        }
    },
    mutations: mutations,
    actions: actions,
};