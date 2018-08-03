<template>
    <div>
         <!-- {{$store.state.num}} -->
        {{num}} {{x}}
        <!-- {{count}} -->
        <h1>getter:{{count1}}</h1>
        <!-- {{actionsAdd(50)}} -->
        <button @click="add()">+1</button>
         <button @click="$store.commit('add',20)">+1</button> <!-- 第一种直接调用方法 -->
        <button @click="reduce(10)">-1</button> 
        <button @click="actionsAdd(50)">actions</button>           
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'//{}解构出来从vuex
    export default {
        store,
        /* computed:{
            count(){
                return this.$store.state.num;
            }
        } */

       /*  computed:mapState({
            count:state=>state.count
        }) */

        /* computed:mapState({
            count(state){
                return state.num;
            }
        }) */
        // computed:mapState(['num']),
        
        
        computed:{
            ...mapState(['num','x']),
            ...mapGetters(['count1'])
            },
        methods:{   //第二种 map映射  可直接在页面调用  就不用$store.commit('add')"
            ...mapMutations(['add','reduce']),
            ...mapActions(['actionsAdd'])
        }

        
        
    }
</script>

<style scoped>

</style>