<template>
    <div>
        {{$route.params.Nname}}   <!-- 调用传过来的 并显示 -->
        {{$route.params.Aage}}
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

</style>