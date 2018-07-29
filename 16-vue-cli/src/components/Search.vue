<template>
    <div>
         <h2> 查询完毕</h2>
         <p>
             {{$route.params.aa}}
             {{$route.params.bb}}
         </p>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
  h2{
      background: palevioletred
  }
</style>