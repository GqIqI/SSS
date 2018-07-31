<template>
    <div>
     <ul class="footer" :style="{'background':bg}">
            <li @click="$emit('change',['red','MOVIE'])" > <router-link to="/movie/MovieList"> 电影</router-link></li>
            <li @click="$emit('change',['blue','MUSIC'])"> <router-link to="/music/MusicList">音乐</router-link></li>
            <li><router-link to="">书籍</router-link></li>
            <li><router-link to="">图片</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['bg',]
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
</style>