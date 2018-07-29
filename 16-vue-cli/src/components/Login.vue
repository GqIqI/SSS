<template>
    <div>
       <h6>{{aaa}}</h6>
       <router-link to="/login/name">输入姓名</router-link>
       <router-link to="/login/password">设置密码</router-link>
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
              aaa:'登录登录登陆'
            }
        }
    }
</script>

<style scoped>
  h6{
      width: 200px;
      height: 200px;
      background: palegreen

  }
</style>