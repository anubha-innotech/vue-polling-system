<template>
    my account page
    <!-- {{userDetails}} -->
    {{userSignupData}}
</template>

<script>
    import {
    // ref,
    // toRef,
    // beforeRouteLeave,
    // reactive,
    // isReactive,
    // isRef,
    // toRefs,
    computed,
    // watch
} from 'vue';
import { useStore } from 'vuex';
    export default{
        setup() {
            const store = useStore();
             const userSignupData = computed(() => {
            return store.state.signup
        })
        console.log(userSignupData);
            // let userDetails = '';
            // Getting the logged in user's details from local storage 
            // if(localStorage.getItem('user') !== null){
            //     userDetails = JSON.parse(localStorage.getItem('user'));
            // }
            return{
                // userDetails,
                userSignupData
            }
        }
    }
</script>