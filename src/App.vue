<template>
<NavigationBar />
<router-view />
<TheLoader v-if="showLoader" />
</template>

<script>
  import {
    computed,
} from 'vue';
import {
    useStore
} from 'vuex'
import NavigationBar from './components/NavigationBar.vue'
import TheLoader from './components/TheLoader.vue';
export default {
    name: 'App',
    components: {
        NavigationBar,
        TheLoader
    },
    setup() {
        const store = useStore();
        const showLoader = computed(() => {
            return store.state.showLoader
        })

        return {
            showLoader,
        }
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: lightseagreen;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
}
</style>
