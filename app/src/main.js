import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
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