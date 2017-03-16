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
        accesstoken: false,
        swi: [false, false, false, false, false, false, false, false],
        changeI: false,
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
