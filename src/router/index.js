import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index";

Vue.use(VueRouter)

const routes = [
  { path:'/', redirect:'/login' },//主页面重定向
  { path:'/login', component: index},//登录

  //主页面模块
  { path:'/home', component: () => import('@views/home/home')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
