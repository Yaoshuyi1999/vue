import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"

import MyGoodsList from "@/views/MyGoodsList";
import MyGoodsSearch from "@/views/MyGoodsSearch";
import MyUserInfo from "@/views/MyUserInfo";
import NotFound from "@/views/NotFound";

// 2、导入
import VueRouter from 'vue-router'
// 3、使用路由插件
Vue.use(VueRouter)
// 4、创建路由规则数组
const routes=[
  {
		path:'/',
		redirect:'/mygoodslist'
	},
  {
    path: "/mygoodslist",
    component:MyGoodsList
  },
  {
    path: "/mygoodssearch",
    component:MyGoodsSearch,
  },
  {
    path: "/myuserinfo",
    component:MyUserInfo
  },
  {
    path:"*",
    component:NotFound
  }
]

// 5、创建路由对象
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios=axios

Vue.directive("focus", {
  inserted(el){
    el.focus()
  }
})

// 6、关联到vue实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')







