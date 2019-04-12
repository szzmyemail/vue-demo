<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/first">First</router-link> |
    <router-link to="/second">Second</router-link> |
    <router-link to="/third">Third</router-link> |
    <router-link to="/four">Four</router-link> |
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  $link-color:#f0f;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a{
    text-decoration: none;
    color: #999;
    &:hover{
      color:$link-color;
    }
    &.router-link-exact-active{
      color:$link-color;
    }
  }
}
</style>
