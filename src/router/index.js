import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index";

Vue.use(VueRouter)

const routes = [
  { path:'/', redirect:'/login' },//主页面重定向
  { path:'/login', component: index},//登录

  //主页面模块
  { path:'/home',component:() => import('@views/home/home'),
    children:[
      {path: '/info', component: () => import('@views/menu/info/infoIndex')
      },
      {path: '/workSpace', component: () => import('@views/menu/workSpace/workSpaceIndex')
      },
      {path: '/question', component: () => import('@views/menu/question/questionIndex')
      },
      {path: '/list', component: () => import('@views/menu/list/listIndex')
      },
      {path: '/userInfo', component: () => import('@views/user/userInfo')
      },
      {path: '/help', component: () => import('@views/user/help')
      },
      {path: '/userMessage', component: () => import('@views/user/userMessage/userMessageIndex')
      },
      {path: '/userOrder', component: () => import('@views/user/userOrder/userOrderIndex')
      },
      {path: '/userWallet', component: () => import('@views/user/userWallet')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
