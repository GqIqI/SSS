import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    num : 5,
    x:10
}

const mutations = {
    add(state,sum){
        state.num+=sum;
    },
    reduce(state,n){
        state.num-=n;
    }
}

const getters = {
    count1(state){
        return state.num +100;
    }
}

const actions = {
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
