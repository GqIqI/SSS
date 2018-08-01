<template>
    <div>
       <h5>{{aaa}}</h5>
       <!-- <router-link to="/index/search">查询</router-link> -->
       <router-link :to="{name:'chaxun',params:{aa:'xxx',bb:'yyy'}}">查询</router-link>  <!-- 参数传参 -->
       <router-link to="/index/buy">购买</router-link>
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
              aaa:'这是我的首页'
            }
        }
    }
</script>

<style scoped>
  h5{
      width: 200px;
      height: 200px;
      background: orange;


  }
</style>