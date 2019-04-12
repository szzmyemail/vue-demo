<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>{{message | toUpperCase}}</h3>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data(){
    return {
      message : 'rejoice always'
    }
  },
  components: {
    HelloWorld
  },
  watch:{
    message(newVal,oldVal){
      console.log(newVal);
      console.log(oldVal);
    }
  }
};
</script>
