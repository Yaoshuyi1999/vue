import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"

Vue.filter('toDown', (val) => {
  return val.toLowerCase()
})

Vue.filter('toReverse', (val,split) => {
  return val.split('').reverse().join(split||'')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
