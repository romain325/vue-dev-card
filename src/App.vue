<template>
  <vue-dev-card style="height: 20%; width: 30%;">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <git-hub username="romain325"/>
    <readme username="romain325"/>
  </vue-dev-card>
</template>

<script>
import GitHub from './components/Github/GitHub.vue'
import Readme from './components/Github/Readme.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueDevCard from './VueDevCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VueDevCard,
    GitHub,
    Readme
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
