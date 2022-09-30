<template>
  <NavigationBar/>
  <router-view />
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:lightseagreen;
  height: 100vh;
}
</style>