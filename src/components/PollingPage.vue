<template>
    polling page
    {{userDetails}}
    <PollingPageNavigation></PollingPageNavigation>
    <router-view></router-view>
    
</template>

<script>
import PollingPageNavigation from './PollingPageNavigation.vue';
//   import { computed } from 'vue';
//   import {useStore} from 'vuex'
export default {
    name: 'PollingPage',
    components: {
    PollingPageNavigation,
},
    setup() {
        let userDetails = '';
            // Getting the logged in user's details from local storage 
            if(localStorage.getItem('user') !== null){
                userDetails = JSON.parse(localStorage.getItem('user'));
            }
            
        return{
            userDetails
        }
    }
}
</script>