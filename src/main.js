import Vue from 'vue'
import App from './App.vue'

import Home from "@/view/Home"
import Classify from "@/view/Classify"
import Order from "@/view/Order"
import My from "@/view/My"
import NotFound from "@/view/NotFound"

import Food from "@/view/second/Food"
import Clothes from "@/view/second/Clothes"
import Use from "@/view/second/Use"

import Boy from "@/view/third/Boy"
import Child from "@/view/third/Child"
import Girl from "@/view/third/Girl"
// 2、导入
import VueRouter from 'vue-router'
// 3、使用路由插件
Vue.use(VueRouter)
// 4、创建路由规则数组
const routes=[
  {
		path:'/',
		redirect:'/home'
	},
  {
    path: "/home",
    component:Home
  },
  {
    path: "/classify",
    component:Classify,
    redirect:'/classify/food',
    children:[
      {
        path: "use",
        component:Use
      },
      {
        path: "food",
        component:Food
      },
      {
        path: "clothes",
        component:Clothes,
        redirect:'/classify/clothes/child',
        children:[
          {
            path: "boy",
            component:Boy
          },
          {
            path: "child",
            component:Child
          },
          {
            path: "girl",
            component:Girl
          },
        ]
      },
    ]
  },
  {
    path: "/order",
    component:Order
  },
  {
    path: "/my",
    component:My
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
// 6、关联到vue实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
