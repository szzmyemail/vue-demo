<template>
  <div>
    <p>four</p>
    <button @click="getRouter">getRouter</button>
  </div>
</template>

<script>
  export default {
    name: "One",
    methods: {
      getRouter(){
        console.log(this.$router);
        this.$router.push({name: 'five'})
      }
    }
  }
</script>

<style scoped>

</style>