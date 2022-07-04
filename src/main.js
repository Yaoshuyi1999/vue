import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.baseURL = "http://123.57.109.30:3006"
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
