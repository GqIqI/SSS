<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li @click="$emit('change','red','movie')"><router-link to="/movie/movieList">电影</router-link></li>
            <li @click="$emit('change','green','music')"><router-link to="/music/musicList">音乐</router-link></li>
            <li @click="$emit('change','blue','book')"><router-link to="/book">书籍</router-link></li>
            <li @click="$emit('change','orange','photo')"><router-link to="/photo/photoList">图片</router-link></li>
        </ul>
    </div>
</template>
/* 1、父组件可以使用 props 把数据传给子组件。
    2、子组件可以使用 $emit 触发父组件的自定义事件。
    vm.$emit( event, arg ) //触发当前实例上的事件
    vm.$on( event, fn );//监听event事件后运行 fn；  */
<script>
    export default {
        props:['bg'],
        methods:{
        }
    }
</script>

<style scoped>

    .footer{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        position: fixed;
        bottom:0px;
        width: 100%;
    }
    .footer li{
        flex-grow: 1;
        text-align: center;
        color: #ccc;

    }
    .footer li a{
        color: #999;
    }
    .footer li a.router-link-active{
        color: #fff;
    }






</style>