<template>
  <div class="about">
    <router-link to="/about/foo/szz">go to foo</router-link> |
    <router-link to="/about/bar/twl">go to bar</router-link>
    <router-view></router-view>
    <p>
      <button @click="changeRoute">changeRoute</button>
    </p>
  </div>
</template>
<script>
  export default {
    name: "about",
    created(){
      //console.log('this.$router');
      //console.log(this.$router);
      //console.log('this.$route');
      //console.log(this.$route);
    },
    methods:{
      changeRoute(){
        const userId = '123';

        //this.$router.push('/first');
        //this.$router.push({path: '/first'});
        //this.$router.push({path: '/first', query: {id: 123}}); //<h3>{{this.$route.query}}</h3>
        //this.$router.push({name: 'first',params:{id : 456}});
        //this.$router.push({path: `/user/${userId}`})
        this.$router.push({path: '/user/678'})
      }
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to);
        console.log(from);
      }
    }
  }
</script>

<style scoped>

</style>
