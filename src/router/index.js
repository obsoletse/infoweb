import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index";

Vue.use(VueRouter)

const routes = [
  { path:'/', redirect:'/login' },//主页面重定向
  { path:'/login', component: index}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
