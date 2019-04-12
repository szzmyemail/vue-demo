import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import First from './views/First.vue';
import Second from './views/Second.vue';
import Third from './views/Third.vue';
import thirdOne from './views/thirdComponents/one.vue';
import thirdTwo from './views/thirdComponents/two.vue';
import One from './views/firstComponents/One.vue';
import Two from './views/firstComponents/Two.vue';
import Three from './views/firstComponents/Three.vue';
import Four from './views/Four';
import oneFour from './views/firstComponents/Four.vue';
import oneFive from './views/firstComponents/Five.vue';
import Foo from './views/aboutComponents/Foo.vue';
import Bar from './views/aboutComponents/Bar.vue';
Vue.use(Router);

// 一个路由参数使用'：'标记
// 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
// 提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
// 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
// 复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：
// 或者使用 2.2 中引入的 beforeRouteUpdate 导航守卫：
// 有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/first",
      name: "first",
      component: First,
      children:[
        {
          path:'one',
          name:'one',
          component:One
        },{
          path:'two',
          name:'two',
          component:Two
        },{
          path:'three',
          name:'three',
          component:Three
        },{
          path:'four',
          name:'oneFour',
          component:oneFour
        },{
          path:'five',
          name:'oneFive',
          component:oneFive
        }
      ]
    },
    {
      path: "/second",
      name: "second",
      component: Second,
    },
    {
      path: "/third",
      name: "third",
      component: Third,
      children: [
        {
          path: 'one/:name',
          name: 'thirdone',
          component: thirdOne
        },
        {
          path: 'two',
          name: 'thirdtwo',
          component: thirdTwo
        }
      ]
    },
    {
      path:'/four',
      name:'four',
      component:Four
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      children: [
        {
          path: 'foo/:name',
          name: 'foo',
          component: Foo
        },
        {
          path: 'bar/:name',
          name: 'bar',
          component: Bar
        }
      ]
    }
  ]
});
