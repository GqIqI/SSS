<template>
  <div id="app">
      <router-link to="/index">首页</router-link>
      <router-link to="/login">登陆</router-link>
      <router-link to="/url/name:zzz/age:20">URL传参</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
