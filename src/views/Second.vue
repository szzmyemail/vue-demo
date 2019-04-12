<template>
  <div>
    <h3>second</h3>
    <button @click="goToThirdOne1">goToThirdOne1</button> |
    <button @click="goToThirdOne2">goToThirdOne2</button> |
    <button @click="goToThirdOne3">goToThirdOne3</button> |
    <button @click="goToThirdTwo">goToThirdTwo</button>
  </div>
</template>

<script>
  export default {
    name: "second",
    methods: {
      goToThirdOne1(){
        this.$router.push('third/one/szz');
      },
      goToThirdOne2(){
        this.$router.push({path: 'third/one/szz'});
      },
      goToThirdOne3(){
        this.$router.push({name: 'thirdone', params:{name: 'szz'}});
      },

      goToThirdTwo(){
        this.$router.push({path: '/third/two', query:{age : 188}});
      }
    }
  }
</script>

<style scoped>

</style>