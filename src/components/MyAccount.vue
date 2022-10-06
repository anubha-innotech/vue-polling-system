<template>
    my account page
    {{userDetails}}
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
    // computed,
    // watch
} from 'vue';
// import { useStore } from 'vuex';
    export default{
        setup() {
        //     const store = useStore();
        //      const userDetails = computed(() => {
        //     return store.state.signup
        // })
            let userDetails = '';
            // Getting the logged in user's details from local storage 
            if(localStorage.getItem('user') !== null){
                userDetails = JSON.parse(localStorage.getItem('user'));
            }
            return{
                userDetails,
            }
        }
    }
</script>