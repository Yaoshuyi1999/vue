import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import panel from "./components/01_Panel.vue";
// Vue.component('panel',panel)

new Vue({
  render: h => h(App),
}).$mount('#app')
