<template>
  <div>
    <p>two</p>
    <button @click="getRouter">getRouter</button>
  </div>
</template>

<script>
  export default {
    name: "One",
    methods: {
      getRouter(){
        console.log(this.$router);
        this.$router.push({name: 'three'})
      }
    }
  }
</script>

<style scoped>

</style>