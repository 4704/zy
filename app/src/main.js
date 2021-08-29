import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible';
Vue.use(ElementUI);
Vue.use(Vant);
Vue.prototype.axios = axios
Vue.config.productionTip = false

import { base_url } from '@/config/index.js'
console.log(base_url);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')