import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {  //存数据
    num : 5,
    x:10
}

const mutations = { //存方法  修改数据
    add(state,sum){
        state.num+=sum;
    },
    reduce(state,n){
        state.num-=n;
    }
}

const getters = {  //计算属性
    count1(state){
        return state.num +100;
    }
}

const actions = {  //异步操作
    actionsAdd({commit},x){
        commit('add',x);
        // setTimeout(function(){
        //     commit('add',x);
        // },1000)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
