<template>
  <div id="first-component">
    <h3>{{this.$route.query}}</h3>
    <h3>{{this.$route.params}}</h3>
    <!--<h1>this is first page</h1>-->

    <!--<h1>{{arr | arrSort(1)}}</h1>-->
    <!--<h1>{{arrSortInMethods(arr)}}</h1>-->


    <!--<el-row :gutter="30">-->
      <!--<el-col :span="12">-->
        <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
          <!--<el-tab-pane label="用户管理" name="first">-->
            <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis ex nihil quia repellat similique veniam. Accusantium adipisci cum dignissimos eligendi facere itaque iure sint soluta. Iusto qui tenetur voluptate.</p>-->
          <!--</el-tab-pane>-->
          <!--<el-tab-pane label="配置管理" name="second">2</el-tab-pane>-->
          <!--<el-tab-pane label="角色管理" name="third">3</el-tab-pane>-->
          <!--<el-tab-pane label="定时任务补偿" name="fourth">4</el-tab-pane>-->
        <!--</el-tabs>-->
      <!--</el-col>-->
      <!--<el-col :span="12">-->
        <!--<el-tabs v-model="activeName2" @tab-click="handleClick">-->
          <!--<el-tab-pane label="用户管理2" name="first">-->
            <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis ex nihil quia repellat similique veniam. Accusantium adipisci cum dignissimos eligendi facere itaque iure sint soluta. Iusto qui tenetur voluptate.</p>-->
          <!--</el-tab-pane>-->
          <!--<el-tab-pane label="配置管理2" name="second">2</el-tab-pane>-->
          <!--<el-tab-pane label="角色管理2" name="third">3</el-tab-pane>-->
          <!--<el-tab-pane label="定时任务补偿2" name="fourth">4</el-tab-pane>-->
        <!--</el-tabs>-->
      <!--</el-col>-->
    <!--</el-row>-->


    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router>
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2" route="/first/two">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="/first/three">
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <router-link to="/first/four">
                  <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                  </el-menu-item>
                </router-link>
                <el-menu-item index="/home">
                  <i class="el-icon-document"></i>
                  <span slot="title">导航五</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "First",
    data(){
      return {
        arr:[3,1,2],
        activeName: 'first',
        activeName2: 'second'
      }
    },
    filters:{
      arrSort:function(val,index){
        let newArr = val.slice().sort(function(pre,next) {
          return pre - next;
        });
        console.log(newArr);
        return newArr.splice(index);
      }
    },
    methods:{
      // [Vue warn]: You may have an infinite update loop in a component render function
      // because you're changing the value of data.body within sort. This data change will cause the render function to run again.
      // Using slice will make a copy of the array which means data.body will not change in value, and therefore no re-render will be called.
      arrSortInMethods(val){
        let newArr = val.sort(function(pre,next) {
          return pre - next;
        });
        //console.log(newArr);
        return newArr;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  #first-component{
    .el-tab-pane{
      text-align: left;
    }
    .el-header{
      background: #ccc;
      line-height: 60px;
      color: #fff;
    }
  }
</style>