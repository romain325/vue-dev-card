<template>
  <vue-dev-card>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <git-hub username="romain325"/>
  </vue-dev-card>
</template>

<script>
import GitHub from './components/Github/GitHub.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueDevCard from './VueDevCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VueDevCard,
    GitHub
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
