import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

Vue.config.productionTip = false;

function initFilter(){
  Vue.filter('toUpperCase',function(val){
    return val.toUpperCase();
  });
}
//全局filter
initFilter();
//vue实例
new Vue({
  router,
  store,
  data:{
    msg : 'rejoice always'
  },
  render: h => h(App)
}).$mount("#app");

