import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import Home from '@/components/Home'
import Article from '@/pages/article/Index'
import About from '@/pages/us/About'
import Contact from '@/pages/us/Contact'
import Login from '@/pages/user/Login'
import Registered from '@/pages/user/Registered'
import Forget from '@/pages/user/Forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '文章管理',
      component: Home
    },
    {
      path: '/article/index',
      name: '文章首页',
      component: Article
    },
    {
      path: '/about/us',
      name: '关于我们',
      component: About
    },
    {
      path: '/contact/us',
      name: '联系我们',
      component: Contact
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: Login
    },
    {
      path: '/user/registered',
      name: '用户注册',
      component: Registered
    },
    {
      path: '/user/forget',
      name: '忘记密码',
      component: Forget
    }
  ]
})
