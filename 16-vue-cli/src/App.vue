<template>
  <div id="app">
      <button @click="goBack()">上一页</button>
      <button @click="goFirst()">首页</button>
      <button @click="goNext()">下一页</button>
      <router-link to="/index">首页</router-link>
      <router-link to="/login">登陆</router-link>
      <router-link to="/url/name:zzz/age:20">URL传参</router-link>
      <router-link to="/test">重定位到首页</router-link>
      <router-link to="/url/name:sss/age:88">重定向传参</router-link>
      <router-link to="/love">重定向别名alias</router-link>
      <router-link to="/error">错误404</router-link>
      <router-link to="/count">计算</router-link>
     <transition  name='change'>
         <router-view></router-view>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goFirst(){
      this.$router.push('/index');
    },
    goNext(){
    this.$router.go(1);
    }
  }
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

.change-enter{
   opacity: 0;
}
.change-enter-active{
  transition:  opacity 1s ;
}
.change-enter-to{
  opacity: 1;
}

.change-leave{
   opacity: 1;
}
.change-leave-active{
  transition:  opacity 1s ;
}
.change-leave-to{
  opacity: 0;
}
/* 在进入/离开的过渡中，会有 6 个 class 切换。

1、v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2、v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，
在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3、v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，
在过渡/动画完成之后移除。

4、v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5、v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，
在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6、v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，
在过渡/动画完成之后移除。 */
</style>
