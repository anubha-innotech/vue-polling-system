<template>
    polling page
    {{userSignupData}}
</template>

<script>
  import { computed } from 'vue';
  import {useStore} from 'vuex'
export default {
    setup() {
        const store = useStore();
             const userSignupData = computed(() => {
            return store.state.signup
        })
        return{
          userSignupData
        }
    }
}
</script>