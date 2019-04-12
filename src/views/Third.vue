<template>
  <div>
    <h3>third</h3>
    <router-link to="/third/one/1000">to third one</router-link> |
    <router-link to="/third/two?name=szzzz">to third two</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Third",
  }
</script>

<style scoped>

</style>