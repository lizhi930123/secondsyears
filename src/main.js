import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './components/App'
//全局状态管理
Vue.use(Vuex)
//vue ajax
Vue.use(VueResource);
//滚动到底部自动加载插件，目前没有使用

const store = new Vuex.Store({
    state: {
        access_token: '',
        //58298c1e6e998f25af9c4cc6.1520494618.e370dd35ffe7917b75718fc28566e1e9
        swi: [false, false, false, false, false, false, false, false],
        showcicle: true,
        share: false,
        changeI: false,
        days: 0,
        signin: 0,
        date: '不久前',
        member: 0,
        follow: 0,
        group: 0,
        friends: 0,
        wealth_in: 0,
        wealth_out: 0,
        current_user: {},
        users: [],
        othershare:false,
        cp:false,
        friend:false,
        firstgroup:false,
        wordlist:[],
    },
    //此为同步方法
    mutations: {
        set(state, {
            obj,
            value
        }) {
            for (let i = 0, l = obj.length; i < l; i++)
                state[obj[i]] = value[i];
        },
    },
})
const app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
