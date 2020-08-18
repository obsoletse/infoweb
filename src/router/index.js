import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index";

Vue.use(VueRouter)

const routes = [
  { path:'/', redirect:'/login' },//主页面重定向
  { path:'/login', component: index},//登录

  //主页面模块
  { path:'/home', component: () => import('@views/home/home'),
  },
  { path:'/My-information', component: () => import('@views/My/My-information'),
  },
  { path:'/My-oder', component: () => import('@views/My/My-oder'),
  },
  { path:'/My-wallet', component: () => import('@views/My/My-wallet'),
  },
  { path:'/massage', component: () => import('@views/My/massage'),
  },
  { path:'/help', component: () => import('@views/My/help'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
