<template>
  <div>
    <h3>this is third one</h3>
    <h3>this.$route.param: {{this.$route.params}}</h3>
    <h3>this.$route.query: {{this.$route.query}}</h3>
    <button @click="goToSecond">goToSecond</button>
  </div>
</template>

<script>
  export default {
    name: "one",
    methods: {
      goToSecond(){
        this.$router.push('/second');
      }
    }
  }
</script>

<style scoped>

</style>