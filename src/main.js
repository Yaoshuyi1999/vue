import Vue from 'vue'
import App from './App.vue'

import Find from "@/views/Find.vue"
import My from "@/views/My.vue"
import Part from "@/views/Part.vue"
import NotFound from "@/views/NotFound.vue"

import Ranking from "@/views/Second/Ranking"
import Recommend from "@/views/Second/Recommend"
import SongList from "@/views/Second/SongList"

import New from "@/views/Third/New"
import Hot from "@/views/Third/Hot"
import Soaring from "@/views/Third/Soaring"
Vue.config.productionTip = false

// 1、下载
// 2、引入
import VueRouter from 'vue-router'

let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
// 3、使用路由插件
Vue.use(VueRouter)
// 4、创建规则
const routes=[
  {
    path:'/',
    redirect:'/find',
  },
  {
    path:'/find',
    component:Find,
    redirect:'/find/recommend',
    name: 'find',
    children: [
      {
        path: "recommend",
        component: Recommend
      },
      {
        path: "ranking",
        component: Ranking,
        redirect:'/find/ranking/hot',
        children:[
          {
            path: "hot",
            component: Hot,
          },
          {
            path: "new",
            component: New
          },
          {
            path: "soaring",
            component: Soaring
          },
        ]
      },
      {
        path: "songlist",
        component: SongList
      }
    ]
  },
  {
    path:'/my',
    component:My,
    name: 'my',
  },
  {
    // path:'/part/:username/:id',
    path:'/part',
    component:Part,
    name: 'part',
  },
  {
    path:'*',
    component:NotFound,
  }
]
// 5、创建路由对象
const router = new VueRouter({
  routes,
})

const islogin=false;
router.beforeEach((to,from,next) => {
  if(to.path==='/my'&&!islogin){
    alert('login')
    next(false);
  }else{
    next();
  }
  // if(to.path!=='/part'){
  //   next('/part');
  // }else{
  //   next();
  // }
})

const vm=new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
console.log("vm",vm);
