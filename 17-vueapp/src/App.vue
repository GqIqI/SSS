<template>
  <div id="app">
    <common-header  :bg="bgcolor" :title="name" ></common-header>
   <router-view></router-view>
   <common-footer :bg="bgcolor"  @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
export default {
  name: 'App',
  data(){
    return{
      bgcolor:"red",
      name:'movie'
    }
  },
  methods:{
     fn([color,tt]){
        this.bgcolor=color;
        this.name=tt
     }
  },
  components:{
            CommonHeader,
            CommonFooter
        }
        
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.32rem;

}
</style>
