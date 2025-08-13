import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})
import {asyncRoutes} from './asyncRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    meta:{
      name:'Home',
      title:'首页',
      icon:'HomeOutlined'
    },
    component:()=>import('@/views/Layout/index.vue')
  },
   {
    path:'/login',
    name:'Login',
    meta:{
      title:'登录',
      icon:'UserOutlined'
    },
    component:()=>import('@/views/Login/index.vue')
  },
  ...asyncRoutes,
  ],
})
//路由守卫

router.beforeEach(() => {
  //进度条开始
  NProgress.start()
})
//全局的后置导航
router.afterEach((to) => {
  //进度条结束
  NProgress.done()
  //动态设置标题
  document.title = `${to.meta.title || import.meta.env.VITE_APP_TITLE}`
})
export default router
